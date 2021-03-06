# Firefox Native Message By Java

> 这是一个 Firefox 扩展的 **Native Message** 接口示例项目，用来演示 Firefox 扩展与本地 Java 程序的通信。
>
> 应用场景为：**RPA 项目中网页内容选取**。

### 项目结构

```
├─extensions-app            # 【Firefox 浏览器扩展】
│ │ background.js
│ │ content.js
│ │ manifest.json
│ └─icons
│
├─native-host               # 【本地 Java 程序】
│ │ manifest.json           # 被注册到注册表的配置文件
│ │ pom.xml                 # Maven pom 配置
│ │ register-app.reg        # 注册表文件
│ │ start.bat               # 启动本机 Java 程序的 BAT 脚本
│ ├─out                     # 编译生成 Java 程序输出目录
│ │ └─artifacts
│ │   └─native_host_jar
│ │     └─native-host.jar   # 编译生成的 Java 程序
│ └─src                     # Java 程序源码
```

### 环境配置

1. **加载 Firefox Extensions** - 启动 Firefox ，在地址栏键入 `about:debugging` 打开附加组件管理页，点击 “临时载入附加组件” ，选择 `extensions-app` 文件夹下的 `manifest.json` 文件。
2. **配置注册表脚本并执行** - 文本编辑器打开 `native-host/register-app.reg` 文件，修改路径信息，指向 `native-host/manifest.json` 文件，并双击执行注册表。
3. **配置本地程序 manifest 文件** - 文本编辑器打开 `native-host/manifest.json` 文件；修改 `path` 字段值，指向 `native-host/start.bat` （仅 Windows OS 下支持相对路径）。
4. **配置 start.bat 文件** - 文本编辑器打开 `native-host/start.bat` 文件，修改本地程序启动路径为编译生成的 jar 文件（ Java 程序默认生成的 jar 位于 `native-host/out/artifacts/native_host_jar/native-host.jar` ）。

### 运行测试

1. **连接本地 Java 程序** - 点击 Firefox 浏览器 *Native Message For Java* 临时扩展的“重新载入”按钮，本地 Java 程序将被启动并与 Firefox 浏览器建立连接。
2. **启动网页元素选择器** - Firefox 浏览器打开任意网页，点击本地 Java 程序上的按钮，使用鼠标进行页面元素选取。

### 其他

- Java 项目 `native-host` 通过 Maven 进行构建，推荐通过 IntelliJ IDEA 打开，使用 `Build -> Build Artifacts...` 进行构建打包，以及进一步开发调试。

