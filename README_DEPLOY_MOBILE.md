# 甄嬛 MBTI 改命局 · 手机版上线说明

这是手机版独立站点，适合部署成第二个 GitHub Pages 链接。

## 推荐仓库名

```text
zhenhuan-mbti-mobile-demo
```

上线后的链接通常会是：

```text
https://weixian1.github.io/zhenhuan-mbti-mobile-demo/
```

## 上传方式

1. 在 GitHub 新建一个 Public 仓库，仓库名用 `zhenhuan-mbti-mobile-demo`。
2. 点击 `uploading an existing file`。
3. 把 `mobile-site` 文件夹里的内容上传到仓库根目录。
4. 确保 GitHub 仓库第一层能直接看到：

```text
index.html
mobile.css
app.js
assets/
.nojekyll
```

5. 点 `Commit changes`。

## 开启 GitHub Pages

1. 进入仓库 `Settings -> Pages`。
2. `Source` 选择 `Deploy from a branch`。
3. `Branch` 选择 `main`。
4. 目录选择 `/root`。
5. 点 `Save`。

部署完成后，去 `Actions` 看 `pages build and deployment` 是否变成绿色对勾。
