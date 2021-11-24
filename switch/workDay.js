// working day with case sensitives 
// Switch 

let day= 'Saturday'

switch(day){
    case "Saturday":
    case "Sunday":
    case "Monday": 
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    
        console.log(day, "is Working day.")
        break;
    
    case "friday":
    case "Saturday":
        console.log(day, "is Weekend")
        break;

    default : 
    console.log(day, "is Invalid Day you entire")
    }