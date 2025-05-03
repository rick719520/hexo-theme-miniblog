// 主题切换功能
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const storedTheme = localStorage.getItem('theme');
    
    // 初始化主题
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<span class="theme-icon">🌞</span>';
    } else {
        body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
    }

    // 添加过渡效果
    setTimeout(() => {
        document.documentElement.style.setProperty('--transition-speed', '0.3s');
        document.body.classList.add('transitions-enabled');
    }, 100);
    
    // 切换主题
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<span class="theme-icon">🌞</span>';
        }
    });
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