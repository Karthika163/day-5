//Question no 1:  create a json file and console using loop for, for in, for of
let garden =  [
    {
        "name":"Rose",
        "colour": "red" ,
        "category": "flower"
},
{
    "name":"bittergourd",
    "colour": "green" ,
    "category": "vegetable" 
},
{
    "name":"lemon",
    "colour": "yellow" ,
    "category": "fruit"
}
]
//using for loop
for(var i=0;i<=garden.length;i++)
{
    console.log(garden[i].name,garden[i].colour)
}
//using for in loop
for (let key in garden){
    console.log(garden[key].category);
}
//using for of loop
for (let value of garden){
    console.log(value.name);
}

//Question no 2:  create a resue in a json format
const resume =[{
    "Name":"Hi am karthika.P",
    "DOB" : "My DOB is 15/03/1993",
    "email": "and My Email karthiga350@gmail.com",
    "githublink" : " This is my github link https://github.com/Karthika163?tab=repositories",
    "workingExperiance": " And i was worked in non IT field four years ansd also i won an award of best performer",
    "education": {
        "sslc": "80%",
        "hss": "78%",
        "degeree": "First class" 
 },
       "address": {
    "city":"Salem - 636451",
    "state":"Tamilnadu",
    "country": "India"
 },
 "now": " And also currently doing an cource as a full stack developer in guvi.  and i giving my best in all your expects Thank you,"
}
]
for(let key in resume)
console.log(resume[key].Name,",  ",resume[key].DOB, ",  ",resume[key].email,", ",
resume[key].githublink,", ",resume[key].workingExperiance,", ",resume[key].education,", ",
resume[key].address,", ",
resume[key].now);

