// objects : An object is a collection of properties, and a property
//          is an association between a name (or key) and a value
// Syntax :
// <keyword from let,const,var> <anyName> = {
//      key: value(array,single element,string,function),
// }
// this : this keyword is used to acces properties of same object inside it
let obj = {
  id: 25,
  name: "Pukhraj Singh",
  channel: "Pukhraj Web",
  giveOwnerAndChannel: function () {
    console.log(this.name + "::" + this.channel);
  },
};
console.log(obj.id); // 1st way to access property of object
obj.giveOwnerAndChannel(); // way to access function of object
console.log(obj["id"]); // 2nd way to access property of object
