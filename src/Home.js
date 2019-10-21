import React from 'react';
// import logo from './logo.svg';
import './Home.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


function Navigation() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">BalaByte Holdings</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">Tenants</Nav.Link>
            <Nav.Link href="#pricing">Messages</Nav.Link>
            <Nav.Link href="#pricing">Issues</Nav.Link>
            <Nav.Link href="#pricing">Voting</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

function Main() {
  return (
    <main>
      <Jumbotron>
        <h1>Welcome to BalaByte!</h1>
        <p>
        With our groundbreaking Homeowner Association Management System,
        communication between tenants and the homeowner association committee has never been easier!
        </p>
        <p>
          <Button variant="primary">Sign Up - It's Free!</Button>
        </p>
      </Jumbotron>
      <Container>
        <h2>Love Thy Neighbor</h2>
        <p>
        Use BalaByte to restore peace in the building! We’ve got the features you need to avoid disputes &amp; promote happy neighboring!
        </p>
        <CardDeck>
          <Card>
              <Card.Header>
                <Card.Title>Issue Management</Card.Title>
              </Card.Header>
              <Card.Img variant="top" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/0cad30a99820b0d840a5b48635d00b6e/updated-layouts-collab.png" />
              <Card.Body>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="border-0">
                <Button variant="primary">Make It Work</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Easy Messaging</Card.Title>
              </Card.Header>
              <Card.Img variant="top" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6eaaf5e37ab67a8ed6cd7764660513b9/updated-layouts-sync.png" />
              <Card.Body>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="border-0">
                <Button variant="primary">Make It Happen</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Open Voting</Card.Title>
              </Card.Header>
              <Card.Img variant="top" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/e37168bb8c61e0511029519676466a07/playbooks_boardtile_marketing.png" />
              <Card.Body>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="border-0">
                <Button variant="primary">Make It Count</Button>
              </Card.Footer>
          </Card>
        </CardDeck>      
    </Container>
    </main>
  );
}

function Home() {
  return (
    <div className="Home">
       <Navigation />
       <Main />
    </div>
  );
}

export default Home;
