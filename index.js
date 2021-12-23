#!/usr/bin/env node
'use strict'

const Enquirer = require('enquirer')
const fs = require('fs')

function main() {
  fs.readFile( "./oreilly_animals.json", { encoding: "utf8" }, (err, file) => {
   if(err) {
     console.error(err.message)
   } else {
     const obj = JSON.parse(file);
     console.log(obj)
   }
  });
}

main()
