const anchors = [
    "Computer-Architecture",        // research 页面上的第一个 ## 标题
    "Interconnection-Networks",     // research 页面上的第二个 ## 标题
    "Hardware-Security",             // 第四个 ##
    "Human-Computer-Interaction"
  ];
  
  // 跳转到指定锚点的函数
  function navigateToSection(button) {
    // 获取按钮的顺序索引
    const index = button.getAttribute("data-index");
    // 跳转到 research 页面对应的锚点
    if (anchors[index]) {
      window.location.href = `/research#${anchors[index]}`;
    } else {
      console.error("Invalid index or anchor not defined.");
    }
  }