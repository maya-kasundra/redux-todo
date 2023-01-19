import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";

// import reducers  from "./reducers/index";
import reducer from "./reducers";

// const store = configureStore(reducer);


 const store = configureStore({
    reducer
  })
  export default store;

  