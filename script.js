document.addEventListener("DOMContentLoaded", () => {
    const congratsText = document.getElementById("congrats");
    const sectionText = document.querySelector("section h2");
    const animatedTexts = document.querySelectorAll(".animated-text");

    function splitText(text) {
        let chars = [];
        let i = 0;
        while (i < text.length) {
            if (text.substr(i, 4) === "<br>") {
                chars.push("<br>");
                i += 4;
            } else {
                chars.push(text[i]);
                i++;
            }
        }
        return chars;
    }

    function animateText(element, chars) {
        element.innerHTML = '';
        chars.forEach((char, index) => {
            setTimeout(() => {
                if (char === "<br>") {
                    element.innerHTML += char;
                } else {
                    element.innerHTML += char;
                    if (element === congratsText && index === chars.length - 1) {
                        element.innerHTML += "💖💖💖";
                        element.style.animation = `shake 0.5s cubic-bezier(.36,.07,.19,.97) both`;
                    }
                    if (element === sectionText && index === chars.length - 1) {
                        element.innerHTML += "🐻🐻🐻🐻";
                        element.style.animation = `shake 0.5s cubic-bezier(.36,.07,.19,.97) both`;
                    }
                }
            }, 100 * index);
        });
    }

    let charsCongrats = splitText(congratsText.innerHTML);
    let charsSection = splitText(sectionText.innerHTML);

    animateText(congratsText, charsCongrats);

    setTimeout(() => {
        animateText(sectionText, charsSection);
    }, 100 * charsCongrats.length);

    let totalAnimationTime = 100 * charsCongrats.length + 100 * charsSection.length;
    animatedTexts.forEach((text, index) => {
        setTimeout(() => {
            let chars = splitText(text.innerHTML);
            animateText(text, chars);
        }, totalAnimationTime + 500 * index); 
    });

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes shake {
            10%, 90% {
                transform: translate3d(-1px, 0, 0);
            }
            20%, 80% {
                transform: translate3d(2px, 0, 0);
            }
            30%, 50%, 70% {
                transform: translate3d(-4px, 0, 0);
            }
            40%, 60% {
                transform: translate3d(4px, 0, 0);
            }
        }
    `;
    document.head.appendChild(style);
});
