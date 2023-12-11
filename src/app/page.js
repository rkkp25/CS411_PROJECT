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

  const fetchArtwork = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/getRandomArtwork', { method: 'GET', mode: 'cors' }); // Adjust this URL to your API endpoint
      const data = await response.json();
      console.log(data)
      setArtworkUrl(data.artworkUrl); // Assuming the response contains the URL in 'artworkUrl' field
      setTopColors(data.topColors);
    } catch (error) {
      console.error('Error fetching artwork:', error);
    }
  };

  // const fetchTopColors = async () => {
  //   try {
  //     const response = await fetch('http://127.0.0.1:5000/api/getColorFromArtwork');
  //     const data = await response.json();
  //     setTopColors(data.topColors);
  //   } catch (error) {
  //     console.error('Error fetching top colors:', error);
  //   }
  // };

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
        <div className= "position: centered">
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
      </div>


      /*

      <table style={{ marginTop: '40px' }}> {/* want to use display_score here */}
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
          <tr>
            <td>Amongus</td>
            <td>A Score</td>
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
