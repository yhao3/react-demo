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