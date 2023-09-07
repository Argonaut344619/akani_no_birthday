document.addEventListener("DOMContentLoaded", () => {
    const congratsText = document.getElementById("congrats");
    const sectionText = document.querySelector("section h2");

    let charsCongrats = congratsText.innerText.split('');
    let charsSection = sectionText.innerText.split('');

    congratsText.innerHTML = '';
    sectionText.innerHTML = '';

    // <h1>のテキストを1文字ずつ表示
    charsCongrats.forEach((char, index) => {
        setTimeout(() => {
            congratsText.innerHTML += char === " " ? " " : (char + "💖"); // 空白の場所にはハートマークを追加しない
        }, 100 * index);
    });

    // <h1>のアニメーションが終わった後に<h2>のテキストを1文字ずつ表示
    setTimeout(() => {
        charsSection.forEach((char, index) => {
            setTimeout(() => {
                sectionText.innerHTML += char === " " ? " " : (char + "🐻"); // 空白の場所にはくまさんを追加しない
            }, 100 * index);
        });
    }, 100 * charsCongrats.length); // <h1>のアニメーションが完了する時間を考慮
});
