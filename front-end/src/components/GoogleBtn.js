import React, { useState } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import axios from 'axios';

function GoogleBtn() {
    const [islogin, setLogin] = useState(false);
    const clientId = "194829055407-l327u9iqun69ol3sb3s0r267t2vq71gn.apps.googleusercontent.com";
    
		const onSuccess = async(response) => {
	
			axios.post(
				"/api/v1/user", {
					email : response.profileObj.email,
					name : response.profileObj.name,
					picture : response.profileObj.imageUrl
				}).then(response => {
					alert("로그인 되었습니다.");
					setLogin(true);
					window.location.href = "/";
				}).catch(error => {
					alert("로그인에 실패하였습니다.");
					console.log(error.response.data);
				});
    }

    const onFailure = (error) => {
        console.log(error);
    }

		const logout = () => {
			alert("로그아웃 되었습니다.");
			setLogin(false);
			window.location.href = "/";
		}

    return(
        <div>
            {islogin ? (
              <GoogleLogout
								clientId={clientId}
								buttonText='Logout'
								onLogoutSuccess={logout}
							/>
            ) : (
							<GoogleLogin
								clientId={clientId}
								buttonText='Login'
								responseType={"id_token"}
								onSuccess={onSuccess}
								onFailure={onFailure}
								// isSignedIn={true}
							/>
            )}
            
        </div>
    )
}

export default GoogleBtn;