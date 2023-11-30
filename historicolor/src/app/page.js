import Image from 'next/image';

const Color1 = "#00FF00"; // Green
const Color2 = "#00FF00"; // Green
const Color3 = "#00FF00"; // Green

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


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* HISTORICOLOR LOGO */}
      <div>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/histori_logo.svg"
            alt="Historicolor Logo"
            width={500}
            height={2}
            priority
          />
        </a>
      </div>

      {/* Flex Container for Image and Color Information */}
      <div className="flex flex-row justify-center items-start w-full">
        {/* IMAGE FROM API */}
        <div className="image-component flex flex-col items-center">
      {/* IMAGE FROM API */}
      {/* this is where we would make a call to the api and then display the image
      <div className="main-component">
      */}
          <a
            className="pointer-events-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/starry_night.jpg"
              alt="Starry Night"
              width={500}
              height={500}
              priority
            />
          </a>
        </div>

      {/* table for the side */}
          <table className="side-table">
           <tbody>
            <tr>
              <td>
                <div className="centered">
                  <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                    <Circle color={Color1} />
                    <Circle color={Color2} />
                    <Circle color={Color3} />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                this is the form field but it doesn't work
      {/*
                <form action="/action_page.php">
                  <p> Color 1: </p>
                  <label for="fname">Red:</label>
                  <input type="text" id="C1R" name="C1R">
                  <label for="fname">Green:</label>
                  <input type="text" id="fname" name="fname">
                  <label for="fname">Blue:</label>
                  <input type="text" id="fname" name="fname">
                  
                  <input type="submit" value="Submit">
                </form>
        */}
              </td>
            </tr>
            <tr>
              <td>
                Calculated Score
              </td>
            </tr>
           </tbody>
          </table>

    </div>



      {/*  SCOREBOARD */}
      <table>
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
    </main>
  )
}
