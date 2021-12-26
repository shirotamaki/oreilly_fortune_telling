#!/usr/bin/env node
'use strict'

const { Quiz } = require('enquirer');
const fs = require('fs')
const list_of_questions = require('./list_of_questions.js')
const oreilly_animals = require('./oreilly_animals.js')

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

quiz()

// 書籍データ出力用メソッド
function selectAnimal() {
  const random = Math.floor(Math.random() * (5 - 0)) + 0
  const animal = oreilly_animals[random]
  console.log(`アニマル名: ${animal.animal}`)
  console.log(`カバー写真: ${animal.cover_src}`)
  console.log(`書籍のリンク: ${animal.link}`)
  console.log(`書籍のタイトル: ${animal.title}`)
}

selectAnimal()


