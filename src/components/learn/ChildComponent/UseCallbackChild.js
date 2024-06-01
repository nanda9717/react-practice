import React, { memo } from 'react'

const UseCallbackChild = () => {
    console.log("===UseCallbackChild Component===")
    return (
        <div>UseCallbackChild Component</div>
    )
}

export default memo(UseCallbackChild);
