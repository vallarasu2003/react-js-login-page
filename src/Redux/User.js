import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [], // Store multiple users
    loggedInUser: null, // Store the logged-in user
};

const userSlice = createSlice({
    name: "user",
    initialState ,
    reducers: {
        registerUser: (state, action) => {
            state.users.push(action.payload); // Add new user to the list
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find((user) => user.email === email && user.password === password);
            if (user) {
                state.loggedInUser = user; // Store logged-in user
            }
        },
        logoutUser: (state) => {
            state.loggedInUser = null;
        }
    }
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
