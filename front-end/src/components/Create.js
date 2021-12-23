import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Create() {

  // state 변경
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
      description: description
    }
    ).then(response => {
      alert("등록되었습니다.");
      window.location.href = "/";
    }).catch(error => {
      alert(error.response.data);
    });
  }
  

  return (

  <div>
    <Form onSubmit={submitHandler}>
      <Form.Control type="text" name="title" value={title} onChange={titleChangeHandler} placeholder="제목" /><br/>
      <Form.Control type="text" name="price" value={price} onChange={priceChangeHandler} placeholder="예상 가격" /><br/>
      <Form.Control type="text" name="date" value={date} onChange={dateChangeHandler} placeholder="신청 기간" /><br/>
      <Form.Control type="text" name="link" value={link} onChange={linkChangeHandler} placeholder="상품 링크" /><br/>
      <Form.Control type="text" name="contact" value={contact} onChange={contactChangeHandler} placeholder="오픈채팅 링크" /><br/>
      <Form.Control type="text" name="description" value={description} onChange={descriptionChangeHandler} placeholder="기타" /><br/>
      
      <Button type="submit">등록</Button>
    </Form>
  </div>
  );
}