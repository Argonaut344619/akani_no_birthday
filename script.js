document.addEventListener("DOMContentLoaded", () => {
    const animatedTexts = document.querySelectorAll(".animated-text");

    animatedTexts.forEach((text, index) => {
        // それぞれのテキストに対して独自の動作を設定
        setTimeout(() => {
            // ここでテキストに何らかの"変な動き"を追加する
            // 以下は例としてテキストをシェイク（振動）させる動作を追加します
            text.style.animation = `shake 0.5s cubic-bezier(.36,.07,.19,.97) both ${index + 1} times`;
        }, 500 * index); // それぞれのテキストが0.5秒ごとに開始する
    });
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
