import { createSlice } from "@reduxjs/toolkit";

const initialState = {dataItems: []}

export const dataSlice = createSlice({
    name: "dataCart",
    initialState: initialState,
    reducers: {

        addData: (state, payload) => {
            let loadedDataItems = JSON.parse(JSON.stringify(state))
            loadedDataItems.dataItems = payload.payload
            return loadedDataItems
        },

        updateTitleAndBody: (state, payload) => {
            let index = payload.payload.index
            const newArray = JSON.parse(JSON.stringify(state))
            newArray.dataItems[index]["title"] = payload.payload.updatedTitle
            newArray.dataItems[index]["body"] = payload.payload.updatedBody
            return newArray
        },
    }
});
export const { addData , updateTitleAndBody } = dataSlice.actions;

export default dataSlice.reducer;