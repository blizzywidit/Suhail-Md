const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254700934802";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_50_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwLFxuICAgICAgICA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY1LFxuICAgICAgICA3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDU4LFxuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZdU41dVVoclU3amlRUUoxRVV0WjVmR3VkVUxMb1Z0RlFqZjdtbGttS09rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4YWxROGV6T1RTLVVtRlBDQlZqdVR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE1OTQ5YmRiLThhOGItNDU4OS1iMmZiLTkxMzIwN2YyOTBkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDE1LFxuICAgICAgNzAsXG4gICAgICA2MCxcbiAgICAgIDksXG4gICAgICAxMTEsXG4gICAgICAyMzMsXG4gICAgICAxMzgsXG4gICAgICAxODUsXG4gICAgICAxNjgsXG4gICAgICAyNTQsXG4gICAgICAzNyxcbiAgICAgIDIwNyxcbiAgICAgIDkxLFxuICAgICAgMTk4LFxuICAgICAgMTg2LFxuICAgICAgODQsXG4gICAgICAyMzIsXG4gICAgICAxMjUsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxMjIsXG4gICAgICAyMTksXG4gICAgICAxNzksXG4gICAgICA5MSxcbiAgICAgIDIxNSxcbiAgICAgIDYyLFxuICAgICAgMTk0LFxuICAgICAgODUsXG4gICAgICA5NCxcbiAgICAgIDEyNixcbiAgICAgIDIzMCxcbiAgICAgIDE2MixcbiAgICAgIDEyMyxcbiAgICAgIDI1LFxuICAgICAgNjAsXG4gICAgICAxNSxcbiAgICAgIDIsXG4gICAgICAxNTUsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNHNkJWNkdNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDA5MzQ4MDI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTExOTEwMTA0MDk2ODk3OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjdXNW93R0VNblQrN01HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1THFsREhtVGtSUkg1RmpzVHNraHFQMFg0djhDZmtkYTFVdUJ2NUZkclNBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9jb3hlZC9kay9laTU0V1o2YlpyQUs5eHAzZVE5RDFQSWl3WnZYMGhnSkpwMUZTWGJzSzl2NGpmeVB3aW1veGppWmJ5bDJlQWdzL0xPUmtJR293K0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9hOFc3MFdtV3g4UGJRQXV5Nk92ZVZwWHlRaCtWbDdCcG5BQWI1d2RnL3ZOQmNOOG1HdHFyK09UY0NFODdkVkQ5SStGV2NvZ1NKd0ZrS096K2JhekF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMDkzNDgwMjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU5MzQyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUt6RVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3pFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMFBwVEtEOE1LV2dwKzRPcU05U09NOFMwL0NxdmtGL2RjeVIzR2dPYUp4OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjM3NDYwNzY1LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg0MzgxMjU4NzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
