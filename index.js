#!/usr/bin/env node
process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', data => console.log(eval(process.argv.slice(2)[0])(data).toString()))
