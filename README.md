# Hoaxify
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

### Modelling

I fit 7 models to the training set, with testing accuracy of the models being:

- Logistic Regression with TfidfVectorizer (91.72%)
- Naive Bayes with TfidfVectorizer (82.32%)
- Decision Tree with TfidfVectorizer (80.42%)
- PassiveAggressive Classifier with TfidfVectorizer (94.0%)


