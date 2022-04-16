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