
// function repeatStr(n, s) {
//     result = "";
//   for (let i = 0; i <= n; i +=1) {
//     result += s;
//   }
//     return result;
// }
// console.log(repeatStr(5, "F"));
// console.log(repeatStr(20, "FaF"));



// const a = [9, 10, 40, 60, -10, 6];
// console.log(Math.max(...a));
// const b = [...a];
// console.log(b);



// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(user.stats.likes); // 1308

// array = [0, 1, 8, 5, 9, 4];
// const [b, , , ,c, d] = array;
// console.log(b, c, d);


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potionName === potion.name) {
        this.potions.splice(this.potions.indexOf(potion), 1);
        return;
      }
    }

  return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return;
      }
    }

      return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

console.table(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
atTheOldToad.addPotion({ name: "Power potion", price: 270 });
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
atTheOldToad.updatePotionName("Invisibility", "Invulnerability potion")
console.table(atTheOldToad.getPotions());
