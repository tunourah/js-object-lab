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