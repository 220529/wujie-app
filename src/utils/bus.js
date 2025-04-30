// 如果使用wujie-react
import WujieReact from "wujie-react";
const { bus } = WujieReact;

console.log("bus.js is loaded", bus);

// 主应用监听事件
bus.$on("event-01", function (params) {
  console.log("event-01 received: ", params);
});
