// string
// Collection of chracter
// 1) "", '',``(backtick) used to define paragraph and introduced in es6 version
var sub = "Typescript";
var msg = "Welcome to ".concat(sub, " ");
console.log(msg);
//number
var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x123abc;
var octal = 83;
var binary = 10;
console.log(decimal, double, hexadecimal, octal, binary);
// Boolean
var flag = true;
var flag1 = false;
console.log(flag, flag1);
// union
var my_var = "Hello";
my_var = 100;
console.log(my_var);
//number array
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [60, 70, 80, 90, 100];
//forEach()
//for...of()
arr1.forEach(function (element, index) {
    console.log(element, arr2[index]);
});
var str1 = ["Angular", "React", "VueJS"];
var str2 = ["Oracle", "MySql", "SQLServer"];
str1.forEach(function (element, index) {
    console.log(element, str2[index]);
});
var data = "Store anything";
console.log(data);
//JSON
//any , json is lightweight, json used to transfer the data over the network
// obj
var obj = {
    sub_one: "ReactJS",
    sub_two: "NodeJS",
    sub_three: "MongoDB"
};
console.log(obj);
