import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const fetchingApi = createApi({
    reducerPath: 'fetchingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api'
    }),

    endpoints: (build) => ({
        //login user
        login: build.mutation({
            query: (data) => ({
                url:'/users/login',
                method: 'POST',
                body: { ...data }
            })
        }),

        //register user
        register: build.mutation({
            query: (data) => ({
                url: '/users/register',
                method: 'POST',
                body: { ...data }
            })
        }),

        //get exercises
        getExercises: build.query({
            query: () => '/exercises'
        }),

        getSingleExercise: build.query({
            query: (id) => `/exercises/${id}`
        }),

        //get selfCare data
        getSelfCare: build.query({
            query: () => `/selfcare`
        })
    })
});

export const { useLoginMutation, useRegisterMutation, useGetExercisesQuery, useGetSingleExerciseQuery, useGetSelfCareQuery } = fetchingApi
