import React, { useState } from "react";
import { Container, Row, Form, FormGroup, Label, Input, Button, Modal, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
import { FcGoogle }  from "react-icons/fc"
import { BsFacebook, BsApple } from "react-icons/bs";
import "./home/home.css";

export default function Login() {
  const mode = useSelector((state) => state.newTheme);
  const { isNewTheme } = mode;
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container className={`text-center mt-4 ${isNewTheme ? "p.default" : "p_new"}`}>
      <h2>Log in or create an account</h2>
      <Row className="my-5 justify-content-center" xs="3">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
          </FormGroup>
          {" "}
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input id="examplePassword" name="password" placeholder="Password" type="password" />
          </FormGroup>
          {" "}
          <Button type="submit">Submit</Button>
        </Form>
      </Row>
      <Modal isOpen={showModal} toggle={closeModal}>
        <ModalBody>
        Hey man, this is a clone site of The New York Times!<br />
If you want to sign up and know what's happening in the world, <br />
 go to their <a href="https://www.nytimes.com/" target="blanck_">official site!</a>
        </ModalBody>
      </Modal>
      <Row xs="3" className="justify-content-center">
        <p>or<br />
        By continuing, you agree to the updated Terms of Sale, 
        Terms of Service, and Privacy Policy.</p>
        </Row>
        <Row xs="3" className="justify-content-center my-5">
        <Button color="danger" outline onClick={handleSubmit}><FcGoogle className="mx-2"/> Continue with Google</Button>
        </Row>
        <Row xs="3" className="justify-content-center my-5">
        <Button color="primary" outline  onClick={handleSubmit}><BsFacebook color="blue" className="mx-2" />Continue with Facebook</Button>
        </Row>
        <Row xs="3" className="justify-content-center my-5">
        <Button color="secondary" outline  onClick={handleSubmit}><BsApple className="mx-2" />Continue with Apple</Button>
      </Row>
    </Container>
  );
}
