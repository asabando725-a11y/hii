document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("music");
    const musicButton = document.getElementById("musicButton");

    if (music && musicButton) {

        musicButton.addEventListener("click", function () {

            if (music.paused) {

                music.play()
                    .then(function () {
                        musicButton.innerHTML = "♫";
                    })
                    .catch(function () {
                        alert("Make sure that music/song.mp3 exists.");
                    });

            } else {

                music.pause();

                musicButton.innerHTML = "♪";
            }

        });
    }

    /*
       EXTRA FLOATING HEARTS
    */

    const background = document.querySelector(".background-hearts");

    if (background) {

        setInterval(function () {

            const heart = document.createElement("span");

            const symbols = [
                "♡",
                "♥",
                "✦",
                "·"
            ];

            heart.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() * symbols.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.top =
                (100 + Math.random() * 10) + "%";

            heart.style.fontSize =
                (10 + Math.random() * 20) + "px";

            heart.style.animationDuration =
                (5 + Math.random() * 5) + "s";

            background.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 10000);

        }, 1200);
    }

});