## Commands

```bash
# create new project
$ nest new graphql-mongodb

# GraphQL Installation
# graphql => core graphql package for nodes
# graphql-tools => extra tooling such as playground
# apollo-server-express => graphql server package for nodejs
# @nestjs/graphql => wrapper which makes above packages easy to use in nestjs ecosystem
$ npm install graphql@14.6.0 graphql-tools apollo-server-express @nestjs/graphql

# MongoDB and TypeORM Installation
# typeorm => library of its own 
# @nests/typeorm => wrapper for typeorm which makes easy to use typeorm along with nests
# mongodb => mongodb driver which is a node package which allows you to connect to mongodb and allow db transactions
# @types/mongodb => makes is easier to workwith typescript along with mongodb
$ npm install typeorm @nests/typeorm mongodb @types/mongodb --save



# GraphQL
## Resolver
* Equivalent to Controller in RESTful services
* Will handle incoming request and return the response
* Resolver will go to provider part of the Module

## Query
* Is used to read data
* It is just a function

## Mutation
* Used to create new data
* or change existing data

# MongoDB
## TypeORM
* Object Raltional Mapping Tool
* Is the easiest to use and most mature one

## Admin
* To start the service use: NET START MONGODB.
* To stop the service use: NET STOP MONGODB.
