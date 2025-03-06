import React, {useContext} from 'react'
import { NameContext } from './NameContext'
import './Form.css'

const Form = () => {
    const {name, setName} = useContext(NameContext)

    return(
        <div>
            <label>Your Name :</label>
            <input type="text" value={name} onChange={ (e) => setName(e.target.value)}/>
        </div>
    )
}

export default Form