const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const mongoose = require('mongoose');


mongoose.connect(
    "mongodb+srv://node-shop:" +
      "node-shop" +
      "@node-rest-shop-lqicg.mongodb.net/test?retryWrites=true&w=majority",
    {
     useNewUrlParser: true,
     useUnifiedTopology: true,
      useFindAndModify: false 
    }
  );


const resolvers ={
    Query,
    Mutation
}


const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))