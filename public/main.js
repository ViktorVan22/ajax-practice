console.log("我是main.js");
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n++;
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text);
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    // 创建div标签
    const div = document.createElement("div");
    // 填写div里的内容
    div.innerHTML = request.response;
    // 插入到body里面
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    // 创建script标签
    const script = document.createElement("script");
    // 填写script内的内容
    script.innerHTML = request.response;
    // 插入到body里面
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest(); // readyState = 0
  request.open("get", "/style.css"); // readyState = 1
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建style标签
        const style = document.createElement("style");
        // 填写style内容
        style.innerHTML = request.response;
        // 插入到表头里面
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};
