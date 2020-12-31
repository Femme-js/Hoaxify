# Hoaxify 2.0

### Introduction
Fake news is an increasingly common feature of today’s political landscape. To solve this issue, researchers and media experts have proposed fake news
detectors adopting natural language processing (NLP) to analyze word patterns and statistical correlations of news articles. 
The datset for training the ML (DL) model can be curated from crowdsourcing techniques or we can use already curated datasets from kaggle etc.

### Data Curation

- Crowdsoucing for collection of data of fake news.
- Already prepared data.
- Attributes:
       news: news article no.
       title: the title of a news article
       text: the text of the article; could be incomplete
       label: a label that marks the article as potentially unreliable. where FAKE: unreliable and REAL: reliable
       
### Modelling

- ML Classifier Models
- Neural Nets

### Comparing the result matrices

- Creating visulations for comparing the result matrices of different algorithms. 

### Dependencies

- Python 3.x
- Keras/Tensorflow
- NLTK
- NumPy
- Pandas
- sklearn


## CONTRIBUTION

### Tech-stack Required

- Python
- Basics of NLP
- Understanding of Machine Learning Classification Algorithms
- Knowledge of any Deep Learning Framework, Tensorflow or Keras
- Numpy and Pandas























# Hoaxify 1.0
Hoaxify is a Fake News Classifier built using NLP Techniques.

### Dataset

News.csv : A full trained dataset on following attributes-
- news: news article no.
- title: the title of a news article
- text: the text of the article; could be incomplete
- label: a label that marks the article as potentially unreliable. where FAKE: unreliable and REAL: reliable

### Dependencies

- Pyhton 3.x
- NLTK
- NumPy
- Pandas
- sklearn
- CountVectorizer
- TfidfTransformer

### Modelling

I fit 4 models to the training set, with testing accuracy of the models being:

- Logistic Regression (91.16%)
- Naive Bayes (82.32%)
- Decision Tree (80.49%)
- PassiveAggressive Classifier (93.12%)


