// 30 minutes max
// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentInfo(students) {
    for (var key in students) {
        console.log('key is ', key, students[key]);
      }
}

// Challenge 2 
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function getEmployeeInfo(obj) {
    for (var key in obj) {
        arr = obj[key]
        console.log(key)
        for (let i = 0; i < arr.length; i++) {
            let length = (arr[i].first_name + arr[i].last_name).length
            console.log(`${i + 1} - ${arr[i].last_name}, ${arr[i].first_name} - ${length}`)
        }
    }
}

studentInfo(students)

getWorkerInfo(users)