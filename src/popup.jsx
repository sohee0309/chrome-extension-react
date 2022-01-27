import React from "react";
import { render } from "react-dom";

function Popup() { //popup을 호출할 react component 정의
    return (
        <div>
            <h1>간단한 팝업창입니다.</h1>
            <p>This is a simple popup.</p>
        </div>
    );
}

render(<Popup />, document.getElementById("react-target")); // react popup component를 보낼 render 기능 실행, popup.html에서 생성한 ID react-target을 대상으로 함