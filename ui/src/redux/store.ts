import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { commentsApi } from './api/commentsApi';
import { postApi } from './api/postApi';
import { usersApi } from './api/usersApi';
import { postSlice } from './features/postSlice';
import { userSlice } from './features/userSlice';

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [userSlice.name]: userSlice.reducer,
        [postSlice.name]: postSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([usersApi.middleware, postApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
