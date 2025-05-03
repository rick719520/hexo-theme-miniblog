// 主题切换功能
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// 检查本地存储的主题偏好
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

// 切换主题函数
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
}

// 更新主题图标
function updateIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '🌞' : '🌙';
}

// 添加点击事件
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// 禁用右键点击并显示自定义提示
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('获取源码 请添加微信 378778778');
    return false;
});

// 禁用F12键和Ctrl+Shift+I (开发者工具)
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert('获取源码 请添加微信 378778778');
        return false;
    }
});

// 高亮当前页面的导航链接
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面URL
    const currentPage = location.pathname.split('/').pop();
    
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('nav a');
    
    // 遍历导航链接，匹配当前页面
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});