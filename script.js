let form = document.querySelector("form");
let speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

let spRec =new speechRecognition();
// console.log(spRec)
spRec.continuous = true;
spRec.interimResults = true;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    spRec.start();
});

spRec.onresult = (res)=>{
    // console.log(res);
    var text = Array.from(res.results); // make an array to store all data
     allText = text.map((r)=>{  // get a new data with array
        return r[0]             // return data to index 0
    }).map((txt)=>{
        return txt.transcript  // get text from all transcript 
    }).join("");        // make all string 
    console.log(allText);   //
    form[0].value = allText;  //set data to textarea
}
form[2].addEventListener("click",()=>{
    spRec.stop();    // stop recording
})