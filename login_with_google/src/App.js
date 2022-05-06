import './App.css';
import GoogleLogin from "react-google-login";
import { useState } from 'react';

function App() {

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null
  );

  const onGoogleLogin = async (googleData) => {
    // console.log(googleData);
    const result = await fetch('/api/google-login',{
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await result.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };

  const onGoogleFail = (error) => {
    console.log(error);
  };

  const handleLogout = ()=>{
    localStorage.removeItem('loginData');
    setLoginData(null);
  }

  const clientId =
  "712781514852-0ntojjfpll8htjkfkulut9k1squ29fqs.apps.googleusercontent.com";

  return (
    <div className="App">
    <div>
      {
          loginData ? (
            <div>
              <h3>Logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ): (
            <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onGoogleLogin}
        onFailure={onGoogleFail}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
          )
      }
    </div>

    </div>
  );
}

export default App;
