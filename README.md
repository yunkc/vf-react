# vf-react
VF 引擎 React 组件，帮助你快速使用 VF

## 安装

```shell script
npm install @vf.js/react
```

## 使用

```jsx
import VF from '@vf.js/react'

class App extends React.Component {
  render() {
    //更多配置请移步参考: <a href='https://vipkid-edu.github.io/vf-docs/handbook/option.html'/> 
    return <div>
      <VF src={"Your JSON data"} onReady={() => {}} onMessage={() => {}}/>
    </div>
  }
}
```

## 组件事件
**onLoadSuccess**
当 VF 创建成功后触发的事件，会传入一个 `vf` 对象，可以通过 `onLoadSuccess="{() => {}}"` 监听获取

**onLoadFail**
当 VF 创建失败后触发的事件, 会传入一个 `errorMessage`, 可以通过 `onLoadFail="{() => {}}"` 监听获取
