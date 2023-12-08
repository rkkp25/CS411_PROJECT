import Image from 'next/image';

const Color1 = "#1d6281"; // Green
const Color2 = "#c5daad"; // Green
const Color3 = "#70b8c5"; // Green

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
        <p className="position: centered">Login</p>
          <form action="login" method='POST'>
            <label htmlFor="email">Email: </label>
            <br></br>
            <input type="text" id="color1" name="color1"></input><br></br>

            <label htmlFor="password">Password: </label>
            <br></br>
            <input type="text" id="color3" name="color3"></input><br></br>

            <input type="submit" value="Submit"></input>
          </form>
      </div>

      {/*
      <script>
      function openForm() {
        document.getElementById("myForm").style.display = "block"}

      function closeForm() {
        document.getElementById("myForm").style.display = "none"}
      </script>
      */}
      <div>
        <a
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <script src="backend.py"></script>
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
            id="artworkImage"
            alt="Random Artwork"
            width={500}
            height={2}
            priority
          />
        {/*
            <Image
              src="/starry_night.jpg"
              alt="Starry Night"
              width={500}
              height={500}
              priority
            />
          */}
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
                  <form action="calc_score" method='GET'>
      {/* Calculated Score: " {% if data %} " */}
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
