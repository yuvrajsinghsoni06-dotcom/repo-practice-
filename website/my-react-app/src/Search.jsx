import React, { useState, useEffect } from 'react'

function Search() {
    const [search, setsearch] = useState("");
    
    useEffect(() => {
        const getdata = () => {
            console.log("Data has been fetched");
        }
        const timer = setTimeout(getdata, 500);
        console.log(search)
        
        return () => clearTimeout(timer);
    }, [search])

    return (
        <div>
            <input 
                className="btn-1" 
                type="text" 
                placeholder="Search" 
                value={search} 
                onChange={(e) => setsearch(e.target.value)} 
            />
        </div>
    )
}

export default Search