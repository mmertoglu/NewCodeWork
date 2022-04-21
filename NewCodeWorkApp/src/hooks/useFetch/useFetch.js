import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    

     const fetchData =  async () => {
        
      
        try {
            const { data: responseData } = await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setError(err.message);
            setLoading(false)
        }
        


    }
    useEffect(()=> {
        fetchData()
    }, [url])
    return {data,loading,error,fetchData}
}
export default useFetch;