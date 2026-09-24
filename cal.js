 console.log("Hello") ;

 function calculator() {
  let num1=Number(document.getElementById("num1").value)
    let num2=Number(document.getElementById("num2").value)

  let op=document.getElementById("operation").value ;
   let isfault=Math.random()<0.1;
  let result;
  
  if(isfault){
    if(op==="+"){
      result= num1-num2 ;
    }
    else if(op==="-"){
      result= num1*num2 ;
    }
       else if(op==="*"){
      result= num1/num2 ;
    }
         else if(op==="/"){
      result=num1+num2 ;
    }
    console.log("fault")
  }
  
  else{
         if(op==="+"){
      result= num1+num2 ;
    }
        else if(op==="-"){
      result= num1-num2 ;
    }
        else if(op==="*"){
      result= num1*num2 ;
    }
        else if(op==="/"){
      result= num1/num2 ;
    }
    
    console.log("right")
  }
  console.log("allrihgt")
  
  document.getElementById("outputArea").innerText = "Your answer: " +result;
}



 