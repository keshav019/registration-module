import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "./personalDetails.js";
import addressDetailsReducer from "./addressDetails.js";
import academicDetailsReducer from "./academicsDetails.js";
const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    addressDetails: addressDetailsReducer,
    academicsDetails:academicDetailsReducer
  },
});
export default store;