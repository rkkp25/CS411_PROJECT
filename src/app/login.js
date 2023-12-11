import {GoogleLogin} from 'react-google-login';

const clientId = '583801322017-9v87alfn20pi3n7fmldb6cllgpml54b2.apps.googleusercontent.com';

function Login() {

    const onsuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
    }

    const onfailure = (res) => {
        console.log('Login Failed: res:', res);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onsuccess}
                onFailure={onfailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    );
}
export default Login;