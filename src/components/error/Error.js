import React from 'react'

function Error(props) {
    return (
        <span style={{fontSize:'12px',textAlign:'center',color:'red'}}><i>{props.error}</i></span>
    )
}

export default Error
