"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LogInButton from './login.js';
import LogOutButton from './logout.js';
import {gapi} from 'gapi-script';

const clientId = '1000000000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com';

const Circle = ({ color }) => (
  <div style={{
    width: '50px',
    height: '50px',
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
    margin: '10px'
  }} />
);

//trying smthng

export default function Home() {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    };

    gapi.load('client:auth2', start);
  });

  // State for storing artwork URL
  const [artworkUrl, setArtworkUrl] = useState('');
  const [topColors, setTopColors] = useState([]);
  const [colorGuesses, setColorGuesses] = useState({});
  const [calculatedScore, setCalculatedScore] = useState(null);
  const [actualColors, setActualColors] = useState([]); // Store actual colors

  const parseRGBInput = (rgbString) => {
    return rgbString.split(',').map(num => parseInt(num.trim(), 10));
  };

  const fetchArtwork = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/getRandomArtwork', { method: 'GET', mode: 'cors' });
      const data = await response.json();
      setArtworkUrl(data.artworkUrl);
    
      // Check if topColors is an array before setting it
      if (Array.isArray(data.topColors)) {
        setTopColors(data.topColors);
        setActualColors(data.topColors); // Store the actual colors here
      } else {
        setTopColors([]);
        setActualColors([]); // Reset actualColors as well
      }
    } catch (error) {
      console.error('Error fetching artwork:', error);
      setTopColors([]); // Set to empty array in case of error
      setActualColors([]); // Reset actualColors as well
    }
  };

  const handleColorGuessChange = (index, value) => {
    setColorGuesses(prev => ({ ...prev, [index]: value }));
  };

  {/*
  const submitColorGuesses = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        guesses: Object.values(colorGuesses),
        actualColors: actualColors, // Include actual colors in the payload
      };
      const response = await fetch('http://127.0.0.1:5000/api/submitColorGuesses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      // Process the response, e.g., display the calculated score
    } catch (error) {
      console.error('Error submitting color guesses:', error);
    }
  };
  */}
   
    const calculateScore = () => {
      const hexToRgb = hex => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
      };

      let totalDifference = 0;
      const maxDifferencePerColor = 255 * 3; // Maximum difference per color

      actualColors.forEach((color, index) => {
        const actualRgb = hexToRgb(color);
        const guessRgb = hexToRgb(colorGuesses[index] || '#000000');
        totalDifference += actualRgb.reduce((acc, val, i) => acc + Math.abs(val - guessRgb[i]), 0);
      });

      const totalMaxDifference = maxDifferencePerColor * actualColors.length; // Maximum possible difference for all colors
      const percentageScore = (1 - (totalDifference / totalMaxDifference)) * 100;

      setCalculatedScore(Math.round(percentageScore * 100) / 100); // Round to two decimal places
    };

  {topColors?.map((color, index) => (
    <input
      key={index}
      type="text"
      placeholder={`Guess for color ${index + 1}`}
      value={colorGuesses[color] || ''}
      onChange={e => handleColorGuessChange(color, e.target.value)}
    />
  ))}
  <button type="submit">Submit Guesses</button>

  // Fetch artwork on component mount
  useEffect(() => {
    fetchArtwork();
    // fetchTopColors();
  }, []);



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 15px',
          backgroundColor: '#da3d4f',
          color: 'black',
          borderRadius: '5px',
        }}
      >
        <p className="position: centered">Login With Google</p>
        <div className="position: centered">
        <LogInButton />
        {/* <LogOutButton /> */}
      </div>
      </div>

      <div>
        <a
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <script src="/backend.py"></script> */}
          <Image
            src="/histori_logo.svg"
            alt="Historicolor Logo"
            width={500}
            height={2}
            priority
          />
        
        </a>
      </div>

      <div className="flex flex-row justify-center items-center w-full">
        <div className="image-component flex flex-col items-center" style={{ marginRight: '20px' }}>
          <a
            className="pointer-events-none"
            target="_blank"
            rel="noopener noreferrer"
          >
          {artworkUrl && (
              <Image 
                id="artworkImage"
                src={artworkUrl}
                alt="Random Artwork"
                width={500}
                height={500}
                priority
              />
            )}
          </a>
        </div>

        <div className="side-table-container" style={{ marginLeft: '20px' }}>
          {topColors && topColors.map((color, index) => (
            <div key={index} style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              borderRadius: '50%',
              display: 'inline-block',
              margin: '10px'
            }} />
          ))}
        </div>
      </div><br></br>
      <p> Type in the hashtag and the following 6 hex digits for each color below! </p><br></br>




  {/*
      <form onSubmit={submitColorGuesses}>
        {topColors.map((color, index) => (
          <input
            key={index}
            type="text"
            maxLength="7"
            placeholder={`Guess for color ${index + 1}`}
            value={colorGuesses[index] || ''}
            onChange={e => handleColorGuessChange(index, e.target.value)}
          />
        ))}
        <button type="submit">Submit Guesses</button>
      </form>

  */}

    <form onSubmit={(e) => { e.preventDefault(); calculateScore(); }}>
        {topColors.map((color, index) => (
          <input
            key={index}
            type="text"
            maxlength="7"
            placeholder={`Guess for color ${index + 1}`}
            value={colorGuesses[index] || ''}
            onChange={e => handleColorGuessChange(index, e.target.value)}
          />
        ))}
        <button type="submit">Calculate Score</button>
      </form>

      {calculatedScore !== null && (
        <p>Your calculated score is: {calculatedScore}</p>
      )}

      <table style={{ marginTop: '40px' }}>{/* want to use display_score here */}
        <tbody>
          <tr>
            <th>Initials</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>Kris</td>
            <td>K Score</td>
          </tr>
          <tr>
            <td>Valentina</td>
            <td>V Score</td>
          </tr>
          <tr>
            <td>Ashton</td>
            <td>A Score</td>
          </tr>
          <tr>
            <td>Mithat</td>
            <td>M Score</td>
          </tr>
        </tbody>
      </table>

      {/* Non-interactive Share Box 
      */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 15px',
          backgroundColor: '#da3d4f',
          color: 'white',
          borderRadius: '5px',
          textAlign: 'center'
        }}
      >
        Share
      </div>
      {/* Non-interactive Share Box 
      <div className="shareBox">
        Share
      </div>
      */}
    </main>
  )
}
