import React from 'react'
import HeaderLinks from './HeaderLinks'

function HeaderTop() {
    const styles = {
        borderBottom:'1.5px solid #8B8B8B',
    }
    return (
        <div style={styles}>
            <HeaderLinks/>
        </div>
    )
}

export default HeaderTop
