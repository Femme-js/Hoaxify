# Hoaxify 2.0

### Introduction
Fake news is an increasingly common feature of today’s political landscape. To solve this issue, researchers and media experts have proposed fake news
detectors adopting natural language processing (NLP) to analyze word patterns and statistical correlations of news articles. 
The datset for training the ML (DL) model can be curated from crowdsourcing techniques or we can use already curated datasets from kaggle etc.

### Data Curation

- Crowdsourcing for collection of data of fake news.
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

- Creating visualizations for comparing the result matrices of different algorithms. 

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


### Guidelines before contributing

- Fork the Repository.

- Clone this Github Repository. Open up the Git Bash/Command Line and type in: git clone https://github.com/<YOUR_GITHUB_USERNAME>/Hoaxify.git

- cd into the specific directory. Now create a branch of the main by pushing the command: git branch <YOUR_BRANCH_NAME> 

- You can now check the branches by pushing in the command: git branch. You will see the Main Branch and another branch with your Username.

- Switch to the Development Branch. Never develop on Main Branch. Push in the command: git checkout <YOUR_BRANCH_NAME> 

- Start Contributing. Make apt commits with proper commit messages. Always use git status to see that you have not made changes on the file you were supposed not to.

- Add all the changes with this command: git add . This will add all the changes to your present workspace.

- Make a Commit with this: git commit -m "Add your Commit Message; Proper and Clean" This will save a snapshot of your Project.

- Push the changes: git push

Some things to keep in mind:
- Always git pull from Main every day. This will help you to keep yourself Merge Conflict-free.
- If you are making multiple commits, make sure to squash the commits and make a PR.
- Add proper comments and documentation to all your Code.






















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

## 💥 How to Contribute ?
- If you wish to contribute kindly check the [CONTRIBUTION.md](https://github.com/Femme-js/Hoaxify/blob/master/CONTRIBUTION.md)🤝

