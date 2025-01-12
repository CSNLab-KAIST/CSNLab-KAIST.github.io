
// 为每个按钮添加点击事件
// 获取筛选按钮和新闻条目
document.addEventListener('DOMContentLoaded', () => {
    const smallFilterButtons = document.querySelectorAll('.filter-btn-small');
    const timelineItems = document.querySelectorAll('.timeline-item');

    smallFilterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            timelineItems.forEach((item) => {
                const itemType = item.getAttribute('data-type');
                if (filter === 'all' || filter === itemType) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

