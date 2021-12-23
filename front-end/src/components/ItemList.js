import React, { useEffect, useState } from "react";
import styles from "./ItemList.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import DetailPage from "./DetailPage";
import DetailPage2 from "./DetailPage2";

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

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
    console.log(this)
    console.log(showModal);
  };

  const [postid, setId] = useState("");
  const goto = postid => {
    console.log("consolelog", postid);
    setId(postid);
    console.log(postid)
  }  

  return (
    <div>
      {posts.map(post => (
        <div className={styles.container} key={post.id}>
          <div className={styles.title}><Link to={`/posts/${post.id}`}>{post.title}</Link></div>


          {/* <button className={styles.title} onClick={openModal}>{post.title}</button> */}
          {/* {showModal ? <Modal setShowModal={setShowModal} props={post.id} /> : null} */}
          {showModal ? <DetailPage showModal={true} id={post.id}/> : null}
          {/* <div className={styles.badge}>공구진행중</div> */}
          
          
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