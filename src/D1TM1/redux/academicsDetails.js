import { createSlice } from "@reduxjs/toolkit";


const initialState = {
};
const academicDetailsSlice = createSlice({
    name: "academicDetails",
    initialState,
    reducers: {
        addAcademicsDetails(state, action) {
            return { ...action.payload };
        }
    }
});

export const {addAcademicsDetails } = academicDetailsSlice.actions;
export default academicDetailsSlice.reducer;