import React, { useEffect, useState } from "react";
import styles from "./MyPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MyPage() {

  const author = localStorage.getItem("name");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`/api/v1/posts/my/{author}?author=${author}`)
      .then(function(response) {
        setPosts(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className={styles.userInfo}>
        <img src={localStorage.getItem("picture")} className={styles.profile} alt="profile_img" />
        <h3>{localStorage.getItem("name")}</h3>
        <p><FontAwesomeIcon icon={faEnvelope} size="1x" /> {localStorage.getItem("email")}</p>
      </div>
      
      <div className={styles.myList}>
        <h3>내가 쓴 글</h3>
        <ul>
        {posts.map(post => (
          <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
        ))}
        </ul>
      </div>
      
    </div>
  );
}