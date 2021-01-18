![Hoaxify](https://socialify.git.ci/Femme-js/Hoaxify/image?description=1&font=KoHo&forks=1&issues=1&logo=https%3A%2F%2Fgdurl.com%2FuIyI&owner=1&pattern=Overlapping%20Hexagons&pulls=1&stargazers=1&theme=Light)

# Hoaxify 2.0

### Introduction
<img src="https://media.giphy.com/media/xT4ApznCZTtuBjmHHa/giphy.gif" width="50%"><br>
Fake news is false or misleading information presented as news. It often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue. Fake news is an increasingly common feature of today’s political landscape. To solve this issue, researchers and media experts have proposed fake news
detectors adopting natural language processing (NLP) to analyze word patterns and statistical correlations of news articles. 
The dataset for training the ML (DL) model can be curated from crowdsourcing techniques or we can use already curated datasets from kaggle etc.

### Data Curation
<img src="https://media.giphy.com/media/xTiTnhXjLyayuvu3hm/giphy.gif" width="50%">

- Crowdsourcing for collection of data of fake news.
- Already prepared data.
- Attributes:
       news: news article no.
       title: the title of a news article
       text: the text of the article; could be incomplete
       label: a label that marks the article as potentially unreliable. where FAKE: unreliable and REAL: reliable
       
### Modelling 🎆

- [ML Classifier Models](https://www.greycampus.com/opencampus/machine-learning/different-types-of-classifiers)
- [Neural Nets](https://en.wikipedia.org/wiki/Neural_network)

### Comparing the result matrices 🔎

- Creating visualizations for comparing the result matrices of different algorithms. 

### Dependencies 👇

- Python 3.x
- Keras/Tensorflow
- NLTK
- NumPy
- Pandas
- sklearn


## CONTRIBUTION

### Tech-stack Required 📚

- Python
- Basics of NLP
- Understanding of Machine Learning Classification Algorithms
- Knowledge of any Deep Learning Framework, Tensorflow or Keras
- Numpy and Pandas



### 💥 How to Contribute ?
<img src="https://media.giphy.com/media/1xOe0qgiYLYWE6pkki/giphy.gif" width="40%"><br>
- If you wish to contribute kindly check the [Contribution Guidelines](https://github.com/Femme-js/Hoaxify/blob/master/CONTRIBUTION.md)🤝
- Also checkout [Code of Conduct](https://github.com/Femme-js/Hoaxify/blob/master/CODE_OF_CONDUCT.md) of this project.🤝




















# Hoaxify 1.0 
Hoaxify is a Fake News Classifier built using NLP Techniques.

### Dataset
<img src="https://media.giphy.com/media/XZftQQBZHJC8e9ZXKd/giphy.gif" width="40%">

News.csv : A full trained dataset on following attributes-
- news: news article no.
- title: the title of a news article
- text: the text of the article; could be incomplete
- label: a label that marks the article as potentially unreliable. where FAKE: unreliable and REAL: reliable

### Dependencies 👇

- Python 3.x
- NLTK
- NumPy
- Pandas
- sklearn
- CountVectorizer
- TfidfTransformer

### Modelling 🎆

I fit 4 models to the training set, with testing accuracy of the models being:

- Logistic Regression (91.16%)
- Naive Bayes (82.32%)
- Decision Tree (80.49%)
- PassiveAggressive Classifier (93.12%)
