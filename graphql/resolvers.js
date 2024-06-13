 
 const  {Query } = require('mongoose');
const schedules =  require('../models/schedules');
const Schedule = require('../graphql/typeDefs');

module.exports = {
    Query:{
        async scheduleById(_, {id})
        {
            console.log('test');
            return await schedules.findById(id);
        },
         
        async getSchedules(_)  
        {
            console.log("getSchedules"); 
            return await schedules.find().sort({createdAt : -1});
        }
    },

    Mutation: {
        async  createSchedule(_,  {schedule: ScheduleInput}) 
        {
           console.log(ScheduleInput);

            const schedule  =  new schedules({
                                                  email : ScheduleInput.email ,
                                                  message :  ScheduleInput.message,
                                                  subject :  ScheduleInput.subject,
                                                  cron :  ScheduleInput.cron,
                                                  scheduleId : ScheduleInput.scheduleId
                                                });
            
            const res = await schedule.save();
                                                
            console.log(res);

            return {
                id :  res._id,
                ...res._doc
            }
        },
        async deleteSchedule(_, {id})
        {
            console.log(id);
           const wasdeleted =  (await schedules.deleteOne({_id: id})).deletedCount;

           return wasdeleted;
        },
        async editSchedule(_, {schedule : ScheduleInput})
        {
            const wadEdited =(await schedules.updateOne({_id: ScheduleInput._id},ScheduleInput)).modifiedCount;
            return wadEdited;
        }
    }
}