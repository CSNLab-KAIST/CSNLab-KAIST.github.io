// 图片路径数组
const images = [
    '/images/people/Members1.jpg',
    '/images/people/Members2.jpg',
    // '/images/people/Members3.jpg',
  ];
  
  let currentIndex = 0;
  
  // 更改图片的函数
  function changeImage(direction) {
    currentIndex += direction;
  
    // 确保图片的索引在范围内
    if (currentIndex >= images.length) {
      currentIndex = 0; // 如果到达最后一张，则回到第一张
    } else if (currentIndex < 0) {
      currentIndex = images.length - 1; // 如果是第一张，向前切换时回到最后一张
    }
  
    // 更换图片
    document.getElementById("image").src = images[currentIndex];
  }
  
  // 自动切换图片的函数
  function autoChangeImage() {
    changeImage(1); // 每次切换到下一张图片
  }
  
  // 设置定时器，每隔10秒自动切换图片
  setInterval(autoChangeImage, 10000);
  