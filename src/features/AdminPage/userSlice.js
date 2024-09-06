import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        clearUser: (state) => {
            state.user = null;
        },
    },
});

// middle ware to fetch the user
export const fetchUserAsync = (token) => (dispatch) => {
    try {
        console.log(token);
        fetch(`http://localhost:4000/user?token=${token}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("User not found");
                }
            })
            .then((data) => {
                console.log(data);
                dispatch(setUser(data));
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
};

// get user from the store state
export const selectUser = (state) => state.user.user;

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
