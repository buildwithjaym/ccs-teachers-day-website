document.addEventListener(
"DOMContentLoaded",
()=>{


/* ===============================
   CHECK LOGIN DATA
================================ */


const savedTeacher =
sessionStorage.getItem("teacher");


if(!savedTeacher){

window.location.href="index.html";

return;

}



const teacher =
JSON.parse(savedTeacher);







/* ===============================
   TEACHER DATABASE
================================ */


const teachers = {


"1259":{

name:"Ma'am Matheen",

image:
"images/teachers/matheen.jpg",

music:
"assets/music/music.mp3",


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





"2468":{


name:"Ma'am Jolo",

image:
"assets/teachers/jolo.jpg",

music:
"assets/music/music.mp3",


message:
`Thank you for inspiring us
and guiding us throughout our journey.

Your lessons and encouragement
will always stay with us.

Happy Teachers' Day.`

},





"3579":{


name:"Ma'am Abah",

image:
"assets/teachers/abah.jpg",

music:
"assets/music/music.mp3",


message:
`Your kindness and wisdom
have left a lasting mark on us.

Thank you for believing in your students
and guiding us with patience and care.

Happy Teachers' Day.`

},





"4680":{


name:"Ma'am Buddin",

image:
"assets/teachers/buddin.jpg",

music:
"assets/music/music.mp3",


message:
`Thank you for the knowledge,
support, and inspiration
you shared with us.

You made learning meaningful
and helped shape who we are today.

Happy Teachers' Day.`

}


};







const data =
teachers[teacher.code];



if(!data){

console.error(
"Teacher not found",
teacher.code
);

return;

}








/* ===============================
   ELEMENTS
================================ */


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







/* ===============================
   LOAD DATA
================================ */


teacherImage.src =
data.image;


teacherImage.alt =
data.name;


teacherName.textContent =
data.name;


letterName.textContent =
data.name;


music.src =
data.music;


music.load();








/* ===============================
   STATES
================================ */


let opened=false;

let typingTimer=null;

let heartsCreated=false;








/* ===============================
   OPEN LETTER
================================ */


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
.catch(
()=>{}
);



startTyping(
data.message
);



if(!heartsCreated){

createHearts();

heartsCreated=true;

}



});









/* ===============================
   CLOSE LETTER
================================ */


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



envelope.classList.remove(
"open"
);



message.textContent="";



},
800
);



});









/* ===============================
   TYPE EFFECT
================================ */


function startTyping(text){


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





const letter =
document.createTextNode(
text[index]
);



message.insertBefore(
letter,
cursor
);



index++;



},
40
);



}










/* ===============================
   HEART EFFECT
================================ */


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
Math.random()>.3
?"♥"
:"♡";



heart.style.left =
Math.random()*100+"vw";



heart.style.fontSize =
(
14+
Math.random()*18
)
+"px";



heart.style.animationDuration =
(
5+
Math.random()*3
)
+"s";



heart.style.setProperty(
"--drift",
(
Math.random()-.5
)*120
+"px"
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