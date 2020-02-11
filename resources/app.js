// Load event Listeners
document.addEventListener('click', displayResult);
// document.querySelector('#reset').addEventListener('click', clear);

function displayResult(e){
  if (e.target.id === 'calculate'){

  
  document.querySelector('#display-result').innerHTML= (calculateTip());
  }
}
function calculateTip(){
  let tip=0;
  let amount = document.querySelector('#amount').value;
  let rating = document.querySelector('#rating').value;
  let people = document.querySelector('#people').value;
 
  if (isNaN(amount)){
    alert("The value is Not a number")
    } else if (amount === ""){
      alert("The amount spent is empty");
    
    }
    else if (isNaN(people)){
    alert("Error, Please input a number")
    
  }else if(rating === ""){
    alert("Please select a Value for rating")
  
  }else if ((people === "")){
    tip = (((rating/100)* amount));
  } else {tip = (((rating/100)* amount))/people;}
 

  return tip;
}

// function calculateTip(){

  
//   let amount = document.querySelector('#amount').value;
//  let rating = document.querySelector('#rating').value;
// let people = document.querySelector('#people').value;
 
 
  
// }



