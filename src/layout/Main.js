import React from 'react';
import {axiosCall} from '../common/apiService';


const Main = (props) => {
    return (
        <>
            <h3>안녕하세요. 메인페이지 입니다.</h3>
            <button onClick={() => axiosCall("/hello","hello")}>hello</button>
            <button onClick={() => axiosCall("/hello2","hello2")}>hello2</button>
            <button onClick={() => axiosCall("/hello3","hello3")}>hello3</button>
        </>
    );
};


window.hello = (response) => {
    alert(response.data.message);
};
//
window.hello2 = (response) => {
    alert(response.data.message);
};

window.hello3 = (response) => {
    alert(response.data.message);
};

export default Main;