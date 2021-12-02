import '../App.css';
import React from "react"
import { useState } from "react";
import Button from "react-bootstrap/Button"

function BtnLogin(){
	/* 버튼 문구, 색상 변환 */
  const [mode, setMode] = useState("Google 로그인");
  const [btnColor, setBtnColor] = useState("#82B1FF");
  
	function ChangeMode(){
    setMode(mode === "Google 로그인" ? "로그아웃" : "Google 로그인");						 //문구 바꿈
    btnColor === "#82B1FF" ? setBtnColor("#FF8A80") : setBtnColor("#82B1FF");		//색 바꿈
  }

	return(
		<Button onClick={ChangeMode}
			style={{ backgroundColor: btnColor}}
		>
		{/* <img className="googleIcon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png"/> */}
		{mode}</Button>
	);
}

export default BtnLogin;