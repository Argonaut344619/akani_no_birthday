document.addEventListener("DOMContentLoaded", () => {
    const congratsText = document.getElementById("congrats");
    const sectionText = document.querySelector("section h2");
    const animatedTexts = document.querySelectorAll(".animated-text");

    let charsCongrats = congratsText.innerText.split('');
    let charsSection = sectionText.innerText.split('');

    congratsText.innerHTML = '';
    sectionText.innerHTML = '';

    // <h1>のテキストを1文字ずつ表示
    charsCongrats.forEach((char, index) => {
        setTimeout(() => {
            congratsText.innerHTML += char === " " ? " " : (char + "💖");
            // シェイクアニメーションを追加
            if (index === charsCongrats.length - 1) {
                congratsText.style.animation = `shake 0.5s cubic-bezier(.36,.07,.19,.97) both`;
            }
        }, 100 * index);
    });

    // <h1>のアニメーションが終わった後に<h2>のテキストを1文字ずつ表示
    setTimeout(() => {
        charsSection.forEach((char, index) => {
            setTimeout(() => {
                sectionText.innerHTML += char === " " ? " " : (char + "🐻");
                // シェイクアニメーションを追加
                if (index === charsSection.length - 1) {
                    sectionText.style.animation = `shake 0.5s cubic-bezier(.36,.07,.19,.97) both`;
                }
            }, 100 * index);
        });
    }, 100 * charsCongrats.length);

    // <span>のテキストにシェイクアニメーションを追加
    animatedTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.animation = `shake 0.5s cubic-bezier(.36,.07,.19,.97) both ${index + 1} times`;
        }, 500 * (charsCongrats.length + charsSection.length) + 500 * index);
    });

    // シェイク（振動）アニメーションをkeyframesで追加
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
