import React from 'react';
import { Jumbotron, Container, Breadcrumb } from 'react-bootstrap';
import './about.css'

function About() {
    return(
        <div className="about">
            <Jumbotron fluid className="jumbo-abt">
                <Container fluid className="cont-abt">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>About Us</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>About Us</h1>
                    <h3>Fake news is false or misleading information presented as news. It often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue. Fake news is an increasingly common feature of today’s political landscape. To solve this issue, researchers and media experts have proposed fake news detectors adopting natural language processing (NLP) to analyze word patterns and statistical correlations of news articles. The dataset for training the ML (DL) model can be curated from crowdsourcing techniques or we can use already curated datasets from kaggle etc.</h3>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default About;