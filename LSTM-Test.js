//This is an attempt at using Recurrent Neural Network
//and Long-Short Term Memory with multiple object linear input/output
//example data: using [ {pleasant: 3}, {tension: 6}, {energy: 5} ] instead of
//[ { pleasant: 3, tension: 6, energy: 5 } ]

//data formatting info:
//https://gist.github.com/robertleeplummerjr/713a47d5fd63e8e189f8cf5cbc0649cd

const brain = require('brain.js')

const net = new brain.recurrent.LSTM()

net.train([
  { input: [ { sleep: 0.66 }, { sun: 0.75 }, { exercise: 1 }, { social: 0.66 }, { relax: 1.00 }, { meals: 0.75 }, {work: 0.40} ], output: [ { pleasant: 0.70 }, { tension: 0.50 }, { energy: 0.70 } ]},
  { input: [ { sleep: 0.33 }, { sun: 0.50 }, { exercise: 0 }, { social: 1.00 }, { relax: 0.33 }, { meals: 0.50 }, {work: 1.00} ], output: [ { pleasant: 0.60 }, { tension: 0.60 }, { energy: 0.50 } ]},
  { input: [ { sleep: 0.66 }, { sun: 0.75 }, { exercise: 0 }, { social: 0.66 }, { relax: 0.66 }, { meals: 0.75 }, {work: 0.80} ], output: [ { pleasant: 0.80 }, { tension: 0.40 }, { energy: 0.70 } ]},
  { input: [ { sleep: 0.66 }, { sun: 1.00 }, { exercise: 1 }, { social: 0.33 }, { relax: 0.66 }, { meals: 0.25 }, {work: 0.60} ], output: [ { pleasant: 0.80 }, { tension: 0.30 }, { energy: 0.40 } ]},

  { input: [ { sleep: 1.00 }, { sun: 0.25 }, { exercise: 1 }, { social: 0.00 }, { relax: 0.33 }, { meals: 0.75 }, {work: 0.20} ], output: [ { pleasant: 0.50 }, { tension: 0.70 }, { energy: 0.60 } ]},
  { input: [ { sleep: 1.00 }, { sun: 0.75 }, { exercise: 0 }, { social: 0.33 }, { relax: 0.66 }, { meals: 0.50 }, {work: 0.20} ], output: [ { pleasant: 0.50 }, { tension: 0.50 }, { energy: 0.70 } ]},
  { input: [ { sleep: 0.66 }, { sun: 0.25 }, { exercise: 1 }, { social: 0.66 }, { relax: 0.00 }, { meals: 0.25 }, {work: 0.40} ], output: [ { pleasant: 0.20 }, { tension: 0.80 }, { energy: 0.30 } ]},
  { input: [ { sleep: 0.33 }, { sun: 0.50 }, { exercise: 0 }, { social: 0.33 }, { relax: 1.00 }, { meals: 0.75 }, {work: 0.60} ], output: [ { pleasant: 0.40 }, { tension: 0.60 }, { energy: 0.20 } ]},

  { input: [ { sleep: 0.33 }, { sun: 0.25 }, { exercise: 1 }, { social: 1.00 }, { relax: 0.00 }, { meals: 0.50 }, {work: 0.60} ], output: [ { pleasant: 0.60 }, { tension: 0.40 }, { energy: 0.40 } ]},
  { input: [ { sleep: 0.66 }, { sun: 0.00 }, { exercise: 0 }, { social: 0.66 }, { relax: 0.33 }, { meals: 0.25 }, {work: 0.80} ], output: [ { pleasant: 0.30 }, { tension: 0.70 }, { energy: 0.40 } ]},
  { input: [ { sleep: 1.00 }, { sun: 0.75 }, { exercise: 0 }, { social: 0.33 }, { relax: 0.33 }, { meals: 0.50 }, {work: 0.20} ], output: [ { pleasant: 0.60 }, { tension: 0.90 }, { energy: 0.70 } ]},
  { input: [ { sleep: 0.66 }, { sun: 0.50 }, { exercise: 0 }, { social: 0.33 }, { relax: 0.00 }, { meals: 0.50 }, {work: 0.40} ], output: [ { pleasant: 0.10 }, { tension: 0.90 }, { energy: 0.40 } ]},

  { input: [ { sleep: 0.33 }, { sun: 1.00 }, { exercise: 1 }, { social: 1.00 }, { relax: 0.00 }, { meals: 0.50 }, {work: 1.00} ], output: [ { pleasant: 0.80 }, { tension: 0.30 }, { energy: 0.50 } ]},
  { input: [ { sleep: 0.66 }, { sun: 1.00 }, { exercise: 1 }, { social: 0.66 }, { relax: 0.66 }, { meals: 0.50 }, {work: 0.60} ], output: [ { pleasant: 0.50 }, { tension: 0.40 }, { energy: 0.80 } ]},
  { input: [ { sleep: 1.00 }, { sun: 0.75 }, { exercise: 1 }, { social: 0.33 }, { relax: 0.66 }, { meals: 0.75 }, {work: 0.80} ], output: [ { pleasant: 0.80 }, { tension: 0.20 }, { energy: 1.00 } ]},
  { input: [ { sleep: 0.66 }, { sun: 0.75 }, { exercise: 0 }, { social: 1.00 }, { relax: 1.00 }, { meals: 0.75 }, {work: 0.60} ], output: [ { pleasant: 0.80 }, { tension: 0.40 }, { energy: 0.70 } ]},
  
  { input: [ { sleep: 0.66 }, { sun: 0.50 }, { exercise: 1 }, { social: 0.33 }, { relax: 1.00 }, { meals: 0.50 }, {work: 0.60} ], output: [ { pleasant: 0.50 }, { tension: 0.30 }, { energy: 0.70 } ]},
  { input: [ { sleep: 1.00 }, { sun: 0.75 }, { exercise: 1 }, { social: 0.66 }, { relax: 0.33 }, { meals: 0.75 }, {work: 0.40} ], output: [ { pleasant: 0.60 }, { tension: 0.50 }, { energy: 0.50 } ]},
  { input: [ { sleep: 0.33 }, { sun: 1.00 }, { exercise: 0 }, { social: 0.00 }, { relax: 0.66 }, { meals: 0.75 }, {work: 0.60} ], output: [ { pleasant: 0.70 }, { tension: 0.60 }, { energy: 0.40 } ]},
  { input: [ { sleep: 0.66 }, { sun: 0.00 }, { exercise: 1 }, { social: 0.66 }, { relax: 1.00 }, { meals: 0.50 }, {work: 0.80} ], output: [ { pleasant: 0.50 }, { tension: 0.10 }, { energy: 0.30 } ]},

  { input: [ { sleep: 0.66 }, { sun: 0.75 }, { exercise: 1 }, { social: 1.00 }, { relax: 1.00 }, { meals: 0.75 }, {work: 1.00} ], output: [ { pleasant: 1.00 }, { tension: 0.00 }, { energy: 0.50 } ]},
  { input: [ { sleep: 0.00 }, { sun: 0.00 }, { exercise: 0 }, { social: 0.00 }, { relax: 0.00 }, { meals: 0.25 }, {work: 0.00} ], output: [ { pleasant: 0.00 }, { tension: 1.00 }, { energy: 0.00 } ]},
  { input: [ { sleep: 0.66 }, { sun: 0.50 }, { exercise: 0 }, { social: 1.00 }, { relax: 0.33 }, { meals: 0.25 }, {work: 0.20} ], output: [ { pleasant: 0.00 }, { tension: 0.30 }, { energy: 0.50 } ]},
  { input: [ { sleep: 0.66 }, { sun: 1.00 }, { exercise: 0 }, { social: 1.00 }, { relax: 0.00 }, { meals: 0.75 }, {work: 0.40} ], output: [ { pleasant: 1.00 }, { tension: 1.00 }, { energy: 1.00 } ]}


], {
  iterations: 10000,
  errorThresh: 0.50,
  log: true,
  logPeriod: 20
})

const guessMore = [
  [ {sleep: 0.00 }, { sun: 0.75 }, { exercise: 0 }, { social: 1.00 },  { relax: 1.00 }, { meals: 0.50 }, { work: 0.40 } ], //pleasant: 0-.4, tension: .4-.7, energy: 0-.4
  {sleep: 0.66 }, { sun: 0.75 }, { exercise: 1 }, { social: 0.66 },  { relax: 1.00 }, { meals: 0.75 }, { work: 1.00 }, //pleasant: .4-.7, tension: .2-.4, energy: .5-.9
  {sleep: 1.00 }, { sun: 0.25 }, { exercise: 1 }, { social: 0.00 },  { relax: 0.33 }, { meals: 0.75 }, { work: 0.00 }, //pleasant: .3-.5, tension: .4-.7, energy: .5-1
  {sleep: 1.00 }, { sun: 0.75 }, { exercise: 1 }, { social: 0.66 },  { relax: 0.33 }, { meals: 0.75 }, { work: 0.60 }, // pleasant: .6-1, tension: .2-.5, energy: .5-.8
  {sleep: 0.66 }, { sun: 1.00 }, { exercise: 1 }, { social: 1.00 },  { relax: 0.66 }, { meals: 0.50 }, { work: 0.60 }, //pleasant: .5-.9, tension: .3-.6, energy: .6-.9
  {sleep: 0.33 }, { sun: 0.25 }, { exercise: 1 }, { social: 1.00 },  { relax: 0.00 }, { meals: 0.50 }, { work: 0.40 } //pleasant: .3-.6, tension: .6-.8, energy: .3-.5
]

const output = net.run(guessMore[0])

console.log(output)
