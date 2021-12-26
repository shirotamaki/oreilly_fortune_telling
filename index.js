#!/usr/bin/env node
'use strict'

const { Quiz } = require('enquirer')
const fs = require('fs')
const list_of_questions = require('./list_of_questions.js')
const oreilly_animals = require('./oreilly_animals.js')
const readline = require('readline')

class SetUp {
  constructor() {

  }
  async prologue () {
    console.log('クイズに答えることで、あたなにお薦めのオライリー本（動物）をお薦めするよ！\n始めるには何かキーを押してください')

  }
}

function inputName (question) {
  const data = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve, reject) => {
    data.question(question, (answer) => {
      resolve(answer)
      data.close()
    })
  })
}

(async function main () {
  const name = await inputName('まずはあたなのことを教えてね\nニックネームを入力してエンターを押してね♪\n')
  // console.log(name)
  console.log(`ありがとう、${name}さん！\nこれで準備はバッチリだよ\nそれでは、早速クイズを始めよう♪\nこれから5問クイズを出題するよ\n４つの中から答えを選択してね♪`)
  })();


// クイズ用メソッド
function quiz() {
  const random = Math.floor(Math.random() * (5 - 0)) + 0
  const question = list_of_questions[random].message
  const answers = list_of_questions[random].choices.flat()
  const correctAnswer = list_of_questions[random].correctChoice
  const prompt = new Quiz({
    name: 'answer',     // 選択された答えのオブジェクト
    message: question,  // 質問文
    choices: answers,    // クイズの答えの候補のリスト
    correctChoice: correctAnswer   //クイズの答え
  })

  prompt
  .run()
  .then((answerObj) => {
    if (answerObj.correct) {
      console.log('正解！')
    } else {
      console.log('残念、不正解')
    }
  })
  .catch(console.error)
}

// quiz()

// 書籍データ出力用メソッド
function selectAnimal() {
  const random = Math.floor(Math.random() * (5 - 0)) + 0
  const animal = oreilly_animals[random]
  console.log('お薦めのオライリー本は......')
  console.log(`アニマル名: ${animal.animal}`)
  console.log(`カバー写真: ${animal.cover_src}`)
  console.log(`書籍のリンク: ${animal.link}`)
  console.log(`書籍のタイトル: ${animal.title}`)
}

// selectAnimal()


