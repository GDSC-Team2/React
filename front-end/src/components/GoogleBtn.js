import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function GoogleBtn() {
    const clientId = "194829055407-l327u9iqun69ol3sb3s0r267t2vq71gn.apps.googleusercontent.com";
    
		const onSuccess = async(response) => {
	
			axios.post(
				"/api/v1/user", {
					email : response.profileObj.email,
					name : response.profileObj.name,
					picture : response.profileObj.imageUrl
				}).then(response => {
					console.log("success");
				}).catch(error => {
					console.log("fail");
					console.log(error.response.data);
				});
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
				// isSignedIn={true}
			/>
        </div>
    )
}

export default GoogleBtn;