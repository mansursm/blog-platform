// authentication slice
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
        loading: false,
        errorMessage: '',
    },
    reducers: {
        login: (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
        },
        logout: (state) => {
        state.isAuthenticated = false;
        state.token = null;
        },
        setErrorMessage: (state, action) => {
        state.errorMessage = action.payload;
        },
    },
});

// authentication thunks
export const loginAsync = (username, password) => (dispatch) => {
    // Make an API call to authenticate the user
    // If the user is authenticated, dispatch the login action
    // If the user is not authenticated, dispatch the setErrorMessage action
    if (username === 'admin' && password === 'password') {
        dispatch(login('token'));
    } else {
        dispatch(setErrorMessage('The username or/and the password provided is incorrect'));
    }
};

export const logoutAsync = () => (dispatch) => {
    // Make an API call to logout the user
    // If the user is logged out, dispatch the logout action
    dispatch(logout());
}

// authentication selectors
export const { login, logout, setErrorMessage } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export const selectToken = (state) => state.auth.token;

export const selectErrorMessage = (state) => state.auth.errorMessage;

export default authSlice.reducer;   

