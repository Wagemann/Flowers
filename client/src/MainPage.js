import {React}from "react";
import SearchBar from "./components/Searchbar";
import { useGetDataQuery } from './store/dataApi'
import { addData } from "./store/dataReducer";

import { useDispatch, useSelector } from "react-redux";


function MainPage(){
    const { data, error, dataIsLoaded } = useGetDataQuery();
    const { dataItems } = useSelector((state) => state.dataCart);
    const dispatch = useDispatch();

    if (data && dataItems.length === 0){
        dispatch(addData(data))
    } else {
        console.log("No Data")
    }
    
return (
    <>
    <h1>Nick Wagemann Assesment</h1>
    <SearchBar placeholder="Enter a title..." data={dataItems} />
    </>
)
}

export default MainPage;