import React, { useState } from 'react';
import './Auth.css'
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import name from "../../images/name.png";
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import ForgetPass4 from './ForgetPass4';
import { Link } from 'react-router-dom';
import arrowForm from "../../images/Arroww.png";
import LoginPage from './LoginPage';

const RegisterPage = () => {
  //to make modal
    const [showw, setShoww] = useState(false);

    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return <>
    <Container>
     <Row  >
      <Col className=" d-flex justify-content-center text-center  " style={{padding:'initial'}} >
       
       <div style={{ width:'400px' , background:'rgb(237 234 234)' ,borderRadius:'15px' ,padding:'25px', marginTop:'-55px' }}>
       <>
        {/* <div  onClick={handleShow} >
         <img src={arrowForm}  alt='' style={{display:'flex',cursor:'pointer'}}  /></div> */}
         <Modal.Header closeButton></Modal.Header>
        <Modal show={show} onHide={handleClose} style={{width:'410px' , marginLeft:'20px'}}>
          <LoginPage />
         </Modal>
       </>
              <h4 style={{fontWeight:'700' ,  color:'rgba(209, 155, 111, 1)'}}>    تسجيل جديد    </h4>
      <Form>
  
      <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label style={{fontWeight: '600' , display:'flex' }}>الاسم بالكامل</Form.Label>
          <img className='icon-input' src={name} alt="" style={{position:'absolute' , display:'flex' , marginTop:'17px' , paddingRight:'9px' }} />
          <Form.Control type="text" placeholder="محمد خالد" style={{  background:'rgba(245, 245, 245, 1)' ,borderRadius: '10px', 
                padding:'15px 35px 15px 15px' }}  />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label style={{fontWeight: '600' , display:'flex' }}>رقم الموبيل</Form.Label>
            <div>
               <img  className='icon-input' src={phone} alt="" style={{position:'absolute' , display:'flex' , marginTop:'17px',paddingRight:'9px' }} />
              <Button style={{position:'absolute', margin:'13px 60px 13px 13px' , borderRadius:'15px' 
               , background:'linear-gradient(331.41deg, #D19B6F 6.78%, #F6E5C3 204.87%)' , border:'none', padding:'3px 20px',
               color:'#FFFFFF'}}  onClick={handleShoww}     >تفعيل</Button>
           </div>

            <Modal  show={showw} onHide={handleClosee} style={{width:'410px'}}>
              <ForgetPass4 />
            </Modal>


            <Form.Control type="text" placeholder=" 789 456 123" style={{  background:'rgba(245, 245, 245, 1)' ,borderRadius: '10px', 
                  padding:'15px 35px 15px 15px' }}  />
                
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label style={{fontWeight: '600' , display:'flex' }}>البريد الالكتروني </Form.Label>
                      <img className='icon-input' src={email} alt="" style={{position:'absolute' , display:'flex' , marginTop:'20px',paddingRight:'9px' }} />
                        <Form.Control type="text"
                            placeholder="username@mail.com" style={{  background:'rgba(245, 245, 245, 1)' ,borderRadius: '10px', 
                            padding:'15px 38px 15px 15px'}}  />
       </Form.Group>

       <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label style={{fontWeight: '600' , display:'flex' }}> كلمه المرور  </Form.Label>
            
            <Form.Control type="password"  style={{  background:'rgba(245, 245, 245, 1)' ,borderRadius: '10px', 
                    padding:'15px' }}  />
            </Form.Group>

       <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label style={{fontWeight: '600' , display:'flex' }}>تاكيد كلمه المرور  </Form.Label>
            
            <Form.Control type="password"  style={{  background:'rgba(245, 245, 245, 1)' ,borderRadius: '10px', 
                    padding:'15px' }}  />
            </Form.Group>


        <div style={{display:'flex' , alignItems:'center'}}>
           <p> <input style={{marginLeft:'10px' , marginTop:'10px'}} type='checkbox' />لقد قرأت و أوافق على   </p>


         <Link to='/conditionandroles' style={{textDecoration:'none'}}>
          <p style={{ color:'rgba(209, 155, 111, 1)' , cursor:'pointer' , marginLeft:'10px'}}   >   الشروط والاحكام   </p>
        </Link>
   
       </div>

       <div  className='d-flex justify-content-center align-items-center' style={{borderRadius:'30px' }} >
          <button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none' , paddingTop:'5px'}} className='profileButton' >تسجيل</button>
       </div>
      </Form>

       </div>

      </Col>
    </Row>
  </Container>
  </>;
}
export default RegisterPage;