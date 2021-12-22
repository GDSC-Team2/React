// import '../Post.css';
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function Post(){
	
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	function handleShow() {
		setShow(true);	
	}

	return(
		<>
			<button type="button" className="btn btn-primary" data-toggle="modal" onClick={handleShow} data-whatever="@mdo">작성</button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton />
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
				
			</Modal>
		</>
	);
}

export default Post;