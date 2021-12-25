#!/usr/bin/env node
'use strict'

const Enquirer = require('enquirer');
const fs = require('fs')

// 動物リストを取得
function main() {
  fs.readFile( "./oreilly_animals.json", { encoding: "utf8" }, (err, file) => {
   if(err) {
     console.error(err.message)
   } else {
     const obj = JSON.parse(file)  // JSON.parseすることでオブジェクトして返す
     console.log(obj[0]["powers"][0])
   }
  });
}

async function quiz() {
  fs.readFile( "./list_of_questions.json", { encoding: "utf8" }, (err, file) => {
    if(err) {
      console.error(err.message)
    } else {
      // console.log(questions)// JSON.parseすることでオブジェクトして返す
      const prompt = new Promise((resolve) => {
        const question = JSON.parse(file)
        const values = {
        type: 'select',
        name: 'question',
        message: "質問",
        choices: questions
        }
        const answer = Enquirer.prompt(values)
        answer.then(({ questions}) => {

        })
      })
    }
  })
}


quiz()
// main()


