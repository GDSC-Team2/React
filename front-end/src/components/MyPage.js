import React, { useEffect, useState } from "react";
import styles from "./MyPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function MyPage() {

  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:4000/profile") //테스트용 데이터
  //     .then(function(response) {
  //       setUsers(response.data);
  //     });
  // }, []);

  return (
    <div>
      {/* {users.map(user => (
        <>
        <img src="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg" className={styles.profile} alt="profile_img" />
        <h3>{user.username}</h3>
        <p><FontAwesomeIcon icon={faEnvelope} size="1x" /> {user.email}</p>
        <Button className={styles.resign}>회원 탈퇴</Button>
  
        <div className={styles.myList}>
          <h3>내가 쓴 글</h3>
          <ul>
            <li>네이비 학잠</li>
            <li>눈송이 수면잠옷</li>
            <li>눈꽃 플리스</li>
            <li>공과대학 돕바</li>
          </ul>
        </div>
      </>
      ))} */}

      <img src="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg" className={styles.profile} alt="profile_img" />
      <h3>닉네임</h3>
      <p><FontAwesomeIcon icon={faEnvelope} size="1x" />이메일</p>
      <Button className={styles.resign}>회원 탈퇴</Button>

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