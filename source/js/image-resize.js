// 图片大小控制脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有文章内的图片
    const contentImages = document.querySelectorAll('.post-content img, .post-content-main img, article img');
    
    // 处理每个图片
    contentImages.forEach(function(img) {
        // 如果图片加载完毕
        if (img.complete) {
            handleImage(img);
        } else {
            // 如果图片尚未加载，添加加载事件
            img.addEventListener('load', function() {
                handleImage(img);
            });
        }
        
        // 添加点击事件 - 点击查看原始大小
        img.addEventListener('click', function() {
            // 创建图片查看器
            const viewer = document.createElement('div');
            viewer.className = 'image-viewer';
            viewer.style.position = 'fixed';
            viewer.style.top = '0';
            viewer.style.left = '0';
            viewer.style.width = '100%';
            viewer.style.height = '100%';
            viewer.style.backgroundColor = 'rgba(0,0,0,0.9)';
            viewer.style.zIndex = '9999';
            viewer.style.display = 'flex';
            viewer.style.justifyContent = 'center';
            viewer.style.alignItems = 'center';
            viewer.style.cursor = 'zoom-out';
            
            // 创建图片元素
            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.maxWidth = '90%';
            fullImg.style.maxHeight = '90%';
            fullImg.style.objectFit = 'contain';
            fullImg.style.transition = 'transform 0.3s ease';
            
            // 添加关闭事件
            viewer.addEventListener('click', function() {
                document.body.removeChild(viewer);
            });
            
            // 阻止图片点击事件冒泡
            fullImg.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            
            // 添加到页面
            viewer.appendChild(fullImg);
            document.body.appendChild(viewer);
        });
    });
    
    // 处理图片大小的函数
    function handleImage(img) {
        // 检查图片是否超大
        if (img.naturalWidth > 1200 || img.naturalHeight > 800) {
            // 标记为大图片
            img.classList.add('large-image');
            img.style.cursor = 'zoom-in';
            
            // 确保大小限制
            img.style.maxHeight = '600px';
            img.style.objectFit = 'contain';
            
            // 添加提示信息
            const hint = document.createElement('div');
            hint.className = 'image-hint';
            hint.textContent = '点击查看原图';
            hint.style.textAlign = 'center';
            hint.style.fontSize = '0.85rem';
            hint.style.color = 'var(--text-secondary)';
            hint.style.marginTop = '0.5rem';
            hint.style.fontStyle = 'italic';
            
            // 插入提示
            if (img.parentNode.tagName === 'FIGURE') {
                img.parentNode.appendChild(hint);
            } else {
                const wrapper = document.createElement('figure');
                wrapper.style.margin = '2rem auto';
                wrapper.style.textAlign = 'center';
                
                // 替换图片
                img.parentNode.insertBefore(wrapper, img);
                wrapper.appendChild(img);
                wrapper.appendChild(hint);
            }
        }
    }
}); 