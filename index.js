function scuberGreetingForFeet(ride){
  // Write your code here!
  //let ride = 3000  ;
  let result;
 
  if (ride <=400) {
    result ='This one is on me!';}
    
  
  
  else if (ride>400 && ride<=2000){
    result=  'That will be twenty bucks.';
  }
   else if (ride>2000 && ride<2500){
  result= 'I will gladly take your thirty bucks.';
   }

  else if(ride> 2500){
    result= 'No can do.';
  }
  return result ;
}

function ternaryCheckCity(city){
  let resultCity ;
  // Write your code here!
  resultCity = city=='NYC' ? 'Ok, sounds good.' : 'No go.';
  return resultCity ;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous' : return 'Thank you so much.';
      
      break;

  case 'not as generous' : return 'Thank you.' ;
  break;
    default:
      return 'Bye.';
      break;
  }
}