// ## Array Intersection
//
// _Idea from_ _[lodash _.intersection](https://lodash.com/docs/4.17.15#intersection)_
//
// Given two arrays, find the item(s) that are present in both.
//
// ```
// `let a = ['A', 'B', 'Z']
// let b = ['Z', 'X', 'Y']
//
// intersection(a, b)
// _// => ['Z']_`
//
// ```
//
// To get it working, don't worry about efficiency. Later we'll learn about specialized data structures that make this simpler/efficient.

function intersection(a, b){
  let arry=[];

  for(let i=0;i<a.length;i++){
    for(let x=0;x<b.length;x++){

    if(a[i]===b[x]){
      if(arry.indexOf(a[i])<0){
        arry.push(a[i])
       }
     }
   }
 }

  return arry;
}

module.exports = intersection;
let a = ['A', 'B', 'Z'];
let b = ['Z', 'X', 'Y'];

console.log(intersection(a, b))