import {React} from 'react'
import { useState } from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import { GEO_API_URL,api } from '../api/api'
const Find = ({onSearchChange}) => {
    const [search,setSearch] = useState(null)
    const loadOptions = async (inputValue) =>{
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation1000000&namePrefix=${inputValue}`, api)
            const response_1 = await response.json()
            return {
                options: response_1.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ${city.countryCode}`,
                    }
                })
            }
        } catch (error) {
            return console.log(error)
        }
    }
    const handleChange = (searchData) =>{
        setSearch(searchData)
        onSearchChange(searchData)
    }
  return (
    <AsyncPaginate
        placeholder="search for city"
        debounceTimeout = {600}
        value={search}
        onChange = {handleChange}
        loadOptions={loadOptions}
    />
  )
}

export default Find