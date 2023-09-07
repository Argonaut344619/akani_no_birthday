document.addEventListener("DOMContentLoaded", () => {
    const congratsText = document.getElementById("congrats");
    let chars = congratsText.innerText.split('');
    congratsText.innerHTML = '';
    
    chars.forEach((char, index) => {
        setTimeout(() => {
            congratsText.innerHTML += char;
        }, 100 * index);
    });
});
