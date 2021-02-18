import React from 'react';
import { Jumbotron, Container, Breadcrumb } from 'react-bootstrap';
import './classifier.css';

function Classifier() {
    return(
        <div className="classifier">
            <Jumbotron fluid className="jumbo-cls">
                <Container fluid>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Classifier</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Classifier</h1>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Classifier;