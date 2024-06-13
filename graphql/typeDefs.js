const { gql } = require('apollo-server');

module.exports  = gql
`
input ScheduleInput {
    _id : String,
    email: String,
    subject: String,
    message : String,
    cron : String 
}  

type Schedule {
    _id: ID,
    scheduleId : Int,
    email: String,
    subject: String,
    message : String,
    cron : String 
}  

type Query{
    scheduleById(id : String ): Schedule! 
    getSchedules: [Schedule]!
}

type Mutation{
    createSchedule(schedule : ScheduleInput): Schedule!
    deleteSchedule(id: String!): Int
    editSchedule(schedule : ScheduleInput) : Boolean
}
`;
 