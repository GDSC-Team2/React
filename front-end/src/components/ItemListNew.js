import React, { Component } from "react";
import styles from "./ItemList.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import ApiService from "../services/ApiService";
import { Link } from "react-router-dom";

class ItemListNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  viewPost(id) {
    this.props.history.push(`/posts/${id}`);
  }

  componentDidMount() {
    ApiService.getPost()
      .then((res) => {
        this.setState({posts: res.data});
      });
  }

  render() {
    return (
      <div>
        
        {this.state.posts.map(post => (
        <div className={styles.container} key={post.id}>
          <div className={styles.title}>{post.title}</div>
          {/* <div className={styles.badge}>공구진행중</div> */}
          <div className={styles.author}>{post.author}</div>
          <table className={styles.table}>
            {/* <tr>
              <th>공구 물품</th>
              <td>{post.product}</td>
            </tr> */}
            <tr>
              <th>예상 가격</th>
              <td>{post.price}</td>
            </tr>
            {/* <tr>
              <th>공구 인원</th>
              <td>{posts.people}</td>
            </tr> */}
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

}

export default ItemListNew


// export default function ItemList() {

//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     axios.get("/api/v1/posts/1") //테스트용 데이터
//       .then(function(response) {
//         setPosts(response.data);
//       });
//   }, []);

//   return (
//     <div>
//       {/* {posts.map(post => ( */}
//         <div className={styles.container} key={posts.id}>
//           <div className={styles.title}>{posts.title}</div>
//           {/* <div className={styles.badge}>공구진행중</div> */}
//           <div className={styles.author}>{posts.author}</div>
//           <table className={styles.table}>
//             {/* <tr>
//               <th>공구 물품</th>
//               <td>{post.product}</td>
//             </tr> */}
//             <tr>
//               <th>예상 가격</th>
//               <td>{posts.price}</td>
//             </tr>
//             {/* <tr>
//               <th>공구 인원</th>
//               <td>{posts.people}</td>
//             </tr> */}
//             <tr>
//               <th>신청 기간</th>
//               <td>{posts.date}</td>
//             </tr>
//           </table>
//         </div>
//       {/* ))} */}

//     </div>
//   );
// }