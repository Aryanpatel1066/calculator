// console.log("hello")

let btn = document.querySelectorAll("button");
let inputScreen = document.querySelector('#input');
 let cureentInput = '';
// console.log(inputScreen)

//traverse the button
for(delBtn of btn){
     delBtn.addEventListener("click",function(){
       console.log("button was click",this.value);
       cureentInput +=this.value;
        inputScreen.innerText=cureentInput;       
    });
}
 // clear the screen
let ceBtn = document.querySelector('#clear');
console.log(ceBtn);
ceBtn.addEventListener("click",function(){
    inputScreen.innerText=" ";
    cureentInput=" "
})

// calculating result

let calculation = document.querySelector('#calculation');
console.log(calculation)

calculation.addEventListener("click",()=>{
  try{
    cureentInput=eval(cureentInput);
     inputScreen.innerText=cureentInput;
  }
  
 catch(e){
  inputScreen.innerText="Error"
 }
})

 