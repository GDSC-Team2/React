// import '../Post.css';
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function DetailPage(){
	
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
								<div className="cols">
									<div className="one"> 
										<div className="item_name">예상가격</div> <div id="price">9900</div></div><hr />
									<div className="one"> 
										<div className="item_name">공구기간</div> 
										<div className="date">
											<div id="date1">2021.12.22</div> ~ 
											<div id="date2">2021.12.27</div></div>
										</div><hr />
									<div className="one"> <div className="item_name">상품링크</div> <div id="productlink">https://link1.com</div> </div> <hr />
									<div className="one"> <div className="item_name">오픈채팅</div> <div id="openchat">https://link2.com</div> </div> <hr />
									<div className="one"> <div className="item_name">설명</div> <div id="explaination">explaination</div> </div> <hr />
									<div className="one"> <div className="item_name">기타</div> <div id="etc">etc</div></div> 
								</div>
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
								<div className="cols">
									<div className="one"> 
										<div className="item_name">예상가격</div> 
										<Form.Control className="line" type="text" placeholder="12,000" /> 
									</div><hr />
									<div className="one"> 
										<div className="item_name">공구기간</div> 
										<div className="date">
											<Form.Control className="line" type="date" /> ~ <Form.Control className="line" type="date" /> 
										</div>
									</div><hr />
									<div className="one"> <div className="item_name">상품링크</div> <Form.Control className="line" type="url" /> </div> <hr />
									<div className="one"> <div className="item_name">오픈채팅</div> <Form.Control className="line" type="url" /> </div> <hr />
									<div className="one"> <div className="item_name">설명</div> <Form.Control className="line" type="textarea" /> </div> <hr />
									<div className="one"> <div className="item_name">기타</div> <Form.Control className="line" type="text" /></div> 
								</div>
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