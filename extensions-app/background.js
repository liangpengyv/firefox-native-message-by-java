/**
 * 与注册表中注册的本地应用创建 Native Message 连接
 * @type {browser.runtime.Port}
 */
const port = browser.runtime.connectNative('ink.laoliang.firefox');

/**
 * 监听 content.js
 */
browser.runtime.onMessage.addListener(function (msg) {

    // 向本地应用发送消息
    port.postMessage(msg);
});

/**
 * 监听端口响应
 */
port.onMessage.addListener(function (msg) {

    // 将“响应”数据发送给 content.js
    browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
        browser.tabs.sendMessage(tabs[0].id, msg, function (response) {

        });
    });
});

/**
 * 监听端口连接断开
 */
port.onDisconnect.addListener(function (msg) {

    // 将“断开连接”的消息发送给 content.js
    browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
        browser.tabs.sendMessage(tabs[0].id, msg, function (response) {

        });
    });
});
