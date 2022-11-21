function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  if (rideDistance > 2500) {
    return "No can do.";
  } else if(rideDistance <= 400) {
    return "This one is on me!";
  } else if (rideDistance <= 2000) {
    return "That will be twenty bucks.";
  } else if (rideDistance > 2000) {
    return "I will gladly take your thirty bucks.";
  } 

}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case "":
      return "";
      
  }
}