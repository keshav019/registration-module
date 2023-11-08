import { createSlice } from "@reduxjs/toolkit";


const initialState = {
};
const addressDetailsSlice = createSlice({
    name: "addressDetails",
    initialState,
    reducers: {
        addAddressDetails(state, action) {
            return { ...action.payload };
        }
    }
});

export const {addAddressDetails } = addressDetailsSlice.actions;
export default addressDetailsSlice.reducer;