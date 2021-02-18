import React from 'react';
import { Jumbotron, Container, Breadcrumb } from 'react-bootstrap';
import './more.css';

function More() {
    return (
        <div className="more">
            <Jumbotron fluid className="jumbo-more">
                <Container fluid className="cont-more">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Our Approach</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Approach towards Fake News Problems.</h1>
                    <h3>Misinformation in the form of fake news has become a characteristic of the 21st century, driven by technologies such as social media platforms that enable information to spread quickly and to be targeted at individual beliefs, biases, and emotions.Automated classification of a text article as misinformation or disinformation is a challenging task. Even an expert in a particular domain has to explore multiple aspects before giving a verdict on the truthfulness of an article. In this work, we propose to use machine learning ensemble approach for automated classification of news articles. Our study explores different textual properties that can be used to distinguish fake contents from real. By using those properties, we train a combination of different machine learning algorithms using various ensemble methods and evaluate their performance on real world datasets.</h3>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default More;