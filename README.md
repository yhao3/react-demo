# 前期的知識準備

---

1. JavaScript
2. HTML + CSS
3. 構建工具: Webpack
    
    http://yunp.top/init/p/v/1
    
    功能: ex 可自動刷新
    
4. 安裝 node
    
    npm
    
    http://yump.top/init/p/v/1
    
5. cnpm 命令: 
    
    http://npm.taobao.org/
    
6. 官方文檔: 
    
    http://reactjs.org/docs/hello-world.html
    

# 創建 React 專案

---

```java
npm create-react-app
```

```java
cd react-demo
```

```java
npm start
```

# 環境介紹

---

- node-module: 非常肥
- public: 入口文件
- src: 源碼文件

# React 基礎知識

---

## JSX 語法介紹

- 參數為一個「標籤」，而非字串、物件等
- JSX 語法 = JavaScript + XML
- 解讀 JSX 語法:
    - 遇到 `<>`: 按照 XML 語法解析
    - 遇到 `{}`: 按照 JavaScript 語法解析
    - 
- ex:
    
    ```jsx
    ReactDOM.render(<h1>Hello React!<h1>, document.getElementById('root'));
    // 錯誤的: 
    ReactDOM.render(~~"<h1>Hello React!<h1>"~~, document.getElementById('root'));
    ```
    
    添加變數: 
    
    ```jsx
    const xxx = "React"
    ReactDOM.render(<h1>Hello {xxx}!<h1>, document.getElementById('root'));
    ```
    

## 元素渲染 render function

```jsx
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is { new Date().toLocalTimeString() }</h2>
        <div>
    )
    ReactDOM.render(element, document.getElementById('root')); // 正確擺放位置，擺這裡 tick function 才會被調用
}
setInterval(tick, 1000);

~~ReactDOM.render(element, document.getElementById('root'));~~ // 錯誤擺放位置
```

## 組件

- 組件的副檔名可以是.js，也可以是.jsx
    
    <aside>
    💡 但.js不會有提示
    
    </aside>
    
- ex:
    - Home.jsx
        
        ```jsx
        import React from "react"
        
        export default class Home extends React.Component {
        	render() {
        		return (
        			<div>Home</div>
        		)
        	}
        }
        ```
        
    - app.jsx
        
        ```jsx
        import React from "react"
        import Home from "./Home" // Component 之間可以互相引用
        
        // 用類別的形式創建組件，Hook 形式: 
        class App extends React.Component {
        	// 渲染函式
        	render() {
        		return (
        			<div>
        				<h1>Hello React Component</h1>
        				<h3>learning React...</h3>
        				<Home /> // 以標籤形式使用引用的組件(Component)
        			</div>
        		)
        	}
        }
        
        export default App
        ```
        

## porps 屬性

- Component 的複用性很重要
- app.jsx
    
    ```jsx
    import React from "react"
    import Home from "./Home" // Component 之間可以互相引用
    import MyNav from "./MyNav"
    
    // 用類別的形式創建組件，Hook 形式: 
    class App extends React.Component {
    	// 渲染函式
    	render() {
    
            const nav1 = ["首頁", "學習", "影片"];
            const nav2 = ["WEB", "Java", "Node"];
    
    		return (
    			<div>
    				<h1>Hello React Component</h1>
    				<h3>learning React...</h3>
    				<Home /> {/* 以標籤形式使用引用的組件(Component) */}
                    <MyNav nav={ nav1 } title="路徑導航"/>
                    <MyNav nav={ nav2 } title="學習導航"/>
    			</div>
    		)
    	}
    }
    
    export default App
    ```
    
- MyNav.jsx
    
    ```jsx
    import React from "react";
    
    // props 不可以被 MyNav.jsx 修改 (因為它屬於 app.jsx，不屬於 MyNav.jsx，故只能使用不能修改 )
    export default class MyNav extends React.Component {
        render() {
            console.log(this.props.nav);
            return (
            <div>
                {/* jsx 語法 */}
                <h3>{ this.props.title }</h3>
                <ul>
                    {
                        // this.prop.nav 為 app.jsx 中宣告的陣列
                        // map 遍歷陣列，屬性(1): 當前元素; 屬性(2): 當前元素的index
                        this.props.nav.map((element, index) => {
                            return <li key={index}>{ element }</li>
                        })
                    }
                </ul>
            </div>
            )
        }
    }
    ```
    

## State

- StateComponent.jsx
    
    ```jsx
    import React from "react";
    
    export default class StateComponent extends React.Component {
        /**
         * 組件中的狀態: state
         * 1. 以前我們操作頁面的元素的變化，都是修改 DOM，操作 DOM
         * 2. 但是有了 React 後，我們不再推薦操作 DOM，頁面元素的改變使用 State 進行處理
         */
    
        constructor(prop) {
            super(prop);
            // 定義
            this.state = {
                count: 10, 
                flag: true // default: true
            }
        }
    
        increment() {
            // setState
            this.setState({
                count: this.state.count += 1
            })
        }
        
        decrement() {
            // setState
            this.setState({
                count: this.state.count -= 1
            })
        }
    
        clickHandler = () => {
            console.log(this);
        }
    
        changeFlag() {
            this.setState({
                flag: this.state.flag = !this.state.flag
            })
        }
        
        render() {
            let showView = this.state.flag ? '我是孫悟空' : '我是豬八戒'
            return (
                <div>
                    <h3>Component's State</h3>
                    <p>{ this.state.count }</p>
                    <button onClick={ this.increment.bind(this) }>增加</button>
                    <button onClick={ this.decrement.bind(this) }>減少</button>
                    <button onClick={ this.clickHandler }>ABOUT this</button>
                    <p>{ showView }</p>
                    <button onClick={ this.changeFlag.bind(this) }>change flag</button>
                </div>
            )
        }
    }
    ```
    
- app.jsx
    
    ```jsx
    import React from "react"
    import Home from "./Home" // Component 之間可以互相引用
    import MyNav from "./MyNav"
    import StateComponent from "./StateComponent";
    
    // 用類別的形式創建組件，Hook 形式: 
    class App extends React.Component {
    	// 渲染函式
    	render() {
    
            const nav1 = ["首頁", "學習", "影片"];
            const nav2 = ["WEB", "Java", "Node"];
    
    		return (
    			<div>
    				<h1>Hello React Component</h1>
    				<h3>learning React...</h3>
    				<Home /> {/* 以標籤形式使用引用的組件(Component) */}
                    <MyNav nav={ nav1 } title="路徑導航"/>
                    <MyNav nav={ nav2 } title="學習導航"/>
                    <StateComponent />
    			</div>
    		)
    	}
    }
    
    export default App
    ```