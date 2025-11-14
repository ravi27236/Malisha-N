const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').confg({ path: './config.env' });
function convertToBool(text, fault = 'true') 
    return text === fault ? 
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙽𝙰𝙳𝙴𝙴𝙽-𝙼𝙳=xcJxTZqZ#T2ChzR3Pm_Uiqa05HJ9-JeD_N1vvRyrMzO5S6VZ4p_s' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT, 
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'nadeenmd' : process.env.SESSION_NAME
};
