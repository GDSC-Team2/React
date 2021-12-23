import React from "react";
import GoogleLogin from "react-google-login";

const clientId = "194829055407-l327u9iqun69ol3sb3s0r267t2vq71gn.apps.googleusercontent.com";

export default function GoogleLoginBtn(){
  const onSuccess = async(response) => {
      console.log(response);
    //   const { googleId, profileObj : { email, name } } = response;
      
    //   await onGoogleLogin ({
    //     // 구글 로그인 성공시 서버에 전달할 데이터
    //     socialId: googleId,
    //     socialType: 'google',
    //     email,
    //     nickname: name
    //   });
  }

  const onFailure = (error) => {
      console.log(error);
  }

  return(
      <div>
          <GoogleLogin
              clientId={clientId}
              responseType={"id_token"} // 구글 로그인을 성공할 때 어떤 response를 받아올지 결정
              onSuccess={onSuccess} // 구글 로그인을 성공했을 때 response를 받아오게 됩니다.
              onFailure={onFailure} // 구글 로그인을 실패했을 때 error object를 받아오게 됩니다.
          />
      </div>
  )
}