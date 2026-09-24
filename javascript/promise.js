function f1() {
    return new Promise((resolve , reject) => { 
    setTimeout(() => {
        console.log("hiiiii!");
        resolve();
    },1000);
})
}
function f2() {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("ravina");
            resolve();
        },2000);
    })

}
f1().then(f2)
    .catch((err) => {
        console.log("Error:",err)
    })
    async function f3() {
        console.log("beniwal");
    }