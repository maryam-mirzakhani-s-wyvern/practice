//Note: this is based on translating an object made from the CSV input.
//It will need to be adapted for the database entries format.
//Also we need to ensure this is consistent with the inputs from experiment2.js



//MAIN TRANSLATE FUNC

const jsonToBrainData = entriesArr => {
    const mapped = entriesArr.map(entry => ({
      time: new Date(entry.Timestamp),
      sleep: sleepTranslator(entry["1. How much sleep did you get?"]),
      social: usualTranslator(entry["2. How much did you socialize?"]),
      meals: zeroToFourTranslator(entry["3. How many meals did you eat?"]),
      exercise: yesOrNoTranslator(entry["4. Did you exercise?"]),
      work: zeroToFiveTtranslator(
        entry["5. What is your outlook on work today?"]
      ),
      relax: usualTranslator(entry["6. How much relaxation time did you have?"]),
      sun: zeroToFourTranslator(entry["7. How sunny was it today?"]),
      feeling: entry["What would you say was your dominant mood for the day?"],
      journal: entry["Can you journal in some thoughts/comments for the day?"]
    }));
    console.log(mapped)
    return mapped;
  };
  
  // TRANSLATOR FUNCS
  const sleepTranslator = sleepStr => {
    if (sleepStr === "0 - 2 hours") return 0;
    if (sleepStr === "2 - 4 hours") return 0.25;
    if (sleepStr === "4 - 6 hours") return 0.5;
    if (sleepStr === "6 - 8 hours") return 0.75;
    if (sleepStr === "8+ hours") return 1;
  };
  
  const usualTranslator = str => {
    if (str === "Not at all" || str === "None at all") return 0;
    if (str === "Less than usual") return 1 / 3;
    if (str === "The usual amount") return 2 / 3;
    if (str === "More than usual") return 1;
  };
  
  const zeroToFourTranslator = num => {
    num = Number(num);
    return num / 4;
  };
  
  const zeroToFiveTtranslator = num => {
    num = Number(num);
    return num / 5;
  };
  
  const yesOrNoTranslator = str => {
    if (str === "Yes") return 1;
    if (str === "No") return 0;
  };