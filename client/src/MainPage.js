import React from "react";
import SearchBar from "./components/Searchbar";
import { useGetDataQuery } from './store/dataApi'

function MainPage(){

    const { data, error, isLoading } = useGetDataQuery();

    if (isLoading) {
        return(
            <progress className="progress is-primary" max="100"></progress>
        )
    }

return (
    <>
    <h1>Nick Wagemann Assesment</h1>
    <SearchBar placeholder="Enter a title..." data={data} />
    </>
)
}

export default MainPage;