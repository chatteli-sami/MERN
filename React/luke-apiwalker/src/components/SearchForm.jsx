import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const SearchForm = ({setResource, setId}) => {
    const navigate = useNavigate()
    const [searchResource, setSearchResource] = useState('people')
    const [searchId, setSeachId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setResource(searchResource)
        setId(searchId)
        navigate(`/${searchResource}/${searchId}`)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Search For :
                <select value={searchResource} onChange={(e) => setSearchResource(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="starships">Starships</option>
                </select>
            </label>
            <label>
                ID :
                <input type="number" value={searchId} onChange={(e) => setSeachId(e.target.value)}/>
            </label>
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchForm