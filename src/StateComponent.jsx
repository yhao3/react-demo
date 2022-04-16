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