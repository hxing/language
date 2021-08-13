import {configureStore, createSlice} from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState: {
        lang: localStorage["language"]
    },
    reducers: {
        change: state => {
            state.lang = state.lang === "cn" ? "en" : "cn";
            localStorage["language"] = state.lang;
        }
    }
});

export const store = configureStore({
    reducer: {
        lang: langSlice.reducer
    }
});

export const {change} = langSlice.actions;