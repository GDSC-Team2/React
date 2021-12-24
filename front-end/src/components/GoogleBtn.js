import React, { useState } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.css";

function GoogleBtn() {
    const [islogin, setLogin] = useState(false);
    const clientId = "194829055407-l327u9iqun69ol3sb3s0r267t2vq71gn.apps.googleusercontent.com";
    
		const onSuccess = async(response) => {

			// 브라우저에 정보 저장
			window.localStorage.setItem("name", response.profileObj.name);
			window.localStorage.setItem("email", response.profileObj.email);
			window.localStorage.setItem("picture", response.profileObj.imageUrl);

			axios.post(
				"/api/v1/user", {
					email : response.profileObj.email,
					name : response.profileObj.name,
					picture : response.profileObj.imageUrl
				}).then(response => {
					// alert("로그인 되었습니다.");
					setLogin(true);
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

			// 브라우저에서 정보 삭제
			window.localStorage.removeItem("name");
			window.localStorage.removeItem("email");
			window.localStorage.removeItem("picture");
		}

    return(
        <div>
            {islogin ? (
							<div className={styles.logoutArea}>
              <GoogleLogout
								clientId={clientId}
								buttonText='Logout'
								onLogoutSuccess={logout}
								className={styles.logout}
							/>
							<Link to="/mypage"><FontAwesomeIcon icon={faUserCircle} size="2x" /></Link>
							</div>
            ) : (
							<GoogleLogin
								clientId={clientId}
								buttonText='Login'
								responseType={"id_token"}
								onSuccess={onSuccess}
								onFailure={onFailure}
								isSignedIn={true}
							/>
            )}
            
        </div>
    )
}

export default GoogleBtn;