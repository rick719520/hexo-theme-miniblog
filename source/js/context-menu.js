// 自定义右键菜单
document.addEventListener('DOMContentLoaded', function() {
    // 创建自定义右键菜单
    const contextMenu = document.createElement('div');
    contextMenu.id = 'custom-context-menu';
    contextMenu.style.display = 'none';
    contextMenu.style.position = 'absolute';
    contextMenu.style.zIndex = '1000';
    contextMenu.style.background = '#222';
    contextMenu.style.borderRadius = '10px';
    contextMenu.style.padding = '10px 0';
    contextMenu.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.3)';
    contextMenu.style.minWidth = '200px';
    contextMenu.style.color = '#fff';
    
    // 添加菜单内容
    contextMenu.innerHTML = `
        <div class="context-menu-group">
            <div class="context-menu-item" id="back-button">
                <i class="menu-icon">←</i>
                <span class="menu-text">后退</span>
            </div>
            <div class="context-menu-item" id="forward-button">
                <i class="menu-icon">→</i>
                <span class="menu-text">前进</span>
            </div>
            <div class="context-menu-item" id="refresh-button">
                <i class="menu-icon">↻</i>
                <span class="menu-text">刷新</span>
            </div>
            <div class="context-menu-item" id="home-button">
                <i class="menu-icon">↑</i>
                <span class="menu-text">回到顶部</span>
            </div>
        </div>
        <div class="context-menu-divider"></div>
        <div class="context-menu-group">
            <div class="context-menu-item" id="random-button">
                <i class="menu-icon">⚄</i>
                <span class="menu-text">随便逛逛</span>
            </div>
            <div class="context-menu-item" id="category-button">
                <i class="menu-icon">◧</i>
                <span class="menu-text">博客分类</span>
            </div>
            <div class="context-menu-item" id="tag-button">
                <i class="menu-icon">🏷</i>
                <span class="menu-text">文章标签</span>
            </div>
        </div>
        <div class="context-menu-divider"></div>
        <div class="context-menu-group">
            <div class="context-menu-item" id="copy-link-button">
                <i class="menu-icon">📋</i>
                <span class="menu-text">复制地址</span>
            </div>
            <div class="context-menu-item" id="toggle-theme-button">
                <i class="menu-icon">◐</i>
                <span class="menu-text">亮色模式</span>
            </div>
        </div>
    `;
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .context-menu-group {
            padding: 5px 0;
        }
        .context-menu-divider {
            height: 1px;
            background-color: #333;
            margin: 5px 0;
        }
        .context-menu-item {
            padding: 8px 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
        }
        .context-menu-item:hover {
            background-color: #333;
        }
        .menu-icon {
            margin-right: 10px;
            font-size: 18px;
            width: 20px;
            text-align: center;
            display: inline-block;
        }
        .menu-text {
            font-size: 14px;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(contextMenu);
    
    // 处理右键点击事件
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        
        // 设置菜单位置
        const x = e.clientX;
        const y = e.clientY;
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        const menuWidth = contextMenu.offsetWidth;
        const menuHeight = contextMenu.offsetHeight;
        
        // 确保菜单不会超出窗口边界
        const posX = x + menuWidth > winWidth ? winWidth - menuWidth : x;
        const posY = y + menuHeight > winHeight ? winHeight - menuHeight : y;
        
        contextMenu.style.left = `${posX}px`;
        contextMenu.style.top = `${posY}px`;
        contextMenu.style.display = 'block';
        
        // 更新主题按钮文字
        const themeToggleButton = document.getElementById('toggle-theme-button');
        const isDarkTheme = document.body.classList.contains('dark-theme');
        if (themeToggleButton) {
            const themeText = themeToggleButton.querySelector('.menu-text');
            themeText.textContent = isDarkTheme ? '亮色模式' : '暗色模式';
        }
        
        return false;
    });
    
    // 点击其他地方关闭菜单
    document.addEventListener('click', function() {
        contextMenu.style.display = 'none';
    });
    
    // 防止菜单内点击关闭菜单
    contextMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // 菜单功能实现
    
    // 后退
    document.getElementById('back-button').addEventListener('click', function() {
        window.history.back();
        contextMenu.style.display = 'none';
    });
    
    // 前进
    document.getElementById('forward-button').addEventListener('click', function() {
        window.history.forward();
        contextMenu.style.display = 'none';
    });
    
    // 刷新
    document.getElementById('refresh-button').addEventListener('click', function() {
        window.location.reload();
        contextMenu.style.display = 'none';
    });
    
    // 回到顶部
    document.getElementById('home-button').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        contextMenu.style.display = 'none';
    });
    
    // 随便逛逛
    document.getElementById('random-button').addEventListener('click', function() {
        // 获取所有文章链接
        const allLinks = Array.from(document.querySelectorAll('.post h2 a'));
        if (allLinks.length > 0) {
            const randomIndex = Math.floor(Math.random() * allLinks.length);
            window.location.href = allLinks[randomIndex].href;
        } else {
            // 如果当前页面没有文章链接，跳转到归档页
            window.location.href = '/archives/';
        }
        contextMenu.style.display = 'none';
    });
    
    // 博客分类
    document.getElementById('category-button').addEventListener('click', function() {
        window.location.href = '/categories/';
        contextMenu.style.display = 'none';
    });
    
    // 文章标签
    document.getElementById('tag-button').addEventListener('click', function() {
        window.location.href = '/tags/';
        contextMenu.style.display = 'none';
    });
    
    // 复制地址
    document.getElementById('copy-link-button').addEventListener('click', function() {
        const url = window.location.href;
        
        // 创建临时输入框
        const tempInput = document.createElement('input');
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // 显示提示
        const notification = document.createElement('div');
        notification.textContent = '链接已复制';
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.background = 'rgba(0, 0, 0, 0.7)';
        notification.style.color = '#fff';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1001';
        document.body.appendChild(notification);
        
        setTimeout(function() {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s';
            setTimeout(function() {
                document.body.removeChild(notification);
            }, 500);
        }, 2000);
        
        contextMenu.style.display = 'none';
    });
    
    // 切换主题
    document.getElementById('toggle-theme-button').addEventListener('click', function() {
        const body = document.body;
        const themeToggle = document.getElementById('theme-toggle');
        
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            if (themeToggle) themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            if (themeToggle) themeToggle.innerHTML = '<span class="theme-icon">🌞</span>';
        }
        
        contextMenu.style.display = 'none';
    });
    
    // 禁用原生右键菜单
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
}); 