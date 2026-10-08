document.addEventListener("DOMContentLoaded", () => {


    const savedTeacher =
        sessionStorage.getItem("teacher");


    if (!savedTeacher) {

        window.location.href = "index.html";
        return;

    }



    const teacher =
        JSON.parse(savedTeacher);





    const teachers = {


        "1259": {

            name: "Ma'am Matheen",

            image:
            "assets/teachers/matheen.jpg",

            music:
            "assets/music/music.mp3",


            message:
`
Dear Ma'am Matheen,

Thank you for your patience,
guidance, and kindness.

You taught us more than lessons.

You helped us believe in ourselves
and become better individuals.

Your impact will always remain.

Happy Teachers' Day.

With love,
Angel & Jaymar
`

        }


    };







    const data =
        teachers[teacher.code];



    if (!data) {

        console.error(
            "Teacher data not found"
        );

        return;

    }





    // ELEMENTS

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


    const envelope =
        document.getElementById(
            "envelope"
        );


    const openButton =
        document.getElementById(
            "open"
        );


    const music =
        document.getElementById(
            "music"
        );







    // LOAD TEACHER DATA


    teacherImage.src =
        data.image;


    teacherName.innerText =
        data.name;


    letterName.innerText =
        data.name;


    music.src =
        data.music;









    // OPEN LETTER


    openButton.addEventListener(
        "click",
        () => {


            console.log(
                "Letter opened"
            );



            envelope.classList.add(
                "open"
            );



            music.volume = 0.35;



            music.play()
            .catch(error => {

                console.log(
                    "Music waiting for interaction",
                    error
                );

            });




            typeMessage(
                data.message
            );



            createHearts();



            openButton.style.display =
                "none";



        }

    );









    function typeMessage(text) {


        message.innerHTML = "";


        let index = 0;



        const typing =
        setInterval(() => {



            message.innerHTML +=
            text[index];



            index++;



            if(index >= text.length){

                clearInterval(
                    typing
                );

            }



        },45);



    }









    function createHearts(){



        for(let i=0;i<40;i++){



            const heart =
            document.createElement(
                "div"
            );



            heart.className =
            "heart";



            heart.innerHTML =
            "♥";



            heart.style.left =
            Math.random()*100+"vw";



            heart.style.animationDelay =
            Math.random()*2+"s";



            document.body.appendChild(
                heart
            );



            setTimeout(()=>{


                heart.remove();


            },6000);



        }



    }



});