import React from 'react'

const Header= React.memo(function Header(props){
    return <div>{props.title}</div>
})

export {Header}