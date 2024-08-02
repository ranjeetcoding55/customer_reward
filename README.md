
![image](https://github.com/user-attachments/assets/8824cb5f-d1a0-49ff-9d75-331d13b6865f)

## Assignment
A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.

(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

## How to run the ReactJS Application ?

1. Open the Downloaded file in the VS Code

2. Open the terminal after navigating to rewards-calculator folder

3. Run the command

   npm install

4. This will install the needed dependencies required to run the ReactJS Application

5. After installing all the required node modules run the below command

   npm start

6. This will start running the ReactJS application in localhost

7. You can run all the test cases using the below command

  npm test

8. This will start running all the tests

## Features

- Calculate Reward points earned for each customer per month and total
- Show data based on latest consecutive N month period of time
- Transaction data can be with in the same year or spans different years
+ Data is grouped based on years if it spans different years
+ Multiple transactions within the month are sumed up together
+ Rounded up rewards
+ Loading screen and Error handling is implemented
+ Test cases for all of the above scenarios are added
+ Transaction data is logged
