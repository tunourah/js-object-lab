const user = {
    name: "nora",
    email: "nourahaltuaim@gmail.com",
    id: 1,
    avalable: false,
    check : function ()  {
        if (this.avalable === true) {
            return "the user is avalable";
        } else {
            return "the user is not avalable";
        }
     
    }, 

    address: {
        street: "1234",
        city: {
            name: "Aldilam",
            zip: 12345,
        },
        country: "KSA",
    },
    skills: ["html", "css", "js"],

};
//1
console.log("print the object user :", user);

//2 
console.log("print the user name :", user.name);

//3
user.id = 2;
console.log("print the user id after update :", user.id);

//4
delete user.email;
console.log("print the user email after delete :", user);

//5
user.avalable = true;
console.log("print the user avalable after update  by callling the function:",  user.check());

//6
console.log("print the user address :", user.address);

//7
console.log("print the user city name :", user.address.city.name);

//8
console.log("print the user skills index 2 :", user.skills[2]);

//9
console.log("print the user skills  :", user.skills.join(" , "));




// ---------------------------------------Lab 2--------------------------------------------


characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

console.log("Get first name that has blue eyes :"
, characters.find((element) => element.eye_color === "blue").name);

console.log("Get first gender that is his mass is over 50 :" , characters.find((element) => element.mass > 50).gender);

console.log("Get characters with height less than 200", characters.filter((element) => element.height < 200));

console.log("Get all male characters", characters.filter((element) => element.gender === "male"));

console.log("Get array of all names only :", characters.map((element) => element.name));

console.log("Get array of all heights only:", characters.map((element) => element.height));

console.log(" Sort by mass (low to high) :", characters.sort((a, b) => a.mass - b.mass));

console.log("Sort by height (high to low) :", characters.sort((a, b) => b.height - a.height));

console.log("Does every character have mass more than 40?", characters.every((element) => element.mass > 40));

console.log("-Is every character shorter than 200? ", characters.every((element) => element.height < 200));

console.log("Is there at least one character with blue eyes?", characters.some((element) => element.eye_color === "blue"));

console.log("Is there at least one character taller than 210?", characters.some((element) => element.height > 210));