import './App.css';
import './components/Post.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import DetailPage2 from './components/DetailPage2';
import MyPage from './components/MyPage';
import { PlusCircleFill } from 'react-bootstrap-icons';
import { Modal, Form, Button } from "react-bootstrap";
import axios from 'axios';

function App() {

  const [show, setShow] = useState(false);
	function handleShow() {
		setShow(true);	
	}
  const handleClose = () => setShow(false);

  // 글쓰기 관련 코드
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.currentTarget.value);
  }

  const priceChangeHandler = (e) => {
    setPrice(e.currentTarget.value);
  }

  const dateChangeHandler = (e) => {
    setDate(e.currentTarget.value);
  }

  const linkChangeHandler = (e) => {
    setLink(e.currentTarget.value);
  }

  const contactChangeHandler = (e) => {
    setContact(e.currentTarget.value);
  }

  const descriptionChangeHandler = (e) => {
    setDescription(e.currentTarget.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("/api/v1/posts", 
    {
      title: title,
      price: price,
      date: date,
      link: link,
      contact: contact,
      description: description,
      author: localStorage.getItem("name")
    }
    ).then(response => {
      alert("등록되었습니다.");
      window.location.href = "/";
    }).catch(error => {
      alert(error.response.data);
    });
  }
  

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<><ItemList /><PlusCircleFill className='addPost' size="70" onClick={handleShow}/></>} />
        <Route path="/posts/:id" element={<DetailPage2 />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      
      <Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton />
        <Form onSubmit={submitHandler}>
          <Modal.Body>
            <table className='postForm'>
              <tr> 
                <td>제목</td> 
                <td><Form.Control type="text" name="title" value={title} onChange={titleChangeHandler} placeholder="제목" /></td>
              </tr> 
              <tr>
                <td>예상가격</td> 
                <td><Form.Control type="text"name="price" value={price} onChange={priceChangeHandler} placeholder="예상 가격" /></td>
              </tr>
              <tr> 
                <td>공구기간</td> 
                <td><Form.Control type="text" name="date" value={date} onChange={dateChangeHandler} placeholder="신청 기간" /></td>
              </tr>
              <tr> 
                <td>상품링크</td> 
                <td><Form.Control type="text" name="link" value={link} onChange={linkChangeHandler} placeholder="상품 링크" /></td>
              </tr>
              <tr> 
                <td>오픈채팅</td> 
                <td><Form.Control type="text" name="contact" value={contact} onChange={contactChangeHandler} placeholder="오픈채팅 링크" /></td>
              </tr>
              <tr> 
                <td>설명</td> 
                <td><Form.Control type="text" name="description" value={description} onChange={descriptionChangeHandler} placeholder="기타" /></td>
              </tr>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>취소</Button>
            <Button variant="primary" type="submit">완료</Button>
          </Modal.Footer>
        </Form>
			</Modal>
    </div>
    </BrowserRouter>
  );
}

export default App;