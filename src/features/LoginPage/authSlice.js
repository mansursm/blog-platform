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
        state.token = action.payload.token;
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
    fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            // throw error from the server
            return res.json().then((data) => {
                console.log(data);
                throw new Error(data.error);
            });
        }
    })
    .then((data) => {
        console.log(data);  // token
        dispatch(login(data));
        dispatch(setErrorMessage(''));
    })
    .catch((error) => {
        dispatch(setErrorMessage(error.message));
    });
    
};

export const logoutAsync = () => (dispatch) => {
    // Make an API call to logout the user
    // If the user is logged out, dispatch the logout action
    dispatch(logout());
}

// registration thunks
export const registerAsync = ( email, password) => (dispatch) => {
    fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Registration failed');
        }
    })
    .then((data) => {
        console.log(data);  
        // token is returned from the server
        dispatch(login(data));
        // clear the error message
        dispatch(setErrorMessage(''));
    })
    .catch((error) => {
        // set the error message
        dispatch(setErrorMessage(error.message));
    });
    
}

// authentication selectors
export const { login, logout, setErrorMessage } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export const selectToken = (state) => state.auth.token;

export const selectErrorMessage = (state) => state.auth.errorMessage;

export default authSlice.reducer;   

