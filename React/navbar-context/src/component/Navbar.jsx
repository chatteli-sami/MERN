import React, {useContext} from 'react'
import {NameContext} from './NameContext'
import './Form.css'


const Navbar = () => {
    const { name } = useContext(NameContext)

    return(
        <div style={{backgroundColor: 'purple', color: 'white', padding: '10px'}}>
            Hi {name} !!
        </div>
    )

}

export default Navbar