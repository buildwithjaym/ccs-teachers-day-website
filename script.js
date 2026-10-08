document.addEventListener(
"DOMContentLoaded",
()=>{


/* =====================================
   TEACHER DATABASE
===================================== */


const teacherVault = {


    "1259": {

        name:
        "Ma'am Matheen",

        image:
        "images/teachers/matheen.jpg",

        music:
        "assets/music/matheen.mp3",

        message:
`Thank you for your patience,
guidance, and kindness.

You taught us more than lessons.

You helped us believe in ourselves
and become better individuals.

Your dedication and passion
will always be remembered.

Happy Teachers' Day.`

    },




    "4821": {

        name:
        "Ma'am Jolo",

        image:
        "images/teachers/jolo.jpg",

        music:
        "assets/music/jolo.mp3",

        message:
`Thank you for inspiring us
and guiding us throughout our journey.

Your lessons, encouragement,
and support will always stay with us.

You helped make learning meaningful.

Happy Teachers' Day.`

    },





    "7734": {

        name:
        "Ma'am Abah",

        image:
        "images/teachers/abah.jpg",

        music:
        "assets/music/abah.mp3",

        message:
`Your kindness and wisdom
have left a lasting mark on us.

Thank you for believing in your students
and guiding us with patience and care.

Your dedication will always be remembered.

Happy Teachers' Day.`

    },






    "4680": {

        name:
        "Ma'am Buddin",

        image:
        "images/teachers/faujiyah.jpg",

        music:
        "assets/music/buddin.mp3",

        message:
`Thank you for the knowledge,
support, and inspiration
you shared with us.

You made learning meaningful
and helped shape who we are today.

We appreciate everything you have done.

Happy Teachers' Day.`

    }



};












const verifyButton =
document.getElementById(
"verifyButton"
);



const input =
document.getElementById(
"accessKey"
);



const errorMessage =
document.getElementById(
"errorMessage"
);









/* =====================================
   VERIFY FUNCTION
===================================== */


function verifyTeacher(){



const code =
input.value.trim();




errorMessage.textContent="";





if(code === ""){


errorMessage.textContent =
"Please enter your access key.";


return;


}







const teacher =
teacherVault[code];






if(!teacher){



errorMessage.textContent =
"Invalid access key. Please try again.";



input.value="";



return;


}









/*
    Clear previous teacher
*/


sessionStorage.removeItem(
"teacher"
);








/*
    Save current teacher
*/


const teacherData = {


code:code,


name:teacher.name,


image:teacher.image,


music:teacher.music,


message:teacher.message


};







sessionStorage.setItem(

"teacher",

JSON.stringify(
teacherData
)

);







console.log(
"Teacher unlocked:",
teacherData
);






window.location.href =
"teacher.html";



}









/* =====================================
   BUTTON CLICK
===================================== */


verifyButton.addEventListener(
"click",
verifyTeacher
);








/* =====================================
   ENTER KEY SUPPORT
===================================== */


input.addEventListener(
"keydown",
(event)=>{


if(event.key==="Enter"){

verifyTeacher();

}


});




});