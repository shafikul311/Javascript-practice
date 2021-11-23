let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];


// console.log(activities)
// let singleActivity;

for (var i = 0; i < activities.length; i++) {
    let activitiesRow = activities[i]
    console.log(activitiesRow)

    for (let j = 0; j < activitiesRow.length; j++) {
        let singleActivity = activitiesRow[j];
        console.log(singleActivity)
        
    }

}