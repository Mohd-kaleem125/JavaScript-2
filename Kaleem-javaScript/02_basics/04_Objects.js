// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Mohd Kaleem"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "kaleem@gamil.com" ,
    fullname: {
        userfullname: {
            firstname: "Mohd",
            lastname: "Kaleem"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}


//const obj4 = (obj1 , obj2);

const obj4 = {...obj1 , ...obj2 , ...obj3}
//console.log(obj4);

const users = [
    {
        id: 1,
        email: "kaleem@gmail.com" 
    },

    {
        id: 1,
        email: "kaleem@gmail.com"
    },
    {
        id: 1,
        email: "kaleem@gmail.com"
    },

]



users[1].email

//console.log(users)

//console.log(tinderUser)

// Method


//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    course: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor
//console.log(course);


// object Destructuring

const {courseInstructor: instructor} = course

const {course: crs} = course

//console.log(crs);

//console.log(instructor);

