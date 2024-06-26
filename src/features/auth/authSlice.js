// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import authService from './authService';
// import { toast } from 'react-toastify';

// const getUserFromLocalStorage = () => {
//   if (typeof window !== 'undefined') {
//     const user = localStorage.getItem('user');
//     return user ? JSON.parse(user) : null;
//   }
//   return null;
// };

// const initialState = {
//   user: getUserFromLocalStorage(),
//   isLoading: false,
//   isSuccess: false,
//   isError: false,
//   message: '',
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async (user, ThunkAPI) => {
//     try {
//       return await authService.register(user);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return ThunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const login = createAsyncThunk('auth/login', async (user, ThunkAPI) => {
//   try {
//     return await authService.login(user);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();

//     return ThunkAPI.rejectWithValue(message);
//   }
// });

// export const logout = createAsyncThunk('auth/logout', async (ThunkAPI) => {
//   try {
//     return await authService.logout();
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();

//     return ThunkAPI.rejectWithValue(message);
//   }
// });

// export const resetPassword = createAsyncThunk(
//   'auth/resetPassword',
//   async (user, ThunkAPI) => {
//     try {
//       return await authService.resetPassword(user);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return ThunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const verifyResetPassword = createAsyncThunk(
//   'auth/verifyResetPassword',
//   async (userData, ThunkAPI) => {
//     try {
//       return await authService.verifyResetPassword(userData);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return ThunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//       state.isError = false;
//       state.message = '';
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.user = null;
//       })
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//         toast.success('logged in');
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.user = null;
//         toast.error(action.payload);
//       })
//       .addCase(resetPassword.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(resetPassword.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         toast.success(action.payload.message);
//       })
//       .addCase(resetPassword.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         toast.error(action.payload);
//       })
//       .addCase(verifyResetPassword.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(verifyResetPassword.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         toast.success(action.payload.message);
//       })
//       .addCase(verifyResetPassword.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         toast.error(action.payload);
//       });
//   },
// });

// export const { reset } = authSlice.actions;
// export default authSlice.reducer;
