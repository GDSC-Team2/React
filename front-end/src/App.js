import './App.css';
import './Post.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import NavBar from './components/NavBar';
import DetailPage2 from './components/DetailPage2';
import { PlusCircleFill } from 'react-bootstrap-icons';
import { Modal, Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useRef } from 'react';
import GoogleBtn from './components/GoogleBtn';

function App() {

  const [show, setShow] = useState(false);
	function handleShow() {
		setShow(true);	
	}
  const handleClose = () => setShow(false);

  function onSubmit(){
    axios.post(
      "/api/v1/posts", 
      {
        title : titleRef.current.value,
        author : "react",
        price : priceRef.current.value,
        date : dateRef.current.value,
        link : linkRef.current.value,
        contact : contactRef.current.value,
        desc : descRef.current.value
      }
    ).then(response => {
      console.log("success");
      console.log(response.status);
    }).catch(error => {
      console.log("fail");
      console.log(error.response.data);
    });
  }
  

  const titleRef = useRef(null);
	//const authorRef = useRef(null);
  const priceRef = useRef(null);
  const dateRef = useRef(null);
  const linkRef = useRef(null);
  const contactRef = useRef(null);
  const descRef = useRef(null);
  

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <GoogleBtn />
      <Routes>
        <Route path="/" element={<><ItemList /><PlusCircleFill className='addPost' size="70" onClick={handleShow}/></>} />
        {/* <Route path="/posts/:id" element={<Detail />} /> */}
        <Route path="/posts/:id" element={<DetailPage2 />} />
      </Routes>
      <Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton />
				<Modal.Body>
					<Form>
          <table className='postForm'>
            <tr> 
              <td>제목</td> 
              <td><Form.Control type="text" ref={titleRef}/></td>
            </tr> 
            <tr>
              <td>예상가격</td> 
              <td><Form.Control type="text" placeholder="12,000" ref={priceRef}/></td>
            </tr>
            <tr> 
              <td>공구기간</td> 
              <td><Form.Control type="date"/> ~ <Form.Control type="date" ref={dateRef}/></td>
            </tr>
            <tr> 
              <td>상품링크</td> 
              <td><Form.Control type="url" ref={linkRef}/></td>
            </tr>
            <tr> 
              <td>오픈채팅</td> 
              <td><Form.Control type="url" ref={contactRef}/></td>
            </tr>
            <tr> 
              <td>설명</td> 
              <td><Form.Control type="textarea" ref={descRef}/></td>
            </tr>
							</table>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>취소</Button>
					<Button variant="primary" onClick={onSubmit}>완료</Button>
				</Modal.Footer>
				
			</Modal>
    </div>
    </BrowserRouter>
  );
}

export default App;