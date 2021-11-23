let year = 2021;

if (year% 400 === 0 || year% 100 !== 0 && year% 4 === 0){
    console.log(year, "is Leap Year");

}else{
    console.log(year, 'Year is Not Leap Year')
}