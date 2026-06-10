//@ts-check

const fs = require('fs');

let file = fs.readFileSync('HomeWork6Task2Lists.json', 'utf-8');
let data = JSON.parse(file);

console.log('ID та name всіх обєктів Lists:');
for (let i = 0; i < data.lists.length; i++) {
   console.log(`ID: ${data.lists[i].id}, Name: ${data.lists[i].name}`);
}