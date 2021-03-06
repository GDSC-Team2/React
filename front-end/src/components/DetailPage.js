import '../components/Post.css';
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faComments, faInfoCircle, faLink, faWonSign, faTags } from "@fortawesome/free-solid-svg-icons";

function DetailPage2(){

	const [isModifyMode, setModifyMode] = useState(true);
	const [isWriter, setWriter] = useState(false);


	const gotoMain = () => {
    document.location.href = '/';
	}

	const { id } = useParams();

	const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/api/v1/posts/")
      .then(function(response) {
        setPosts(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const postList = posts.filter(post => (post.id === Number(id)));

	// 글 작성자인지 확인
	useEffect(() => {
		const author = localStorage.getItem("name");
		const list = postList[0];
		if(list){
			const post_author = list.author;
			if(author === post_author){
				setWriter(true);
			}
		}
	})

	// 글 삭제
	const deleteHandler = (id, e) => {
		e.preventDefault();
		if (window.confirm("삭제하시겠습니까?")) {
			axios.delete(`/api/v1/posts/${id}`)
			.then(response => {
				alert("삭제되었습니다.");
				window.location.href = "/";
			}).catch(error => {
				alert(error.response.data);
			});
		} 
	}

	function ChangeMode() {
		if(isModifyMode === true) {
			setModifyMode(false)
			setTitle(postList[0].title);
			setPrice(postList[0].price);
			setDate(postList[0].date);
			setLink(postList[0].link);
			setContact(postList[0].contact);
			setDescription(postList[0].description);
		}
	}

	//수정	
	const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  }

  const linkChangeHandler = (e) => {
    setLink(e.target.value);
  }

  const contactChangeHandler = (e) => {
    setContact(e.target.value);
  }

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`/api/v1/posts/${id}`, 
    {
      title: title,
      price: price,
      date: date,
      link: link,
      contact: contact,
      description: description
    }
    ).then(response => {
      alert("수정되었습니다.");
      window.location.href = `/posts/${id}`;
    }).catch(error => {
      alert(error.response.data);
    });
  }

	return(
		<div className='WholeBox'>
			{isWriter ? (
				isModifyMode ? (
					<div className='ContentBox'>
						{postList.map(post => (
						<Form className='items' key={post.id}>
							<>
								<h2>{post.title}</h2>
								<div className='author'>작성자: {post.author}</div>
								<div className='author'>작성일시: {post.createdDate}</div>
								<hr/>
								<table className='detail_table'>
									<colgroup>
										<col style={{width : "30%"}}/>
									</colgroup>
									<tr>
										<td><FontAwesomeIcon icon={faWonSign} size="1x" /> 예상가격</td> 
										<td>{post.price}</td>
									</tr>
									<tr> 
										<td><FontAwesomeIcon icon={faCalendarAlt} size="1x" /> 공구기간</td> 
										<td>{post.date}</td>
									</tr>
									<tr> 
										<td><FontAwesomeIcon icon={faLink} size="1x" /> 상품링크</td> 
										<td>{post.link}</td>
									</tr>
									<tr> 
										<td><FontAwesomeIcon icon={faComments} size="1x" /> 오픈채팅</td> 
										<td>{post.contact}</td>
									</tr>
									<tr> 
										<td><FontAwesomeIcon icon={faInfoCircle} size="1x" /> 설명</td> 
										<td>{post.description}</td>
									</tr>
								</table>
								<div className='btnArea1'>
									<Button variant="primary" onClick={ChangeMode}>수정</Button>
									<Button variant="danger" onClick={(e) => {deleteHandler(post.id, e)}}>삭제</Button>
								</div>
							</>
						</Form>
						))}
					</div>
				) : (
					<div className='ContentBox'>
						<Form className='items'>
						<table className='detail_table'>
								<tr> 
									<td><FontAwesomeIcon icon={faTags} size="1x" /> 제목</td> 
									<td><Form.Control type="text" onChange={titleChangeHandler} value={title}/></td>
								</tr> 
								<tr>
									<td><FontAwesomeIcon icon={faWonSign} size="1x" /> 예상가격</td> 
									<td><Form.Control type="text" onChange={priceChangeHandler} value={price}/></td>
								</tr>
								<tr> 
									<td><FontAwesomeIcon icon={faCalendarAlt} size="1x" /> 공구기간</td>
									<td><Form.Control type="text" onChange={dateChangeHandler} value={date}/></td>
								</tr>
								<tr> 
									<td><FontAwesomeIcon icon={faLink} size="1x" /> 상품링크</td> 
									<td><Form.Control type="textarea" onChange={linkChangeHandler} value={link}/></td>
								</tr>
								<tr> 
									<td><FontAwesomeIcon icon={faComments} size="1x" /> 오픈채팅</td> 
									<td><Form.Control type="textarea" onChange={contactChangeHandler} value={contact}/></td>
								</tr>
								<tr> 
									<td><FontAwesomeIcon icon={faInfoCircle} size="1x" /> 설명</td> 
									<td><Form.Control type="textarea" onChange={descriptionChangeHandler} value={description}/></td>
								</tr>
							</table>
						</Form>
						<div className='btnArea2'>
							<Button variant="secondary" onClick={gotoMain}>취소</Button>
							<Button variant="primary" onClick={submitHandler}>완료</Button>
						</div>
					</div>
				)
			):(
				<div className='ContentBox'>
				{postList.map(post => (
				<Form className='items' key={post.id}>
					<>
						<h2>{post.title}</h2>
						<div className='author'>작성자: {post.author}</div>
						<div className='author'>작성일시: {post.createdDate}</div>
						<hr/>
						<table className="detail_table">
							<colgroup>
								<col style={{width : "30%"}}/>
							</colgroup>
							<tr>
								<td><FontAwesomeIcon icon={faWonSign} size="1x" /> 예상가격</td> 
								<td>{post.price}</td>
							</tr>
							<tr> 
								<td><FontAwesomeIcon icon={faCalendarAlt} size="1x" /> 공구기간</td> 
								<td>{post.date}</td>
							</tr>
							<tr> 
								<td><FontAwesomeIcon icon={faLink} size="1x" /> 상품링크</td> 
								<td>{post.link}</td>
							</tr>
							<tr> 
								<td><FontAwesomeIcon icon={faComments} size="1x" /> 오픈채팅</td> 
								<td>{post.contact}</td>
							</tr>
							<tr> 
								<td><FontAwesomeIcon icon={faInfoCircle} size="1x" /> 설명</td> 
								<td>{post.description}</td>
							</tr>
						</table>
					</>
			</Form>
			))}
			</div>
		)}
		</div>
  );
}

export default DetailPage2;