\\ NPM Files
const express = require('express')
const app = express()
const port = 3000
\\ Regular Prefix
const prefix = '>';
\\ Other Prefix
const nothing = '';
 
app.get("/", (req, res) => {
  res.send("Activated.")
})
 
let Discord = require('discord.js')
let client = new Discord.Client();
\\ Login
client.login('TOKEN')
