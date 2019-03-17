const brain = require('brain.js')

const moodNetwork = new brain.NeuralNetwork({hiddenLayers: [5, 3], activation: 'sigmoid', learningRate: 0.6});

const trainingData = [
  { input: [ 0.66, 0.75, 1, 0.66, 1.00, 0.75, 0.40 ], output: [ 0.70, 0.50, 0.70 ]},
  { input: [ 0.33, 0.50, 0, 1.00, 0.33, 0.50, 1.00 ], output: [ 0.60, 0.60, 0.50 ]},
  { input: [ 0.66, 0.75, 0, 0.66, 0.66, 0.75, 0.80 ], output: [ 0.80, 0.40, 0.70 ]},
  { input: [ 0.66, 1.00, 1, 0.33, 0.66, 0.25, 0.60 ], output: [ 0.80, 0.30, 0.40 ]},

  { input: [ 1.00, 0.25, 1, 0.00, 0.33, 0.75, 0.20 ], output: [ 0.50, 0.70, 0.60 ]},
  { input: [ 1.00, 0.75, 0, 0.33, 0.66, 0.50, 0.20 ], output: [ 0.50, 0.50, 0.70 ]},
  { input: [ 0.66, 0.25, 1, 0.66, 0.00, 0.25, 0.40 ], output: [ 0.20, 0.80, 0.30 ]},
  { input: [ 0.33, 0.50, 0, 0.33, 1.00, 0.75, 0.60 ], output: [ 0.40, 0.60, 0.20 ]},

  { input: [ 0.33, 0.25, 1, 1.00, 0.00, 0.50, 0.60 ], output: [ 0.60, 0.40, 0.40 ]},
  { input: [ 0.66, 0.00, 0, 0.66, 0.33, 0.25, 0.80 ], output: [ 0.30, 0.70, 0.40 ]},
  { input: [ 1.00, 0.75, 0, 0.33, 0.33, 0.50, 0.20 ], output: [ 0.60, 0.90, 0.70 ]},
  { input: [ 0.66, 0.50, 0, 0.33, 0.00, 0.50, 0.40 ], output: [ 0.10, 0.90, 0.40 ]},

  { input: [ 0.33, 1.00, 1, 1.00, 0.00, 0.50, 1.00 ], output: [ 0.80, 0.30, 0.50 ]},
  { input: [ 0.66, 1.00, 1, 0.66, 0.66, 0.50, 0.60 ], output: [ 0.50, 0.40, 0.80 ]},
  { input: [ 1.00, 0.75, 1, 0.33, 0.66, 0.75, 0.80 ], output: [ 0.80, 0.20, 1.00 ]},
  { input: [ 0.66, 0.75, 0, 1.00, 1.00, 0.75, 0.60 ], output: [ 0.80, 0.40, 0.70 ]},

  { input: [ 0.66, 0.50, 1, 0.33, 1.00, 0.50, 0.60 ], output: [ 0.50, 0.30, 0.70 ]},
  { input: [ 1.00, 0.75, 1, 0.66, 0.33, 0.75, 0.40 ], output: [ 0.60, 0.50, 0.50 ]},
  { input: [ 0.33, 1.00, 0, 0.00, 0.66, 0.75, 0.60 ], output: [ 0.70, 0.60, 0.40 ]},
  { input: [ 0.66, 0.00, 1, 0.66, 1.00, 0.50, 0.80 ], output: [ 0.50, 0.10, 0.30 ]},

  { input: [ 0.66, 0.75, 1, 1.00, 1.00, 0.75, 1.00 ], output: [ 1.00, 0.00, 0.50 ]},
  { input: [ 0.00, 0.00, 0, 0.00, 0.00, 0.25, 0.00 ], output: [ 0.00, 1.00, 0.00 ]},
  { input: [ 0.66, 0.50, 0, 1.00, 0.33, 0.25, 0.20 ], output: [ 0.00, 0.30, 0.50 ]},
  { input: [ 0.66, 1.00, 0, 1.00, 0.00, 0.75, 0.40 ], output: [ 1.00, 1.00, 1.00 ]}
]

const stats = moodNetwork.train(trainingData, {
  iterations: 10000,
  errorThresh: 0.005,
  log: true,
  logPeriod: 200
})

console.log('STATS::', stats)

const guessMore = [
 {input: [ 0.00, 0.75, 0, 1.00, 1.00, 0.50, 0.40 ] }, //pleasant: 0-.4, tension: .4-.7, energy: 0-.4
 {input: [ 0.66, 0.75, 1, 0.66, 1.00, 0.75, 1.00 ] }, //pleasant: .4-.7, tension: .2-.4, energy: .5-.9
 {input: [ 1.00, 0.25, 1, 0.00, 0.33, 0.75, 0.00 ] }, //pleasant: .3-.5, tension: .4-.7, energy: .5-1
 {input: [ 1.00, 0.75, 1, 0.66, 0.33, 0.75, 0.60 ] }, // pleasant: .6-1, tension: .2-.5, energy: .5-.8
 {input: [ 0.66, 1.00, 1, 1.00, 0.66, 0.50, 0.60 ] }, //pleasant: .5-.9, tension: .3-.6, energy: .6-.9
 {input: [ 0.33, 0.25, 1, 1.00, 0.00, 0.50, 0.40 ] } //pleasant: .3-.6, tension: .6-.8, energy: .3-.5
]

const r1 = moodNetwork.run(guessMore[0])
const r2 = moodNetwork.run(guessMore[1])
const r3 = moodNetwork.run(guessMore[2])
const r4 = moodNetwork.run(guessMore[3])
const r5 = moodNetwork.run(guessMore[4])
const r6 = moodNetwork.run(guessMore[5])

console.log("Result1: \n", r1)
console.log("Result2: \n", r2)
console.log("Result3: \n", r3)
console.log("Result4: \n", r4)
console.log("Result5: \n", r5)
console.log("Result6: \n", r6)

console.log(moodNetwork.toJSON())
