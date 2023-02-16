import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
    <>
    <Navbar bg="dark" className= "mb-4" style={{height: "3.75rem"}}>
        <Container>
            <h2>
                <Link to="/" className="link-light text-decoration-none"> Chat</Link>
            </h2>
            <span className="text-warning">Logged in as Ovich</span>
            <Nav>
                <Stack direction="horizontal" gap={3}>
                    <Link to="/register" className="link-light text-decoration-none"> Register</Link>
                    <Link to="/login" className="link-light text-decoration-none"> Login</Link>
                </Stack>
            </Nav>
        </Container>
    </Navbar>
    </> );
}
 
export default NavBar;