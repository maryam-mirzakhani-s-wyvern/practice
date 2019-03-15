const brain = require('brain.js')
const moodNetwork = new brain.NeuralNetwork({hiddenLayers: [5, 3], activation: 'sigmoid', learningRate: .6})

/*input: 
    sleep: brackets:
        0-2     0
        3-5     .33
        6-8     .66
        9+      1
    sun:
        0:  0
        1:  .25
        2:  .50
        3:  .75
        4:  1
    activities:
        exercise
        socializing:
            not at all:       0
            less than usual:  .33
            usual amount:     .66
            more than usual:  1
        relaxation:
            not at all:       0
            less than usual:  .33
            usual amount:     .66
            more than usual:  1
    meals:
        0:  0
        1:  .25
        2:  .5
        3:  .75
        4+: 1
    work outlook: 
        0:  0
        1:  .2
        2:  .4
        3:  .6
        4:  .8
        5:  1
output: pleasantness, tension, energy (0-1 in .1 increments)
*/


const stats = moodNetwork.train([
  { input: { sleep: 0.66, sun: 0.75, exercise: 1, social: 0.66, relax: 1, meals: 0.75, work: 0.4}, output: { pleasant: .9, tension: .5, energy: .9}},
  { input: { sleep: 0.33, sun: 0.5, exercise: 0, social: 1, relax: 0.33, meals: .5, work: 1}, output: {pleasant: .8, tension: .8, energy: .5}},
  { input: { sleep: 0.66, sun: 0.75, exercise: 0, social: 0.66, relax: 0.66, meals: .75, work: 0.8}, output: {pleasant: .8, tension: .2, energy: .9}},
  { input: { sleep: 0.66, sun: 1, exercise: 1, social: 0.33, relax: 0.66, meals: .25, work: 0.6}, output: { pleasant: .8, tension: .1, energy: .2}},

  { input: { sleep: 1, sun: 0.25, exercise: 1, social: 0, relax: 0.33, meals: .75, work: 0.2}, output: { pleasant: .5, tension: .7, energy: .6 }},
  { input: { sleep: 1, sun: 0.75, exercise: 0, social: 0.33, relax: 0.66, meals: .5, work: 0.2}, output: { pleasant: .5, tension: .5, energy: .9}},
  { input: { sleep: 0.66, sun: 0.25, exercise: 1, social: 0.66, relax: 0, meals: .25, work: 0.4}, output: { pleasant: .2, tension: .8, energy: .3}},
  { input: { sleep: 0.33, sun: 0.5, exercise: 0, social: 0.33, relax: 1, meals: .75, work: 0.6}, output: { pleasant: .4, tension: .8, energy: .2}},

  { input: { sleep: 0.33, sun: 0.25, exercise: 1, social: 1, relax: 0, meals: .5, work: 0.6}, output: { pleasant: .8, tension: .2, energy: .2}},
  { input: { sleep: 0.66, sun: 0, exercise: 0, social: 0.66, relax: 0.33, meals: .25, work: 0.8}, output: { pleasant: .3, tension: .7, energy: .2}},
  { input: { sleep: 1, sun: 0.75, exercise: 0, social: 0.33, relax: 0.33, meals: .5, work: 0.2}, output: { pleasant: .8, tension: .9, energy: .9}},
  { input: { sleep: 0.66, sun: 0.5, exercise: 0, social: 0.33, relax: 0, meals: .5, work: 0.4}, output: { pleasant: .1, tension: .9, energy: .2}},

  { input: { sleep: 0.33, sun: 1, exercise: 1, social: 1, relax: 0, meals: .5, work: 1}, output: { pleasant: .8, tension: .1, energy: .2 }},
  { input: { sleep: 0.66, sun: 1, exercise: 1, social: 0.66, relax: 0.66, meals: .5, work: 0.6}, output: { pleasant: .5, tension: .2, energy: .8}},
  { input: { sleep: 1, sun: 0.75, exercise: 1, social: 0.33, relax: 0.66, meals: .75, work: 0.8}, output: { pleasant: .8, tension: .2, energy: 1 }},
  { input: { sleep: 0.66, sun: 0.75, exercise: 0, social: 1, relax: 1, meals: .75, work: 0.6}, output: { pleasant: .8, energy: .9, tension: .2 }},
  
  { input: { sleep: 0.66, sun: 0.5, exercise: 1, social: 0.33, relax: 1, meals: .5, work: 0.6}, output: { pleasant: .6, tension: .1, energy: .9}},
  { input: { sleep: 1, sun: 0.75, exercise: 1, social: 0.66, relax: 0.33, meals: .75, work: 0.4}, output: { pleasant: .8, tension: .5, energy: .6}},
  { input: { sleep: 0.33, sun: 1, exercise: 0, social: 0, relax: 0.66, meals: .75, work: 0.6}, output: { pleasant: .9, tension: .8, energy: .2 }},
  { input: { sleep: 0.66, sun: 0, exercise: 1, social: 0.66, relax: 1, meals: .5, work: 0.8}, output: { pleasant: .5, tension: .1, energy: .3}},

  { input: { sleep: .66, sun: 0.75, exercise: 1, social: 1, relax: 1, meals: .75, work: 1}, output: { pleasant: 1, tension: 0, energy: .5}},
  { input: { sleep: 0, sun: 0, exercise: 0, social: 0, relax: 0, meals: .25, work: 0}, output: { pleasant: 0, tension: 1, energy: 0}},
  { input: { sleep: 0.66, sun: 0.5, exercise: 0, social: 1, relax: 0.33, meals: .25, work: 0.2}, output: { pleasant: 0, tension: .1, energy: .5 }},
  { input: { sleep: 0.66, sun: 1, exercise: 0, social: 1, relax: 0, meals: .75, work: .4}, output: { pleasant: 1, tension: 1, energy: 1}}


])

console.log("Stats: ", stats)

const guessMore = [
  {sleep: 0, sun: 0.75, exercise: 0, social: 1, relax: 1, meals: .5, work: 0.4}, //pleasant: 0-.4, tension: .4-.7, energy: 0-.4
  {sleep: 0.66, sun: 0.75, exercise: 1, social: 0.66, relax: 1, meals: .75, work: 1}, //pleasant: .4-.7, tension: .2-.4, energy: .5-.9
  {sleep: 1, sun: 0.25, exercise: 1, social: 0, relax: 0.33, meals: .75, work: 0}, //pleasant: .3-.5, tension: .4-.7, energy: .5-1
  {sleep: 1, sun: 0.75, exercise: 1, social: 0.66, relax: 0.33, meals: .75, work: 0.6}, // pleasant: .6-1, tension: .2-.5, energy: .5-.8
  {sleep: 0.66, sun: 1, exercise: 1, social: 1, relax: 0.66, meals: .5, work: 0.6}, //pleasant: .5-.9, tension: .3-.6, energy: .6-.9
  {sleep: 0.33, sun: 0.25, exercise: 1, social: 1, relax: 0, meals: .5, work: 0.4} //pleasant: .3-.6, tension: .6-.8, energy: .3-.5
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
