export const bmrValue = (height, weight, age, sex) => {
    if (sex === "female") {
      // eslint-disable-next-line prettier/prettier
      return 655 + 4.35 * parseInt(weight) + 4.7 * parseInt(height) - 4.7 * parseInt(age);
    } else {
      // eslint-disable-next-line prettier/prettier
      return (66 + 6.23 * parseInt(weight) + 12.7 * parseInt(height) - 6.8 * parseInt(age));
    }
  }
  
 export const bmrAct = (activity, bmr) => {
    var act;
    switch (activity) {
      case "Sedentary":
        act = 1.2 * bmr;
        break;
      case "Lightly Active":
        act = 1.375 * bmr;
        break;
      case "Moderately Active":
        act = 1.53 * bmr;
        break;
      case "Active":
        act = 1.725 * bmr;
        break;
      case "Very Active":
        act = 1.9 * bmr;
        break;
    }
    return act;
  }
  
  export const bmrMod = (goalFactor) => {
    var bmrMod;
    switch (goalFactor) {
      case "Gain Muscle":
        bmrMod = 1.15;
        break;
      case "Weight Loss":
        bmrMod = 0.8;
        break;
      case "Eat Healthy":
        bmrMod = 1;
        break;
    }
    return bmrMod;
  }