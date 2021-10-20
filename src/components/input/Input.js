import React from 'react'

export default function Input(props) {
    return (
        <input type={props.type} value={props.value} name={props.name} placeholder={props.placeholder} onChange={props.onChange} onBlur={props.onBlur} />
    )
}
