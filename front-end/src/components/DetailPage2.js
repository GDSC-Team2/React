import '../Post.css';
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailPage2(){

	const [isModifyMode, setModifyMode] = useState(true);
	const [isWriter, setWriter] = useState(true);

	function ChangeMode() {
		if(isModifyMode === true) {
			setModifyMode(false)
		}
	}

	const gotoMain = () => {
    document.location.href = '/';
	}

	const { id } = useParams();

	const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`/api/v1/posts/`)
      .then(function(response) {
        setPosts(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const postList = posts.filter(post => (post.id === Number(id)));

	return(
		<div className='WholeBox'>
			{isWriter ? (
				isModifyMode ? (
					<div className='ContentBox'>
						<Form className='items'>
						{postList.map(post => (
							<table>
								<tr>
									<td>예상가격</td> 
									<td id="price">{post.price}</td>
								</tr>
								<tr> 
									<td className="item_name">공구기간</td> 
									<td>{post.date}</td>
								</tr>
								<tr> 
									<td>상품링크</td> 
									<td>{post.link}</td>
								</tr>
								<tr> 
									<td>오픈채팅</td> 
									<td>{post.contact}</td>
								</tr>
								<tr> 
									<td>설명</td> 
									<td>{post.description}</td>
								</tr>
								<tr> 
									<td>기타</td> 
									<td>etc</td>
								</tr> 
							</table>
							))}
						</Form>
						<div className='btnArea1'>
							<Button variant="primary" onClick={ChangeMode}>수정</Button>
							<Button variant="danger">삭제</Button>
						</div>
					</div>
				) : (
					<div className='ContentBox'>
						<Form className='items'>
						{postList.map(post => (
							<table className='ModifyMode'>
								<tr>
									<td>예상가격</td> 
									<td><Form.Control type="text" value={post.price}/></td>
								</tr>
								<tr> 
									<td>공구기간</td> 
									<td><Form.Control type="date" value={post.date}/> ~ <Form.Control type="date" /></td>
								</tr>
								<tr> 
									<td>상품링크</td> 
									<td><Form.Control type="url" value={post.link}/></td>
								</tr>
								<tr> 
									<td>오픈채팅</td> 
									<td><Form.Control type="url" value={post.contact} /></td>
								</tr>
								<tr> 
									<td>설명</td> 
									<td><Form.Control type="textarea" value={post.description} /></td>
								</tr>
								<tr> 
									<td>기타</td> 
									<td><Form.Control type="text" /></td>
								</tr> 
							</table>
						))}
						</Form>
						{/* <Button variant="secondary" onClick={navigate('/')}>취소</Button> */}
						<div className='btnArea2'>
							<Button variant="secondary" onClick={gotoMain}>취소</Button>
							<Button variant="primary">완료</Button>
						</div>
					</div>
				)
			):(<></>)
			}
		</div>
  );
}

export default DetailPage2;