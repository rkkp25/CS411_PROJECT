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

        {/* Color Information Group */}
        <div className="group rounded-lg border border-black px-5 py-4 transition-colors">
          {/* Color Circles */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <Circle color={Color1} />
            <Circle color={Color2} />
            <Circle color={Color3} />
          </div>
          
          {/* Color Information */}
          <div className="enter-rbg">
            C1: Red: blah -- Green: blah -- Blue: blah <br/>
            C2: Red: blah -- Green: blah -- Blue: blah <br/>
            C3: Red: blah -- Green: blah -- Blue: blah <br/>
          </div>
          
          <div className="score">
            This is where the calculated score would be outputted
          </div>
        </div>
      </div>

      {/* table for the side */}
          <table className="side-table">
           <tbody>
            <tr>
              <td>
                <div className="centered">
                Colors
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
                  <p> Color 2: </p>
                  <label for="fname">Red:</label>
                  <input type="text" id="C2R" name="fname">
                  <label for="fname">Green:</label>
                  <input type="text" id="fname" name="fname">
                  <label for="fname">Blue:</label>
                  <input type="text" id="fname" name="fname">

                  <p> Color 3: </p>
                  <label for="fname">Red:</label>
                  <input type="text" id="C3R" name="C3R">
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
      {/*
        <div className="box-container">
                *colors are supposed to go here*
        <div className="divider"></div>
        <div className="enter-rbg">
            
        </div>
        <div className="score">
            This is where the calculated score would be outputed
        </div>
       </div>
       */}
         

         </a>
      </div>





      {/*
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Scoreboard{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div>
*/}
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
