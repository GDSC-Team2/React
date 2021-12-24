import React from "react";
import styles from "./MyPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function MyPage() {

  return (
    <div>
      <div className={styles.userInfo}>
        <img src={localStorage.getItem("picture")} className={styles.profile} alt="profile_img" />
        <h3>{localStorage.getItem("name")}</h3>
        <p><FontAwesomeIcon icon={faEnvelope} size="1x" /> {localStorage.getItem("email")}</p>
        <Button className={styles.resign}>회원 탈퇴</Button>
      </div>
      
      <div className={styles.myList}>
        <h3>내가 쓴 글</h3>
        <ul>
          <li>네이비 학잠</li>
          <li>눈송이 수면잠옷</li>
          <li>눈꽃 플리스</li>
          <li>공과대학 돕바</li>
        </ul>
      </div>
      
    </div>
  );
}