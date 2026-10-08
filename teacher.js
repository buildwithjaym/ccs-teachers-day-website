document.addEventListener(
"DOMContentLoaded",
()=>{


/* =====================================
   GET TEACHER DATA
===================================== */


const savedTeacher =
sessionStorage.getItem("teacher");



if(!savedTeacher){


window.location.href="index.html";


return;


}



let teacher;



try{


teacher =
JSON.parse(savedTeacher);



}catch(error){



console.error(
"Teacher data error:",
error
);



sessionStorage.removeItem(
"teacher"
);



window.location.href="index.html";



return;


}







/* =====================================
   ELEMENTS
===================================== */


const teacherImage =
document.getElementById(
"teacherImage"
);



const teacherName =
document.getElementById(
"teacherName"
);



const letterName =
document.getElementById(
"letterName"
);



const message =
document.getElementById(
"message"
);



const music =
document.getElementById(
"teacherMusic"
);



const envelope =
document.getElementById(
"envelope"
);



const openButton =
document.getElementById(
"openLetter"
);



const closeButton =
document.getElementById(
"closeLetter"
);



const letterSection =
document.querySelector(
".letter-section"
);








/* =====================================
   LOAD TEACHER INFORMATION
===================================== */


teacherImage.src =
teacher.image;


teacherImage.alt =
teacher.name;



teacherName.textContent =
teacher.name;



letterName.textContent =
teacher.name;



music.src =
teacher.music;


music.load();









/* =====================================
   STATES
===================================== */


let opened=false;


let typingTimer=null;


let heartsCreated=false;









/* =====================================
   OPEN LETTER
===================================== */


openButton.addEventListener(
"click",
()=>{


if(opened)
return;



opened=true;




document.body.classList.add(
"letter-open"
);




letterSection.classList.add(
"focus-letter"
);




envelope.classList.add(
"open"
);






music.volume=.3;




music.play()
.catch(()=>{


console.log(
"Music waiting for permission"
);


});







typeMessage(
teacher.message
);







if(!heartsCreated){


createHearts();


heartsCreated=true;


}





});












/* =====================================
   CLOSE LETTER
===================================== */


closeButton.addEventListener(
"click",
()=>{


if(!opened)
return;




opened=false;




clearInterval(
typingTimer
);





music.pause();


music.currentTime=0;





letterSection.classList.add(
"closing"
);





setTimeout(
()=>{


letterSection.classList.remove(
"focus-letter",
"closing"
);




document.body.classList.remove(
"letter-open"
);




envelope.classList.remove(
"open"
);




message.innerHTML="";



},
800
);




});









/* =====================================
   TYPEWRITER EFFECT
===================================== */


function typeMessage(text){


message.innerHTML="";



let index=0;





const cursor =
document.createElement(
"span"
);



cursor.className =
"typing-cursor";



message.appendChild(
cursor
);





clearInterval(
typingTimer
);






typingTimer =
setInterval(
()=>{


if(index >= text.length){



clearInterval(
typingTimer
);



setTimeout(
()=>{


cursor.remove();


},
1000
);



return;


}






message.insertBefore(

document.createTextNode(
text[index]
),

cursor

);




index++;




},
48
);



}









/* =====================================
   HEART EFFECT
===================================== */


function createHearts(){



for(
let i=0;
i<25;
i++
){



const heart =
document.createElement(
"div"
);




heart.className =
"heart";





heart.textContent =
Math.random()>0.3
?
"♥"
:
"♡";





heart.style.left =
Math.random()*100+"vw";





heart.style.fontSize =
14+
Math.random()*16+
"px";





heart.style.animationDuration =
5+
Math.random()*3+
"s";





heart.style.setProperty(
"--drift",
(Math.random()-.5)*120+"px"
);






document.body.appendChild(
heart
);






setTimeout(
()=>{


heart.remove();


},
8000
);



}



}






});