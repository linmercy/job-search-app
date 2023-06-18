import { useState, useEffect } from "react";
import axios from 'axios'


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState (false)
    const [error, setError] = useState(null)

    

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': 'efa73eb242msh747cdb49ad98f91p1877a0jsn7b8c84ff1d22',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    }

    const fetchData = async () =>{
        setIsLoading(true);

        try{
            const response = await axios.request(options)

            setData(response.data.data)
            setIsLoading(false)
        } catch (error){
            setError(error)
            alert('There is an error')
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
      fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }
    
    return { data, isLoading, error, refetch}

}

export default useFetch