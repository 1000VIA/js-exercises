// var temp = 'hola'
// for (var i = 0; i < temp.length; i++) {
//     //console.log(temp.charAt(i));

// }

// var arr = ['h', 'o', 'l', 'a']
// for (var i = 0; i < temp.length; i++) {
//     // console.log(arr[i]);
// }
// arr.push('mundo');
// console.log(arr);

// arr.push('');
// arr.push('m');
// arr.push('u');
// arr.push('n');
// arr.push('d');
// arr.push('o');

// console.log(arr);

// let arr = [];

// arr['123a8$'] = 5;

// arr[0] = 2;

// arr.unshift(3);
// arr[2] = 8;
// arr['Juan'] = 9;

// for (var i in arr) {
//     // console.log(i);

// }
// for (var i in arr) {
//     console.log(arr[i]);
// }

let arr = [];
arr['Diana'] = {
    edad: 26,
    dia: 7,
    mes: 10,
    cc: 12345678
}

console.log(arr['Diana'].cc);


arr['Pedro'] = {
    edad: 32
}

console.log(arr['Pedro'].cc);

let x = ['hola'].pop()[3];

console.log(x);

let y = [];
y[3] = [1, 2, 3, 4];
console.log(y[3][2]);

y.pop();

console.log(y.length);
console.log(y[2]);

let temp = 'hola';
console.log(temp);