const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')


const resolvers ={
    Query,
}

// const resolvers = {
//   Query: {
//     info(){
//         return 'Hasanga is the best'
//     }
//   }
// }

// 3
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
  resolvers:resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))