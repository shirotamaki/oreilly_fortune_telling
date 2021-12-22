#!/usr/bin/env node
// 'use strict'


// const Enquirer = require('enquirer')
//
// console.log('foo')
//
// async function callApi() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   const users = await Json.parse(res)
//   console.log(users)
// }
// callApi()
//
// function main() {
// fetch("https://jsonplaceholder.typicode.com/users")
// .then( function (res){
//   return res.json()
// })
// }
//
// console.log(main())
const fetch = require('node-fetch')


const API = "https://connpass.com/api/v1/event/"
// console.log(API)
async function callApi() {
  const res = await fetch(API)
  const json = await res.json()
  // const api = await JSON.parse(res)
  console.log(json)
  // for (const i of json) {
  //   console.log(`${i.title}`)
}

callApi()

// function main() {
//   fetch(API).then(function (response) {
//     return response.text();
//   }).then(function (text) {
//     console.log(text)
//   })
// }
// main()
