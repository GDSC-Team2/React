import React, { useEffect, useState } from "react";
import styles from "./ItemList.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function ItemList() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/posts") //테스트용 데이터
      .then(function(response) {
        setPosts(response.data);
      });
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div className={styles.container} key={post.id}>
          <div className={styles.title}>{post.title}</div>
          <div className={styles.badge}>공구진행중</div>
          <div className={styles.author}>{post.username}</div>
          <table className={styles.table}>
            <tr>
              <th>공구 물품</th>
              <td>{post.product}</td>
            </tr>
            <tr>
              <th>예상 가격</th>
              <td>{post.price}</td>
            </tr>
            <tr>
              <th>공구 인원</th>
              <td>{post.people}</td>
            </tr>
            <tr>
              <th>신청 기간</th>
              <td>{post.date}</td>
            </tr>
          </table>
        </div>
      ))}

    </div>
  );
}