import React, { memo } from 'react'

const UseCallbackChildWithProps = ({Learning}) => {
    console.log("===UseCallbackChildWithProps Component===")
    return (
        <div>UseCallbackChildWithProps Component</div>
    )
}

export default memo(UseCallbackChildWithProps);