import { useState , useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = 'dea24529cf8474c8d';

const useGoogleSearch = (term) => {
    const { data , setData } = useState(null);

    useEffect( () => {
        const fetchData = async() => {
            fetch( // q => query
                `https://www.google.com/customsearch/v1?key=${API_KEY}
                &cx=${CONTEXT_KEY}&q=${term}`
            ).then(response => response.json())
            .then(result => {
                setData(term)
            })
        }
    }, [term] )

    return { data }
};

export default useGoogleSearch;