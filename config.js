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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347026961677";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "trye"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347026961677";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_43_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDYyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICA2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkwLFxuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSbmQ3eDlhQzhCeG44MmNFbHAxQ0ZvdUZZVjZtdTZwaGJYUlEwa3AzU3ZzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2S1IteDF1bVNuZWo2ZVUxQndwZVd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlNzJhNjRiLTYyNTktNGU3ZC1hMWJhLTI2YWMxNTliOTMyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDE4OSxcbiAgICAgIDE5NyxcbiAgICAgIDEzMyxcbiAgICAgIDE4MCxcbiAgICAgIDUyLFxuICAgICAgMjU1LFxuICAgICAgMTU3LFxuICAgICAgMjM2LFxuICAgICAgODgsXG4gICAgICAxODMsXG4gICAgICAyMjksXG4gICAgICA5MixcbiAgICAgIDIwMixcbiAgICAgIDIyNCxcbiAgICAgIDIxOSxcbiAgICAgIDcxLFxuICAgICAgMTIxLFxuICAgICAgMzksXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgMzksXG4gICAgICAxNjksXG4gICAgICAxNSxcbiAgICAgIDE2NyxcbiAgICAgIDMzLFxuICAgICAgOTEsXG4gICAgICAyMSxcbiAgICAgIDEwMSxcbiAgICAgIDIzMSxcbiAgICAgIDI1MyxcbiAgICAgIDIwOCxcbiAgICAgIDIxMCxcbiAgICAgIDE1OSxcbiAgICAgIDE4MyxcbiAgICAgIDUwLFxuICAgICAgMjQ5LFxuICAgICAgMTUwLFxuICAgICAgMjE2LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ2UTU4N0RSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI2OTYxNjc3OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTYyODU2NzI2NDQ3NDA6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmFtZ080RkVOTHRoTFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNRlZCVUhIY1dWTndHU3UvVlpPM2R5Uys4NjBGR2hTemVCSmNDdHZiTUVZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdNL01zNE9oQ3NVUVJKdm91Z1VTWVJXbTVnMVdhTy9DNGhuTXIxMUFVakt0amJBemFPNGJzRHh3eUVSc0JuNFNKSTAvVXh1ZXVJeXEzNkZYem5wUEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNhTTM3VDJ0NlQ1U3VUai9aZGJGOEVvU096WXB6d21uTlNaajZQVzN6OHpDYkpsWHhkdXAyZUJHWHdGRytHOW54UGVuQUZRRGFFREtMM05kNHVtQUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjY5NjE2Nzc6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc0NDIxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURMd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREx3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNFQ3RUdZZmVYcE5iSjJNRHBxVE8zMTRmZDV0a1MxcHNwMEtTNDNvYzlYMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTcyODY4OTUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2NjAyOTg2MTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Akira",
  ownername:process.env.OWNER_NAME|| "Paul",


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
