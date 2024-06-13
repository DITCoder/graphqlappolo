const {ApolloServer} = require("apollo-server");
const typeDefs = require('./graphql/typeDefs');
const resolvers = require("./graphql/resolvers");
const m = require("mongoose");
const schedules = require('./models/schedules');
const MONGODB = "mongodb://127.0.0.1:27017/BookStore";

const server = new ApolloServer({
    typeDefs,
    resolvers
});

m.connect(MONGODB).then((x) =>
{
    console.log("mongo db connection success");
     
    return server.listen({port: 5000}); 
}).then((res) => {
    schedules.find().then((x) => console.log(x));
    console.log(`server runing at ${res.url}`)
});