document.addEventListener("DOMContentLoaded", () => {
  const savedTeacher = sessionStorage.getItem("teacher");

  if (!savedTeacher) {
    window.location.href = "index.html";
    return;
  }

  const teacher = JSON.parse(savedTeacher);

  // ========== TEACHER DATA ==========
  const teachers = {
    "1259": {
      name: "Ma'am Matheen",
      image: "images/teachers/matheen.jpg",
      music: "assets/music/music.mp3",
      message: `Dear Ma'am Matheen,

Thank you for your patience,
guidance, and kindness.

You taught us more than lessons.
You helped us believe in ourselves
and become better individuals.

Your impact will always remain.

Happy Teachers' Day.

With love,
Angel & Jaymar`
    },

    "2468": {
      name: "Ma'am Jolo",
      image: "assets/teachers/jolo.jpg",
      music: "assets/music/music.mp3",
      message: `Dear Ma'am Jolo,

Thank you for the passion and energy
you bring into every class.

Your encouragement pushed us
to aim higher and never settle.

We are truly grateful for everything.

Happy Teachers' Day.

With appreciation,
Angel & Jaymar`
    },

    "3579": {
      name: "Ma'am Abah",
      image: "assets/teachers/abah.jpg",
      music: "assets/music/music.mp3",
      message: `Dear Ma'am Abah,

Your kindness and wisdom
have left a lasting mark on us.

Thank you for always believing
in your students and guiding us
with patience and care.

Happy Teachers' Day.

With love,
Angel & Jaymar`
    },

    "4680": {
      name: "Ma'am Buddin",
      image: "assets/teachers/buddin.jpg",
      music: "assets/music/music.mp3",
      message: `Dear Ma'am Buddin,

Thank you for the knowledge,
support, and inspiration
you shared with us.

You made learning meaningful
and helped shape who we are today.

Happy Teachers' Day.

With deep appreciation,
Angel & Jaymar`
    }
  };

  const data = teachers[teacher.code];

  if (!data) {
    console.error("Teacher data not found for code:", teacher.code);
    return;
  }

  // ========== ELEMENTS ==========
  const teacherImage = document.getElementById("teacherImage");
  const teacherName = document.getElementById("teacherName");
  const letterName = document.getElementById("letterName");
  const messageEl = document.getElementById("message");
  const envelope = document.getElementById("envelope");
  const openButton = document.getElementById("open");
  const music = document.getElementById("music");

  // Load data
  teacherImage.src = data.image;
  teacherName.innerText = data.name;
  letterName.innerText = data.name;
  music.src = data.music;

  // ========== OPEN LETTER ==========
  openButton.addEventListener("click", () => {
    envelope.classList.add("open");

    music.volume = 0.32;
    music.play().catch(() => {});

    typeMessage(data.message);
    createHearts();

    openButton.style.display = "none";
  });

  // ========== TYPING WITH CURSOR ==========
  function typeMessage(text) {
    messageEl.innerHTML = "";
    let index = 0;

    // Add cursor
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    messageEl.appendChild(cursor);

    const typing = setInterval(() => {
      if (index < text.length) {
        // Insert character before the cursor
        const char = document.createTextNode(text[index]);
        messageEl.insertBefore(char, cursor);
        index++;
      } else {
        clearInterval(typing);
        // Keep cursor for a short moment then remove
        setTimeout(() => cursor.remove(), 1800);
      }
    }, 38); // slightly faster & smoother
  }

  // ========== HEARTS ==========
  function createHearts() {
    for (let i = 0; i < 28; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "♥";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = 16 + Math.random() * 18 + "px";
      heart.style.animationDuration = 4.5 + Math.random() * 2.5 + "s";
      heart.style.animationDelay = Math.random() * 1.8 + "s";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 7500);
    }
  }
});