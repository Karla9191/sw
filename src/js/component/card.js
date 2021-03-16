import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export const Card = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Start Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
				</Link>
			</div>
		</nav>
	);
};
