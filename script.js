// 1. 自定义鼠标光标逻辑
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

// 鼠标移动事件
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // 小点直接跟随
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // 大圈带一点延迟动画 (用 animate)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// 鼠标悬停在链接上时的交互
const allLinks = document.querySelectorAll('a, .art-card');

allLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
    });
    link.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
    });
});


// 2. 滚动浮现 (Intersection Observer API - )
const observerOptions = {
    threshold: 0.15 // 元素出现 15% 时触发
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-up').forEach(el => {
    observer.observe(el);
});

