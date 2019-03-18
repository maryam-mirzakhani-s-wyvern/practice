//Note: this is based on translating an object made from the CSV input.
//It will need to be adapted for the database entries format.
//Also we need to ensure this is consistent with the inputs from experiment2.js

const sampleInputsForML = [
  //this is for 6 days
  {
    sleep: 0,
    sun: 0.75,
    exercise: 0,
    social: 1,
    relax: 1,
    meals: 0.5,
    work: 0.4
  }, //pleasant: 0-.4, tension: .4-.7, energy: 0-.4
  {
    sleep: 0.66,
    sun: 0.75,
    exercise: 1,
    social: 0.66,
    relax: 1,
    meals: 0.75,
    work: 1
  }, //pleasant: .4-.7, tension: .2-.4, energy: .5-.9
  {
    sleep: 1,
    sun: 0.25,
    exercise: 1,
    social: 0,
    relax: 0.33,
    meals: 0.75,
    work: 0
  }, //pleasant: .3-.5, tension: .4-.7, energy: .5-1
  {
    sleep: 1,
    sun: 0.75,
    exercise: 1,
    social: 0.66,
    relax: 0.33,
    meals: 0.75,
    work: 0.6
  }, // pleasant: .6-1, tension: .2-.5, energy: .5-.8
  {
    sleep: 0.66,
    sun: 1,
    exercise: 1,
    social: 1,
    relax: 0.66,
    meals: 0.5,
    work: 0.6
  }, //pleasant: .5-.9, tension: .3-.6, energy: .6-.9
  {
    sleep: 0.33,
    sun: 0.25,
    exercise: 1,
    social: 1,
    relax: 0,
    meals: 0.5,
    work: 0.4
  } //pleasant: .3-.6, tension: .6-.8, energy: .3-.5
];

const sampleMorningEntryfromDB = {
  createdAt: "2019-03-18T15:55:53.515Z",
  exercise: false,
  id: 15,
  meals: 3,
  moodTrackerId: null,
  prediction: null,
  relax: "Usual amount",
  sleep: "4-6",
  social: "Less than usual",
  sun: 2,
  updatedAt: "2019-03-18T15:55:53.515Z",
  work: 4
};

//MAIN TRANSLATE FUNC

const jsonToBrainData = entry => ({
  sleep: sleepTranslator(entry.sleep),
  social: usualTranslator(entry.social),
  meals: zeroToFourTranslator(entry.meals),
  exercise: yesOrNoTranslator(entry.exercise),
  work: zeroToFiveTranslator(entry.work),
  relax: usualTranslator(entry.relax),
  sun: zeroToFourTranslator(entry.sun),
});

// TRANSLATOR FUNCS
const sleepTranslator = sleepStr => {
  if (sleepStr === "0-2") return 0;
  if (sleepStr === "2-4") return 0.25;
  if (sleepStr === "4-6") return 0.5;
  if (sleepStr === "6-8") return 0.75;
  if (sleepStr === "8+") return 1;
};

const usualTranslator = str => {
  if (str === "Not at all" || str === "None at all") return 0;
  if (str === "Less than usual") return 1 / 3;
  if (str === "Usual amount") return 2 / 3;
  if (str === "More than usual") return 1;
};

const zeroToFourTranslator = num => {
  num = Number(num);
  return num / 4;
};

const zeroToFiveTranslator = num => {
  num = Number(num);
  return num / 5;
};

const yesOrNoTranslator = bool => {
  if (bool === true) return 1;
  if (bool === false) return 0;
};

console.log(jsonToBrainData(sampleMorningEntryfromDB))