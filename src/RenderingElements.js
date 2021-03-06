/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render } from 'react-dom';

// 更新UI的唯一方法是创建一个新的元素
// React只更新必需要更新的部分

function tick(){
    const element = (
        <div>
            <h2>It is {`${new Date()}`}</h2>
            <h2>{new Date().toLocaleDateString()}</h2>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    );

    render(element, document.getElementById('app'));
}

setInterval(tick, 1000);
