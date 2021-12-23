import '../Post.css';
import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailPage(id_){

	const [show, setShow] = useState(false);
	const [isModifyMode, setModifyMode] = useState(true);
	const [isWriter, setWriter] = useState(true);					//작성자면 수정/삭제 버튼 있음

	const handleClose = () => setShow(false);
	function handleShow(){
		setShow(true);	
		setModifyMode(true)
	}
	
	function ChangeMode() {
		if(isModifyMode === true) {
			setModifyMode(false)
		}
	}

	//const { id } = useParams();
	const id = id_;
	//console.log(id);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`/api/v1/posts/${id}`)
      .then(function(response) {
        setPosts(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const postList = posts.filter(post => (post.id === Number(id))); // 전달받은 id값과 일치하는 데이터
  console.log(postList)

	return(
		<>
			<button type="button" className="btn btn-dark" data-toggle="modal" onClick={handleShow} data-whatever="@mdo">상세페이지</button>

			<Modal  show={show} onHide={handleClose}>
				<Modal.Header closeButton />
				{isWriter ? (
					isModifyMode ? (
						<>
						<Modal.Body id="signin_window_body">
							<Form>
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
										<td>https://link2.com</td>
									</tr>
									<tr> 
										<td>설명</td> 
										<td>explanation</td>
									</tr>
									<tr> 
										<td>기타</td> 
										<td>etc</td>
									</tr> 
								</table>
								))}
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="primary" onClick={ChangeMode}>수정</Button>
							<Button variant="danger">삭제</Button>
						</Modal.Footer>
						</>
					) : (
						<>
						<Modal.Body id="signin_window_body">
							<Form>
								<table className='ModifyMode'>
									<tr>
										<td>예상가격</td> 
										<td><Form.Control className="line" type="text" placeholder="12,000" /> </td>
									</tr>
									<tr> 
										<td>공구기간</td> 
										<td className='term'><Form.Control className="line" type="date" /> ~ <Form.Control className="line" type="date" /></td>
									</tr>
									<tr> 
										<td>상품링크</td> 
										<td><Form.Control className="line" type="url" /></td>
									</tr>
									<tr> 
										<td>오픈채팅</td> 
										<td><Form.Control className="line" type="url" /></td>
									</tr>
									<tr> 
										<td>설명</td> 
										<td><Form.Control className="line" type="textarea" /></td>
									</tr>
									<tr> 
										<td>기타</td> 
										<td><Form.Control className="line" type="text" /></td>
									</tr> 
								</table>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>취소</Button>
							<Button variant="primary">완료</Button>
						</Modal.Footer>
						</>
					)):
					(<></>)
				}
			</Modal>
		</>
	);
}

export default DetailPage;