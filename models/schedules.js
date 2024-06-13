const {model, Schema} =  require('mongoose'); 
const scheduleSchema = new Schema({ 
id : String,
scheduleId : Number,
email: String,
subject: String,
message : String,
cron : String, 
});

module.exports = model('schedules', scheduleSchema);