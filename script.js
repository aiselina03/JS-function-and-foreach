// ? Tek ededlerin siyahisi tapir
// function tekededleritap(...params) {
//     let teknum = params[0];
//     for (let i = 0; i < params.length; i++) {
//           if (params[i] % 2 !== 0) {
//                 console.log(params[i])
//           }
//     }
// }
// const params = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// tekededleritap(...params);


// ? Cut ededleri siyahisini tapir
// function cutededleritap(...params) {
//     let cutnum = params[0];
//     for (let i = 0; i < params.length; i++) {
//           if (params[i] % 2 === 0) {
//                 console.log(params[i])
//           }
//     }
// }
// const params = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// cutededleritap(...params);


// ? Tek ededlerin sayini tapir
// function tekededlerinsayinitap(...params) {
//     let count = 0;
//     for (let i = 0; i < params.length; i++) {
//           if (params[i] % 2 !== 0) {
//                 count++;
//           }
//     }
//     return count
// }
// console.log(tekededlerinsayinitap(1, 2, 3, 4, 5, 6, 7, 8, 9));


// ? Cut ededlerin sayini tapir
// function cutededlerinsayinitap(...params) {
//     let count = 0;
//     for (let i = 0; i < params.length; i++) {
//           if (params[i] % 2 === 0) {
//                 count++;
//           }
//     }
//     return count
// }
// console.log(cutededlerinsayinitap(1, 2, 3, 4, 5, 6, 7, 8, 9));



// ?  1-den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)
// let sumyuz = 0;
// let summin = 0;
// for (let i = 0; i < 100; i++) {
//     if (i % 11 === 0) {
//         sumyuz += i;
//     }
// } console.log(sumyuz);

// for (let i = 0; i < 1000; i++) {
//     if (i % 111 === 0) {
//         summin += i;
//     }
// } console.log(summin);

// console.log(sumyuz + summin);

// ?  Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.
// let num = 0;
// const arr = [12, 24, 93, 29, 72, 1]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         if (num < arr[i]) {
//             num = arr[i];
//         }
//     }
// } console.log(num);

// ? Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.
// const arr = [12, 24, 93, 3, 29, 72, 7,]
// let num = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         if (num > arr[i]) {
//             num = i;
//         }
//     }
// } console.log(num);


// ? Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin.
// const arr = [12, 24, 93, 3, 29, 72, 7,]
// let minnum = arr[0];
// let maxnum = arr[0];
// let edediorta = 0;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     edediorta = sum / arr.length
//     if (minnum > arr[i]) {
//         minnum = arr[i];
//     }
//     else if (maxnum < arr[i]) {
//         maxnum = arr[i];
//     }
//     else if ((minnum + maxnum) > edediorta) {
//         console.log("boyukdur");
//     }
//     else {
//         console.log("kicikdir");
//     }
// }


// ? 12. Verilmis ededi reqemlerine ayiran proqram tertib edin
// function reqemleriayir(number) {
//     number= number.toString()
//     const arr=[]
//     for (let i = 0; i < number.length; i++) {
//        arr.push(number[i])
//     }
//     return arr
// }
// console.log(reqemleriayir(34566));

//? 13. Ededin reqemlerinden en boyuyunu tap
// function reqemboyuktap(text) {
//   text = text.toString();
//   text = text.split("");
//   let max = text[0];
//   for (let i = 0; i < text.length; i++) {
//     if (max < text[i]) {
//       max = text[i];
//     }
//   }
//   return max;
// }
// console.log(reqemboyuktap(12345));

//? 14. Ededin reqemlerinden en kiciyini tap
// function reqemkiciktap(text) {
//   text = text.toString();
//   text = text.split("");
//   let min = text[0];
//   for (let i = 0; i < text.length; i++) {
//     if (min > text[i]) {
//       min = text[i];
//     }
//   }
//   return min;
// }
// console.log(reqemkiciktap(12345));

//? 15. Ededin reqemlerinin cemi hasili ededi ortasini tapan proqram
// function tap(number) {
//   number = number.toString();
//   let sum = 0;
//   let hasil = 1;
//   let arr = [];
//   for (let i = 0; i < number.length; i++) {
//     sum += +number[i];
//     hasil *= number[i];
//     edediorta = sum / number.length;
//   }
//   arr.push(sum, hasil, edediorta);
//   return arr
// }
// console.log(tap(12345));

//? 16. Ededin butun bolenlerini tapan proqram
// function bolenlerinitap(eded) {
//     const arrbolenler=[];
//     for (let i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             arrbolenler.push(i)
//         }
//     }
//     return arrbolenler;
// }
// console.log(bolenlerinitap(12));

//? 17. Ededin butun bolenlerinin sayini tapan proqram
// function sayitap(eded) {
//     let count = 0
//     for (let i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             count++
//         }
//     }
//     return count
// }
// console.log(sayitap(12));

//? 18. Ededin butun bolenlerinin cemini ve hasilini tapan proqram
// function sumhasiltap(eded) {
//     let sum = 0
//     let hasil = 1
//     let arr = []
//     for (let i = 0; i <= eded; i++) {
//         if (eded % i === 0) {
//             sum += i
//             hasil *= i
//         }
//     }
//     arr.push(sum, hasil)
//     return arr
// }
// console.log(sumhasiltap(12));

//? 19 21 23 24 25 yoxdu

//?20. Ededin sade ve ya murekkeb oldugunu tapan proqram
// function sademurekkebtap(number) {
//     for (let i = 2; i < Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return console.log("murekkebdir");
//         }

//     }
//     return console.log("sadedir");
// }
// console.log(sademurekkebtap(13));

//? Esas usul
// function isPrime(num) {
//     for (let i = 2; i*i <= num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(25));

//? 22. Polindrom eded olub  olmadigini yoxlayan proqram
// const num = 1224342217
// const arr = [11, 121, 9999, 123, 95, 8888]

// function checkPol(num) {
//     num = num.toString()
//     for (let i = 0; i < num.length / 2; i++) {
//         if (num[i] !== num[num.length - 1 - i]) {
//             return "polindrom  deyil :" + num
//         }
//     }
//     return `polindromdur`
// }

// let countOfPolindrom = 0
// for (let i = 0; i < arr.length; i++) {
//     let polCase = checkPol(arr[i])
//     polCase === "polindromdur" ?  countOfPolindrom++ : null
//      console.log(checkPol(arr[i]));

// }
// console.log("polindrom",countOfPolindrom);

//? 26. Massivin tek elementlerinin indexsini ekrana cixaran proqram
// function indextap(...params) {
//     const arr=[]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2!==0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(indextap(11,56,35,71,22,67)); //0 2 3 5

//? foreach
// const arr=[11,56,35,71,22,67]
// arr.forEach((x, i) => x%2!==0 ? console.log(i): null)

//? 27. Massivin cut elementlerinin indexsini ekrana cixaran proqram
// function indextap(...params) {
//     const arr=[]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2===0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(indextap(11,56,35,71,22,67)); // 1 4

//? foreach
// const arr=[11,56,35,71,22,67]
// arr.forEach((x, i) => x%2===0 ? console.log(i): null)

//? 28. Massivin tek indeksli elementlerini ekrana cixaran proqram
// function elementtap(...params) {
//     const arr = []
//     for (let i = 0; i < params.length; i++) {
//         if (i % 2 !== 0) {
//             arr.push(params[i])
//         }
//     }
//     return arr
// }
// console.log(elementtap(78, 44, 67, 22, 54)); //44 22

//? foreach
// const arr=[11,56,35,71,22,67]
// arr.forEach((x, i) => i%2!==0 ? console.log(x): null)

//? 29. Massivin cut  indeksli elementlerini ekrana cixaran proqram
// function elementtap(...params) {
//     const arr = []
//     for (let i = 0; i < params.length; i++) {  // 0i cut goturmesin deye i=1 yazmaq lazimdir
//         if (i % 2 === 0) {
//              arr.push(params[i])
//         }
//     }
//     return arr
// }
// console.log(elementtap(78, 44, 67, 22, 54)); //78 67 54

//? foreach
// const arr=[11,56,35,71,22,67]
// arr.forEach((x, i) => i%2===0 ? console.log(x): null)

//? 30. Massivin en boyuk elementini ekrana cixaran proqram
// function maxtap(...params) {
//     let maxnum = params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (maxnum < params[i]) {
//             maxnum = params[i]
//         }
//     }
//     return maxnum
// }
// console.log(maxtap(12, 2, 45, 78, 14, 99));

//? foreach
// const arr=[11,56,35,71,22,67]
// let max=arr[0]
// arr.forEach((x, i,arr) => max<x ? max=x : null)
// console.log(max);

//? 31. Massivin en kicik elementini ekrana cixaran proqram
// function mintap(...params) {
//     let minnum = params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (minnum > params[i]) {
//             minnum = params[i]
//         }
//     }
//     return minnum
// }
// console.log(mintap(12, 2, 45, 78, 14, 99));

//? foreach
// const arr=[11,56,35,71,22,67]
// let min=arr[0]
// arr.forEach((x, i,arr) => min>x ? min=x : null)
// console.log(min);

//? 32. Massivin cut elementlerinden en boyuyunu ekrana cixaran proqram  
// function cutmaxtap(...params) {
//     let maxcutnum = params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] % 2 === 0) {
//             if (maxcutnum < params[i]) {
//                 maxcutnum = params[i]
//             }
//         }
//     }
//     return maxcutnum
// }
// console.log(cutmaxtap(11, 56, 35, 14, 71, 22, 67)); // 56

//? foreach
// const arr=[11,56,35,71,64,22,67]
// let max=arr[0]
// arr.forEach((x,i,arr)=> x%2===0 && max<x ? max=x : null)
// console.log(max);

//? 33. Massivin cut elementlerinden en kiciyini ekrana cixaran proqram
// function cutmintap(...params) {
//   let mincutnum = params[1];
//   for (let i = 0; i < params.length; i++) {
//     if (params[i] % 2 === 0) {
//       if (mincutnum > params[i]) {
//         mincutnum = params[i];
//       }
//     }
//   }

//   return mincutnum;
// }
// console.log(cutmintap(11, 56, 35, 14, 71, 67));

//? foreach
// const arr=[11,56,35,71,64,22,67]
// let min=arr[1];
// arr.forEach((x)=>x%2===0 && min>x? min =x :null)
// console.log(min);

//? 34. Massivin tek elementlerinden en boyuyunu ekrana cixaran proqram
// function tekmaxtap(...params) {
//     let maxteknum = params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] % 2 !== 0) {
//             if (maxteknum < params[i]) {
//                 maxteknum = params[i]
//             }
//         }
//     }
//     return maxteknum
// }
// console.log(tekmaxtap(11, 56, 35, 14, 71, 22, 67)); // 71

//? foreach
// const arr=[11,56,35,71,64,22,67,93]
// let max=arr[0]
// arr.forEach((x)=> x%2!==0 && max<x ? max=x : null)
// console.log(max);

//? 35. Massivin tek elementlerinden en kiciyini ekrana cixaran proqram
// function tekmintap(...params) {
//     let minteknum = params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] % 2 !== 0) {
//             if (minteknum > params[i]) {
//                 minteknum = params[i]
//             }
//         }
//     }
//     return minteknum
// }
// console.log(tekmintap(11, 56, 35, 14, 71, 22,3, 67)); // 11

//? foreach
// const arr=[11,56,35,71,3,64,22,67,93]
// let min=arr[0]
// arr.forEach((x)=> x%2!==0 && min>x ? min=x : null)
// console.log(min);

//? 36. Massivin en kicik elementinin indeksini ekrana cixaran proqram
// function indextap(...params) {
//     let minnum = params[0];
//     let index =0;
//     for (let i = 0; i < params.length; i++) {
//         if (minnum > params[i]) {
//             minnum = params[i];
//             index=i;
//         }
//     }
//     return index
// }
// console.log(indextap(5,77,99,12,23,34,1,5));

//? foreach
// const arr=[11,3,64,2,22,67,93]
// let min=arr[0]
// let index=0
// arr.forEach((x,i)=>{
//     if (min>x){
//         min=x
//         index=i;
//     }
// })
// console.log(index);

//? 37. Massivin en boyuk elementinin indeksini ekrana cixaran proqram
// function indextap(...params) {
//     let maxnum = params[0];
//     let index =0;
//     for (let i = 0; i < params.length; i++) {
//         if (maxnum < params[i]) {
//             maxnum = params[i];
//             index=i;
//         }
//     }
//     return index
// }
// console.log(indextap(5,77,99,12,23,34,5));

//?foreach
// const arr=[11,3,64,2,22,67,93]
// let max=arr[0]
// let index=0
// arr.forEach((x,i)=>{
//     if (max<x){
//         max=x
//         index=i;
//     }
// })
// console.log(index);

//? 38. Massivin max elementlerinin sayi
// function maxcounttap(...params) {
//   let maxnum = params[0];
//   let count = 0;
//   for (let i = 0; i < params.length; i++) {
//     if (maxnum < params[i]) {
//       maxnum = params[i];
//     } else if ((maxnum === params[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(maxcounttap(1, 77, 23, 77, 6, 2, 9, 77));

//?foreach
// const arr = [11, 3, 64, 2, 22, 93, 67, 93];
// let max = arr[0];
// let count = 0;
// arr.forEach((x) => {
//   if (max < x) {
//     max = x;
//   } else if (max == x) {
//     count++;
//   }
// });
// console.log(max, count);

//? 39. Massivin min elementlerinin sayi
// function mincounttap(...params) {
//   let minnum = params[0];
//   let count = 0;
//   for (let i = 0; i < params.length; i++) {
//     if (minnum > params[i]) {
//       minnum = params[i];
//     } else if ((minnum === params[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(mincounttap(1,23, 77,1, 6, 2,1, 9, 77));

//?foreach
// const arr = [11, 2, 64, 2, 22, 2, 67, 93, 2];
// let min = arr[0];
// let count = 0;
// arr.forEach((x) => {
//   if (min > x) {
//     min = x;
//   } else if (min == x) {
//     count++;
//   }
// });
// console.log(min, count);

//? 40. Massivin maxsimum elementi ile birinci elementin yerini deyis
//? foreach
// const arr = [12, 23, 34, 45, 15, 23];
// let max = arr[0];
// let maxindex = 0;
// arr.forEach((x, i) => {
//   if (max < x) {
//     max = x;
//     maxindex = i;
//   }
// });
// firstelement = arr[0];
// arr[0] = arr[maxindex];
// arr[maxindex] = firstelement;
// console.log(arr);

//? 41. Massivin minimum elementi ile birinci elementin yerini deyis
//? foreach
// const arr = [12, 23, 34, 5, 15, 23];
// let min = arr[0];
// let minindex = 0;
// arr.forEach((x, i) => {
//   if (min > x) {
//     min = x;
//     minindex = i;
//   }
// });
// firstelement = arr[0];
// arr[0] = arr[minindex];
// arr[minindex] = firstelement;
// console.log(arr);



//? basqalari
// ? 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.
// function indextap(...params) {
//     let index = 0
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] === 45) {
//             index = i
//         }
//     }
//     return index
// }
// console.log(indextap(12, 32, 44, 56, 45));

// ? 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.
// function tekrarinsayintap(...params) {
//     let tekrarcount = 0
//     let num=3
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]===num) {
//            tekrarcount++
//         }
//     }
//     return tekrarcount
// }
// console.log(tekrarinsayintap(3,2,1,4,3,1,5,6,9,3,2,52,3,2));

// ? 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function.
// function sumtap(...params) {
//     let sum = 0
//     let max = params[0]
//     let min = params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (max < params[i]) {
//             max = params[i]
//         }
//         if (min > params[i]) {
//             min = params[i]
//         }
//         sum += params[i]
//     }
//     return sum - max - min
// }
// console.log(sumtap(2, 1, 3, 4, 6));

// ? 4. Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function. 
// ?(misalcun daxil edilen eded 475 olarsa, geriye 547 qaytarsin) 


