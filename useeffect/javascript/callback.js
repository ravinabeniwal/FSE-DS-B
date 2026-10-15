function sum(a,b){
    return a+b;
}
function sumWithMsg(clbk,msg){
const result=clbk(20,30);
const frerult="hi "+ msg +"your  add is ="+result;
console.log(frerult);
}
sumWithMsg(sum,"ms. ravina  : ");