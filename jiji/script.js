/* =========================================
   JAMMM'S BIRTHDAY WEBSITE
   COMPLETE JAVASCRIPT
========================================= */


/* =========================================
   SECRET ENTRANCE
========================================= */

let siteUnlocked = false;


function unlockWebsite() {

    const nameInput =
        document.getElementById("secretName");

    const monthInput =
        document.getElementById("secretMonth");

    const error =
        document.getElementById("secretError");

    const entrance =
        document.getElementById("secretEntrance");

    const unlockMessage =
        document.getElementById("unlockMessage");


    if (!nameInput || !monthInput) {
        return;
    }


    /*
       Convert the name to lowercase
       and remove spaces.

       This means:
       JAMMM
       jammm
       JaMmM
       J A M M M

       will all be accepted.
    */

    const name =
        nameInput.value
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "");


    const monthsary =
        monthInput.value.trim();


    /* =====================================
       CHECK ANSWERS
    ===================================== */

    if (
        name === "jammm" &&
        monthsary === "2"
    ) {

        siteUnlocked = true;


        if (error) {

            error.textContent = "";

        }


        if (unlockMessage) {

            unlockMessage.classList.add(
                "show-unlock"
            );

        }


        /*
           Small delay so Jammm sees
           the romantic message first.
        */

        setTimeout(function() {

            if (entrance) {

                entrance.classList.add(
                    "unlocked"
                );

            }


            document.body.classList.remove(
                "site-locked"
            );


            document.body.style.overflow =
                "auto";


            /*
               Make sure Home is displayed.
            */

            showPage("home");

        }, 1400);


    }

    else {

        if (error) {

            error.textContent =
                "Hmm... I don't think you're my Jammm. 🤨 Try again.";

        }


        /*
           Shake the secret box.
        */

        const box =
            document.querySelector(
                ".secret-box"
            );


        if (box) {

            box.classList.remove(
                "wrong-answer"
            );


            void box.offsetWidth;


            box.classList.add(
                "wrong-answer"
            );

        }

    }

}



/* =========================================
   ENTER KEY SUPPORT
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            !siteUnlocked
        ) {

            unlockWebsite();

        }

    }
);



/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId) {

    /*
       Do not allow navigation
       before the secret entrance
       has been completed.
    */

    if (!siteUnlocked) {

        return;

    }


    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove(
            "active-page"
        );

    });


    const page =
        document.getElementById(pageId);


    if (page) {

        page.classList.add(
            "active-page"
        );

    }


    const menu =
        document.getElementById("navLinks");


    if (menu) {

        menu.classList.remove(
            "menu-open"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const menu =
        document.getElementById("navLinks");


    if (menu) {

        menu.classList.toggle(
            "menu-open"
        );

    }

}



/* =========================================
   SECRET NOTES
========================================= */

const notes = {

    1: {

        title:
            "Open when you miss me 🤍",

        message:
            "Jammm, if you opened this because you miss me, just remember that somewhere far away in Bhutan, your Jiji is thinking about you too. Distance may keep us apart, but it doesn't stop you from being someone very special to me. Consider this your tiny digital hug. 🤍"

    },


    2: {

        title:
            "Open on a bad day 🌙",

        message:
            "Hey Jammm, if today isn't being kind to you, please take a little break. You don't have to pretend to be okay all the time. I hope you remember that there is someone far away who genuinely cares about you and wants to see you happy. So breathe, rest, and come back stronger. 🌙🤍"

    },


    3: {

        title:
            "Why I made this 💗",

        message:
            "Because saying Happy Birthday didn't feel like enough. I wanted to give you something that took time, thought, and a little piece of my heart. We've never met, but somehow talking to you became something I look forward to. I wanted you to have something you could open and remember that your Jiji was thinking about you on your special day. 💗"

    },


    4: {

        title:
            "A little reminder ✨",

        message:
            "You may say you don't show much expression, and you can definitely be cold sometimes. But with me, I've seen a warmer side of you. You make me feel comfortable and safe enough to be myself. I don't know where our story will take us, but right now, I'm really grateful that I get to call you my Jammm. ✨🤍"

    }

};



/* =========================================
   OPEN NOTE
========================================= */

function openNote(number) {

    const note =
        notes[number];


    if (!note) {

        return;

    }


    const title =
        document.getElementById(
            "noteTitle"
        );


    const message =
        document.getElementById(
            "noteMessage"
        );


    const popup =
        document.getElementById(
            "notePopup"
        );


    if (title) {

        title.textContent =
            note.title;

    }


    if (message) {

        message.textContent =
            note.message;

    }


    if (popup) {

        popup.classList.add(
            "show"
        );

    }

}



/* =========================================
   CLOSE NOTE
========================================= */

function closeNote() {

    const popup =
        document.getElementById(
            "notePopup"
        );


    if (popup) {

        popup.classList.remove(
            "show"
        );

    }

}



/* =========================================
   100 I LOVE YOU
========================================= */

const loveReasons = [

    { language: "English", phrase: "I love you 🤍" },
    { language: "French", phrase: "Je t'aime" },
    { language: "Spanish", phrase: "Te amo" },
    { language: "Italian", phrase: "Ti amo" },
    { language: "German", phrase: "Ich liebe dich" },
    { language: "Portuguese", phrase: "Eu te amo" },
    { language: "Dutch", phrase: "Ik hou van jou" },
    { language: "Swedish", phrase: "Jag älskar dig" },
    { language: "Norwegian", phrase: "Jeg elsker deg" },
    { language: "Danish", phrase: "Jeg elsker dig" },
    { language: "Finnish", phrase: "Rakastan sinua" },
    { language: "Icelandic", phrase: "Ég elska þig" },
    { language: "Irish", phrase: "Is breá liom tú" },
    { language: "Welsh", phrase: "Rwy'n dy garu di" },
    { language: "Scottish Gaelic", phrase: "Tha gaol agam ort" },
    { language: "Polish", phrase: "Kocham cię" },
    { language: "Czech", phrase: "Miluji tě" },
    { language: "Slovak", phrase: "Ľúbim ťa" },
    { language: "Hungarian", phrase: "Szeretlek" },
    { language: "Romanian", phrase: "Te iubesc" },
    { language: "Greek", phrase: "Σ' αγαπώ" },
    { language: "Albanian", phrase: "Të dua" },
    { language: "Croatian", phrase: "Volim te" },
    { language: "Serbian", phrase: "Волим те" },
    { language: "Bulgarian", phrase: "Обичам те" },
    { language: "Russian", phrase: "Я тебя люблю" },
    { language: "Ukrainian", phrase: "Я тебе кохаю" },
    { language: "Lithuanian", phrase: "Aš tave myliu" },
    { language: "Latvian", phrase: "Es tevi mīlu" },
    { language: "Estonian", phrase: "Ma armastan sind" },
    { language: "Turkish", phrase: "Seni seviyorum" },
    { language: "Azerbaijani", phrase: "Mən səni sevirəm" },
    { language: "Georgian", phrase: "მიყვარხარ" },
    { language: "Armenian", phrase: "Ես քեզ սիրում եմ" },
    { language: "Persian", phrase: "دوستت دارم" },
    { language: "Arabic", phrase: "أحبك" },
    { language: "Hebrew", phrase: "אני אוהב אותך" },
    { language: "Hindi", phrase: "मैं तुमसे प्यार करता हूँ" },
    { language: "Nepali", phrase: "म तिमीलाई माया गर्छु" },
    { language: "Dzongkha", phrase: "ང་ཁྱོད་ལུ་དགའ།" },
    { language: "Bengali", phrase: "আমি তোমাকে ভালোবাসি" },
    { language: "Punjabi", phrase: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ" },
    { language: "Gujarati", phrase: "હું તને પ્રેમ કરું છું" },
    { language: "Marathi", phrase: "माझं तुझ्यावर प्रेम आहे" },
    { language: "Tamil", phrase: "நான் உன்னை காதலிக்கிறேன்" },
    { language: "Telugu", phrase: "నేను నిన్ను ప్రేమిస్తున్నాను" },
    { language: "Kannada", phrase: "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ" },
    { language: "Malayalam", phrase: "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു" },
    { language: "Odia", phrase: "ମୁଁ ତୁମକୁ ଭଲ ପାଏ" },
    { language: "Assamese", phrase: "মই তোমাক ভাল পাওঁ" },
    { language: "Urdu", phrase: "میں تم سے محبت کرتا ہوں" },
    { language: "Sinhala", phrase: "මම ඔයාට ආදරෙයි" },
    { language: "Thai", phrase: "ฉันรักคุณ" },
    { language: "Lao", phrase: "ຂ້ອຍຮັກເຈົ້າ" },
    { language: "Khmer", phrase: "ខ្ញុំស្រឡាញ់អ្នក" },
    { language: "Vietnamese", phrase: "Anh yêu em" },
    { language: "Indonesian", phrase: "Aku cinta kamu" },
    { language: "Malay", phrase: "Saya cintakan awak" },
    { language: "Filipino", phrase: "Mahal kita" },
    { language: "Chinese", phrase: "我爱你" },
    { language: "Japanese", phrase: "愛してる" },
    { language: "Korean", phrase: "사랑해" },
    { language: "Mongolian", phrase: "Би чамд хайртай" },
    { language: "Kazakh", phrase: "Мен сені сүйемін" },
    { language: "Uzbek", phrase: "Men seni sevaman" },
    { language: "Kyrgyz", phrase: "Мен сени сүйөм" },
    { language: "Tajik", phrase: "Ман туро дӯст медорам" },
    { language: "Turkmen", phrase: "Men seni söýýärin" },
    { language: "Swahili", phrase: "Nakupenda" },
    { language: "Zulu", phrase: "Ngiyakuthanda" },
    { language: "Xhosa", phrase: "Ndiyakuthanda" },
    { language: "Afrikaans", phrase: "Ek is lief vir jou" },
    { language: "Amharic", phrase: "እወድሃለሁ" },
    { language: "Somali", phrase: "Waan ku jeclahay" },
    { language: "Yoruba", phrase: "Mo nifẹ rẹ" },
    { language: "Hausa", phrase: "Ina son ka" },
    { language: "Igbo", phrase: "A hụrụ m gị n'anya" },
    { language: "Malagasy", phrase: "Tiako ianao" },
    { language: "Latin", phrase: "Te amo" },
    { language: "Esperanto", phrase: "Mi amas vin" },
    { language: "Hawaiian", phrase: "Aloha wau iā ʻoe" },
    { language: "Maori", phrase: "Aroha ahau ki a koe" },
    { language: "Samoan", phrase: "Ou te alofa ia te oe" },
    { language: "Fijian", phrase: "Au lomani iko" },
    { language: "Maltese", phrase: "Inħobbok" },
    { language: "Basque", phrase: "Maite zaitut" },
    { language: "Catalan", phrase: "T'estimo" },
    { language: "Galician", phrase: "Quérote" },
    { language: "Luxembourgish", phrase: "Ech hunn dech gär" },
    { language: "Belarusian", phrase: "Я цябе кахаю" },
    { language: "Macedonian", phrase: "Те сакам" },
    { language: "Slovenian", phrase: "Ljubim te" },
    { language: "Bosnian", phrase: "Volim te" },
    { language: "Japanese", phrase: "大好きだよ" },
    { language: "Korean", phrase: "많이 사랑해" },
    { language: "Chinese", phrase: "我真的爱你" },
    { language: "French", phrase: "Je t'aime tellement" },
    { language: "Spanish", phrase: "Te quiero mucho" },
    { language: "Italian", phrase: "Ti amo tanto" },
    { language: "Portuguese", phrase: "Eu te amo muito" },
    { language: "English", phrase: "I love you, Jammm. 🤍" }

];


let loveCardIndex = 0;



/* =========================================
   SHOW LOVE CARD
========================================= */

function showLoveCard() {

    const container =
        document.getElementById(
            "loveCardContainer"
        );


    if (!container) {
        return;
    }


    if (
        loveCardIndex >=
        loveReasons.length
    ) {

        container.innerHTML = `

            <div class="love-final-card">

                <div class="love-final-heart">
                    ♥
                </div>

                <h3>
                    And if 100 still aren't enough...
                </h3>

                <p>
                    I'll just have to find 100 more
                    reasons to tell you tomorrow.
                </p>

                <p>
                    Because somehow, Jammm,
                    loving you never feels like
                    something I could finish counting. 🤍
                </p>

                <div class="love-final-signature">
                    Always your Jiji ♡
                </div>

            </div>

        `;


        const button =
            document.getElementById(
                "loveNextButton"
            );


        if (button) {

            button.style.display =
                "none";

        }


        const finishButton =
            document.querySelector(
                ".love-finish-button"
            );


        if (finishButton) {

            finishButton.classList.add(
                "show-finish"
            );

        }


        createLoveHearts();

        return;

    }


    const love =
        loveReasons[
            loveCardIndex
        ];


    container.innerHTML = `

        <div class="love-card">

            <div class="love-number">
                ${loveCardIndex + 1} / 100
            </div>

            <div class="love-language">
                ${love.language}
            </div>

            <div class="love-phrase">
                ${love.phrase}
            </div>

            <div class="little-heart">
                ♡
            </div>

        </div>

    `;


    const card =
        container.querySelector(
            ".love-card"
        );


    if (card) {

        card.classList.add(
            "love-card-appear"
        );

    }


    loveCardIndex++;

}



/* =========================================
   NEXT LOVE CARD
========================================= */

function nextLoveCard() {

    showLoveCard();

}



/* =========================================
   RESET LOVE CARDS
========================================= */

function resetLoveCards() {

    loveCardIndex = 0;


    const button =
        document.getElementById(
            "loveNextButton"
        );


    if (button) {

        button.style.display =
            "inline-block";

    }


    const finishButton =
        document.querySelector(
            ".love-finish-button"
        );


    if (finishButton) {

        finishButton.classList.remove(
            "show-finish"
        );

    }


    showLoveCard();

}



/* =========================================
   LOVE PAGE HEARTS
========================================= */

function createLoveHearts() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.textContent =
            Math.random() > 0.5
                ? "♡"
                : "♥";


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            15 +
            Math.random() * 30 +
            "px";


        heart.style.color =
            "#ff9fc5";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "3000";


        heart.style.animation =
            "heartRise 5s ease-out forwards";


        heart.style.animationDelay =
            Math.random() * 1.5 +
            "s";


        document.body.appendChild(
            heart
        );


        setTimeout(
            function() {

                heart.remove();

            },
            6500
        );

    }

}



/* =========================================
   CAKE COUNTDOWN
========================================= */

function blowCandles() {

    const message =
        document.getElementById(
            "wishMessage"
        );


    const button =
        document.querySelector(
            "#cake .main-button"
        );


    if (!message) {
        return;
    }


    if (button) {

        button.disabled =
            true;

        button.style.opacity =
            "0.5";

    }


    let number = 3;


    message.textContent =
        number;


    message.classList.add(
        "countdown"
    );


    const timer =
        setInterval(
            function() {

                number--;


                message.classList.remove(
                    "countdown"
                );


                void message.offsetWidth;


                if (number > 0) {

                    message.textContent =
                        number;

                    message.classList.add(
                        "countdown"
                    );

                }

                else {

                    clearInterval(
                        timer
                    );


                    const flames =
                        document.querySelectorAll(
                            ".flame"
                        );


                    flames.forEach(
                        function(flame) {

                            flame.classList.add(
                                "off"
                            );

                        }
                    );


                    message.textContent =
                        "✨ Happy Birthday, Jammm! ✨";


                    const next =
                        document.getElementById(
                            "cakeNext"
                        );


                    if (next) {

                        next.classList.remove(
                            "hidden"
                        );

                    }


                    createHearts();

                }

            },
            1000
        );

}



/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.textContent =
            "♡";


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 +
            "%";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";


        heart.style.color =
            "#ff9fc5";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "3000";


        heart.style.animation =
            "heartRise 4s ease-out forwards";


        heart.style.animationDelay =
            Math.random() * 1.5 +
            "s";


        document.body.appendChild(
            heart
        );


        setTimeout(
            function() {

                heart.remove();

            },
            5500
        );

    }

}



/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeNote();

        }

    }
);



/* =========================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener(
    "click",
    function(event) {

        const popup =
            document.getElementById(
                "notePopup"
            );


        if (
            popup &&
            event.target === popup
        ) {

            closeNote();

        }

    }
);



/* =========================================
   INITIAL SETUP
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
           Lock the website until
           Jammm answers the questions.
        */

        document.body.classList.add(
            "site-locked"
        );


        document.body.style.overflow =
            "hidden";


        const container =
            document.getElementById(
                "loveCardContainer"
            );


        if (container) {

            showLoveCard();

        }


        /*
           Put cursor in the first
           question automatically.
        */

        const nameInput =
            document.getElementById(
                "secretName"
            );


        if (nameInput) {

            setTimeout(
                function() {

                    nameInput.focus();

                },
                500
            );

        }

    }
);