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
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div>
        <a
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
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

      <div className="flex flex-row justify-center items-center w-full">
        <div className="image-component flex flex-col items-center" style={{ marginRight: '20px' }}>
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

        <div className="side-table-container" style={{ marginLeft: '20px' }}>
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
                  <form action="calc_score" method='POST'>
                    <p className="centered"> Put in the RGB values </p> 

                    <label htmlFor="color1">Color 1: </label>
                    <input type="text" id="color1" name="color1"></input>
                    
                    <label htmlFor="color2">Color 2: </label>
                    <input type="text" id="color2" name="color2"></input>

                    <label htmlFor="color3">Color 3: </label>
                    <input type="text" id="color3" name="color3"></input>

                    <input type="submit" value="Submit"></input>
                  </form>
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
      </div>

      <table style={{ marginTop: '40px' }}>
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
