let day = 5;
let dayNames;

switch (day){
    case 1:
        dayNames = 'sunday';
        break;
    case 2:
        dayNames = 'Monday';
        break;
    case 3:
        dayNames = 'Tuesday';
        break;
    case 4:
        dayNames = 'Wednesday';
        break;
    case 5:
        dayNames = 'Thursday';
        break;

    case 6:
        dayNames = 'Friday';
        break;
    case 7:
        dayNames = 'Saturday';
    default:
        dayNames = 'Invalid Day'

}

console.log(dayNames)