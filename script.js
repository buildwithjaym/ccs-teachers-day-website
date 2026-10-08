const teacherVault = {


    "1259": {

        name: "Ma'am Matheen"

    },


    "4821": {

        name: "Teacher Two"

    },


    "7734": {

        name: "Teacher Three"

    }


};




const verifyButton =
document.getElementById("verifyButton");



verifyButton.addEventListener(
"click",
function(){



const input =
document.getElementById("accessKey");



const code =
input.value.trim();




const teacher =
teacherVault[code];




if(teacher){



const teacherData = {


    code: code,

    name: teacher.name


};




sessionStorage.setItem(

"teacher",

JSON.stringify(teacherData)

);





console.log(
"Saved:",
sessionStorage.getItem("teacher")
);




window.location.href =
"teacher.html";



}

else{


document.getElementById(
"errorMessage"
).textContent =

"Invalid access key. Please try again.";


}



});
