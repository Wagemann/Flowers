import React, { useState} from "react";
import { Link } from "react-router-dom"
import Card from './Card'


function SearchBar({placeholder, data}){

    const [FilteredData, setFilteredData] = useState([]);
    const handleFilter = (event) =>{
        const searchWord = event.target.value
        const newFilter = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === ""){
            setFilteredData([])
        } else{
            setFilteredData(newFilter);
        }

    }

    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
                </div>
                {/* { FilteredData.length != 0 && (
                <div className="dataResult">
                    {FilteredData.slice(0,10).map((value)=>{
                        return <div key={value.id}><p className="dataItem">{value.title}</p></div>
                        
                    })}

                </div>

                )} */}
            <div className="row">
                {FilteredData.map(d=>{
                    return(
                        <div key={d.id} className="col">
                        <Link style={{textDecoration: 'none' }} to ={`/update/${d.id}/`}>
                            <Card
                            id={d.id}
                            title={d.title}
                            body={d.body}
                            />
                            </Link>
                        </div>
                    )
                })}
                
            </div>    
            </div>
            
    )
}

export default SearchBar;