import React from 'react';
import { Jumbotron, Container, Breadcrumb } from 'react-bootstrap';
import './contributors.css';

function Contributors() {
    return (
        <div className="contri">
            <Jumbotron fluid className="jumbo">
                <Container fluid className="cont">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Contributors</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Contributors</h1>
                    <a href="https://github.com/Femme-js/Hoaxify/graphs/contributors">
                        <img src="https://contrib.rocks/image?repo=Femme-js/Hoaxify" />
                    </a>
                    <h2>Contributions</h2>
                    <h3>As mentioned, being an Open Source Software, the Hoaxify Fake Newws Classifier is open to any contributions. Head over to our <a href="https://github.com/Femme-js/Hoaxify">Github Repo</a> to get started.</h3>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Contributors;