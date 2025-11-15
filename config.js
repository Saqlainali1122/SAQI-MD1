const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVhUEVTN1B2SE1GWUovc045WkduU3lsLy93dFpQZDNFd2h2TXJMczFrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnZjU0xEZFp5VUk5RXYwRStURWw1ZDhDS1VzenIzb3pCMC9yM28xa29pZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQWl1Uk5QSlA0b0F4YkJ0WkF3dUI0bS8zR2Q1akdvTHFjVUp3V3Z5TDJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvYkREMTZBdDZBZTVyZ0JVZHdaMnlYcjBpaEdoL09pZTNuc2RkVGZXV1NvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ETmhkYWVrbVh2TVdlcWpScTBGYzUvY2t0UXNoQ1psUS9qRnhldHI1Mlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR1YlRSMEZKZ0hhOXVLTVJPNFo0YjUxVWtmRUZKR3VzNE5pT09TL01EaGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BrYzY4K1hjYysrQ1NhZDZSaE1laXRLaXd1TXFoY3dBWnVzN3F1L2pVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3JaSnlVSSsrY3JEUkZpb2VZb3U1Q3BoTG40c0dJT3FRZjBrelpsOGVFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1iQmNlejV0YzZFb1NyN1JjQ3BHUjZubDBlam5QRGhkUDdjZ01hRW8zRjB6SW92QzFMdzZ1aWFCcWVlNFhPUVREVWU1SlRSKzFpOExDcG4weTk0QUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoidU1EbENLNlhzNnNWbGVPZENKRUVqbmFrTUl6WWVZTDRvK2tRY3BMeUdhND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI1ODQyNjgyMzkzOTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM3NjkxQ0M5MTU3QTY2QzREQUQwRjEwNDA5QzMxMkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzIzNDAzMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTg0MjY4MjM5Mzk2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNjAwNTZDMEVCODJBMUE2RDNFQjJCNTgwMUQyOTEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjMyMzQwMzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InVOYVNqUHdoUnp5R04tNW4tUmV0d2ciLCJwaG9uZUlkIjoiZWRjNDJkMGItMjUzNy00ZDQ2LTg5OTMtOWZiMjI4NWYzNzFjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVmZ2JsQnV1eTNqclc1Sm9zSnFCTHZuYmlUST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSRHFvOTczTGJnZ3A4eXdBZVczNTVKV3h6ZlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1o3N0xKOUYiLCJtZSI6eyJpZCI6IjU4NDI2ODIzOTM5NjozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzQ5MzU3MzM3NTE5NTg6M0BsaWQiLCJuYW1lIjoiUklNU0hBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPM25rZk1CRU4raDQ4Z0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxYlRGVmFHWGE5c2NTcXloVzdBSUNvdEMrMWc4L0hPTzhLNHJidTNEeFVZPSIsImFjY291bnRTaWduYXR1cmUiOiJxMHdIN2ovUVowNDBFcDhDVWxyKzF0NGhmL0VLN0xBWlptUU1OS0hlSGlGOVhubXFnNjZaOCtCS3RrTU1qL01Lc0ErT0h0N3NHcHp2bXA0ejdjMzJEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMW9DZGVGUUFuUXRFTGVFa3hrUjduYW9VREV2eUIrVkYzc2x0NEJLbTRwZUpPTmY2M3FZN2RkUWR6TFRiQ2FTMlR4VHd0VkhYbHgxQXpyeTJDZlFuQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1ODQyNjgyMzkzOTY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbTB4VldobDJ2YkhFcXNvVnV3Q0FxTFF2dFlQUHh6anZDdUsyN3R3OFZHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWdnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjMyMzQwMjgsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVR5In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SAQI-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for ant i delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/pbcrsu.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SAQI-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Your-Own-Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923244180461",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SAQI-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ SAQI-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/pbcrsu.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923244180461",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
