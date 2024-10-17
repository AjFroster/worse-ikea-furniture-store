import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
    black: "black",
    lofi: "lofi",
};

const getUserFromLocalStorage = () =>{
    return JSON.parse(localStorage.getItem("user") || null);
}

const getLocalStorageTheme = () => {
    const theme = localStorage.getItem("theme") || themes.lofi;
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
};

const initialState = {
    user: getUserFromLocalStorage(),
    theme: getLocalStorageTheme(),

};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            const user = {...action.payload.user, token:action.payload.jwt}
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
            console.log(action.payload)
        },
        logoutUser:(state,action)=>{
            state.user = null
            localStorage.removeItem('user')
            toast.success("Successfully Logged Out User.")

        },
        toggleTheme:(state) =>{
            const {black, lofi} = themes;

            state.theme = state.theme === lofi ? black : lofi
            document.documentElement.setAttribute("data-theme", state.theme);
            localStorage.setItem('theme',state.theme)
        }
    }
})

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions;

export default userSlice.reducer;