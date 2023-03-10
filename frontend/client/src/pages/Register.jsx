
import {Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

const Register = () => {
    const { registerInfo, updateRegisterInfo} = useContext(AuthContext)
  
    return ( 
    <>
        <Form>
            <Row style={{ height: "100vh",
             justifyContent:"center",
             paddingTop:"10%"
             }}>
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2>Register</h2>
                        <Form.Control type="text" placeholder="name" onChange={(e) => 
                            updateRegisterInfo({...registerInfo, name:e.target.value})}/>
                        <Form.Control type="email" placeholder="email" onChange={(e) => 
                            updateRegisterInfo({...registerInfo, email:e.target.value})}/>
                        <Form.Control type="password" placeholder="password"onChange={(e) => 
                            updateRegisterInfo({...registerInfo, password:e.target.value})} />
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <Alert variant="danger"><p>An error Occurred</p></Alert>

                    </Stack>
                </Col>
            </Row>
        </Form>
    </> );
}
 
export default Register;