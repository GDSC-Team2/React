import React, { useEffect, useState } from "react";
import styles from "./ItemList.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ItemList() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/api/v1/posts")
      .then(function(response) {
        setPosts(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.body}>      
      {posts.map(post => (
        <div className={styles.container} key={post.id}>
          <div className={styles.title}><Link to={`/posts/${post.id}`}>{post.title}</Link></div>
          <div className={styles.author}>{post.author}</div>
          <table className={styles.table}>
            <tr>
              <th>예상 가격</th>
              <td>{post.price}</td>
            </tr>
            <tr>
              <th>신청 기간</th>
              <td>{post.date}</td>
            </tr>
            <tr>
              <th>상품 링크</th>
              <td>{post.link}</td>
            </tr>
          </table>
        </div>
      ))}

    </div>
  );
}