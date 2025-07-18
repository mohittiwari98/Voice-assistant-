let btn = document.querySelector("#btn");

let content = document.querySelector("#content");

let voice = document.querySelector("#voice");



function speak(text) {

  let text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;

  text_speak.pitch = 1;

  text_speak.volume = 1;

  window.speechSynthesis.speak(text_speak);

}



function wishMe() {

  let day = new Date();

  let hours = day.getHours();

  if (hours >= 0 && hours < 12) {

    speak("Good Morning Sir");

  } else if (hours >= 12 && hours < 16) {

    speak("Good Afternoon Sir");

  } else {

    speak("Good Evening Sir");

  }

}

window.addEventListener("load", () => {

  wishMe();

});



let speechRecorginition =

  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new speechRecorginition();

recognition.onresult = (event) => {

  let currentIndex = event.resultIndex;

  let transcript = event.results[currentIndex][0].transcript;

  content.innerText = transcript;

  takeCommand(transcript.toLowerCase());

};



btn.addEventListener("click", () => {

  recognition.start();

  btn.style.display = "none";

  voice.style.display = "block";

});



function takeCommand(message) {

  btn.style.display = "flex";

  voice.style.display = "none";

  if (message.includes("hello") || message.includes("hey")) {

    speak("hello sir,what can i help you?");

  } else if (message.includes("who are you")) {

    speak("i am Drone a virtual assistant, created by adarsh singh rajput");

  } else if (message.includes("how are you")) {

    speak("i am fine what about you?");

  } else if (message.includes("tell")) {

    speak("jai shree ram");

  } else if (message.includes("open youtube")) {

    speak("opening youtube");

    window.open("https://www.youtube.com/", "_blank");

  } else if (message.includes("open google")) {

    speak("opening google");

    window.open("https://www.google.com/", "_blank");

  } else if (message.includes("open instagram")) {

    speak("opening instagram");

    window.open("https://www.instagram.com/", "_blank");

  } else if (message.includes("open linkdin")) {

    speak("opening linkdin");

    window.open("https://www.linkdin.com/", "_blank");

  } else if (message.includes("open github")) {

    speak("opening github");

    window.open("https://www.github.com/", "_blank");

  } else if (message.includes("open twitter")) {

    speak("opening twitter");

    window.open("https://www.twitter.com/", "_blank");

  } else if (message.includes("open spotify")) {

    speak("opening spotify");

    window.open("https://www.spotify.com/", "_blank");

  } else {

    speak(

      `this is waht i found on internet regarding${message.replace(

        "Hatim",

        ""

      )}`

    );

    window.open(`https://www.google.com/search?q=${message}`);

  }

    }
