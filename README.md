# LAB 09:

Authors: Stephanie Hill & Stephen Clemmer

### Links and Resources

[back-end server url](https://level-up-lab.herokuapp.com)

PORT - 3001

**Problem Domain**
Create a new application using an API Server and Authentication System

**UML**
![Lab 09 API Server Diagram](./assets/Lab%2009%20API%20Server%20Diagram.png)
![Lab 09 Auth Server Diagram](./assets/Lab%2009%20Auth%20Server%20Diagram.png)

**Tests**

1. Handles Errors
2. Handles Root Path
3. Handles Invalid Requests


**File Structure**
├── __tests__
│   ├── server.test.js
├── .gihubworkflows
│   ├── javascripttests.yml
├── config
│   ├── config.json
├── editor.config
├── .eslintignore
├── .eslintrc.json
├── package-lock.json
├── gitattributes
├── .gitignore
├── .eslintrc.json
├── __tests__
├── src
│   ├── auth
│   │   ├── middleware
│   │   │   ├── acl.js
│   │   │   ├── basic.js
│   │   │   ├── bearer.js
│   │   ├── models
│   │   │   ├── cocktails.schema.js
│   │   │   ├── foods.schema.js
│   │   │   ├── data-collection.js
│   │   │   ├── index.js
│   │   │   ├── users.js
│   │   ├── routes
│   │   │   ├── cocktails.js
│   │   │   ├── foods.js
│   │   │   ├── router.js
│   │   │   ├── v1.js
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── server.js
├── index.js
├── .env
└── package.json

### Features

Feature 1:
Store drinks in database

Feature 2:
Store food recipes in the database

