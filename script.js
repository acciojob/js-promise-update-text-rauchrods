//your JS code here. If required.
let prom = new Promise((resolve, reject) => {
    setTimeout(()=>{
        
        resolve("Hello, world!");
    },1000)
   
});

prom.then((result) => {
    document.querySelector("#output").innerText = result;
}).catch((err) => {
    
});
