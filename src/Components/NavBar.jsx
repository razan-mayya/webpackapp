import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export const NavBar = ({ filtersearch }) => {
    const [Search, setSearch] = useState("");
    const search = () => {
        filtersearch(Search);
        setSearch("")
    }
    return (
        <Navbar expand="lg" data-bs-theme="dark" bg="dark">
            <Container >
                <Navbar.Brand href="#">مطعم جديد</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex ">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 mx-3"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button variant="outline-success" onClick={() => search()}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
}
