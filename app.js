/* ============Dummy Text Start=========== */
let dummyMainText = document.querySelector(".dummyMainText").innerText;
dummyMainText = dummyMainText.split(" ");
// Main text lenght
let dummyMainTextSize = dummyMainText.length;
/* ============Dummy Text End============= */
let dummyText = document.querySelector("#dummyText");
let generate = document.querySelector("#generate");
let dummyTextRes = document.querySelector("#dummyTextRes");
let copyToBoard = document.querySelector("#copy");


dummyText.value="";
dummyTextRes.value="";

dummyText.addEventListener("input", ()=>{
    //Reducing all whitespace in beginning and end
    let dummyTextValue = dummyText.value.trim();
    // Converting input in number because input always return a string
    dummyTextValue = Number(dummyTextValue);
    // If we enter a string insted of number it will show error!!!
    if(isNaN(dummyTextValue)){
        dummyText.classList.add("error");
    }else{
        dummyText.classList.remove("error");
    }
    // starting point of dummy text
    let textStartPoin = Math.round((Math.random()*dummyMainTextSize));
    if(dummyTextValue>(dummyMainTextSize-textStartPoin)){
        textStartPoin = dummyMainTextSize - dummyTextValue;
    }else{
        textStartPoin = dummyTextValue;
    }
    // ending point of dummy text
    let textEndPoint = textStartPoin + dummyTextValue;
    let generateWord = ()=>{
        dummyTextRes.value = (dummyMainText.slice(textStartPoin, textEndPoint)).join(" ").trim();
        copyToBoard.innerText="Copy To Clipboard";
    }
    // For click Event | if you click in button then work it
    generate.addEventListener("click", generateWord);
    // For keyboard Event | if you "Enter" in input box then it also will work
    dummyText.addEventListener("keydown", (event)=>{
        if(event.key=="Enter"){
            generateWord();
        }
    });
})
copyToBoard.innerText="Copy To Clipboard";
copyToBoard.addEventListener("click", ()=>{
    dummyTextRes.select();
    dummyTextRes.setSelectionRange(0, 9999999);
    navigator.clipboard.writeText(dummyTextRes.value);
    copyToBoard.innerText="Text Copied";
})
