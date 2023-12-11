import {GoogleLogout} from 'react-google-login';

const clientId = '583801322017-9v87alfn20pi3n7fmldb6cllgpml54b2.apps.googleusercontent.com';

function Logout() {

    const logoutSuccess = () => {
        console.log('Logout Success');    
    }
    
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logoutSuccess}
            />
        </div>
    )
}
export default Logout;