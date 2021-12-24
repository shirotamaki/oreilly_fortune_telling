#!/usr/bin/env node
'use strict'

const Enquirer = require('enquirer')
const fs = require('fs')

// 動物リストを取得
function main() {
  fs.readFile( "./oreilly_animals.json", { encoding: "utf8" }, (err, file) => {
   if(err) {
     console.error(err.message)
   } else {
     console.log(file)
     const obj = JSON.parse(file)  // JSON.parseすることでオブジェクトして返す
     console.log(obj)
   }
  });
}

main()


// const fetch = require('node-fetch')
// const getUri = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.text())
//   .then(text => {
//     console.log(text);
// })
//   }
// getUri()
//


