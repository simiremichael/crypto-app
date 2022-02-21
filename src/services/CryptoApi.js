import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '0a1bf2b15dmsh4d956f4e0797547p1faab4jsnb0b6aaeb29da'
};
    
const baseUrl = 'https://coinranking1.p.rapidapi.com';
    



const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchanges: builder.query({
            query: (uuid) => createRequest(`/coins/${uuid}/exchanges`),
          }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
          }),
        getCryptoHistory: builder.query({
            query: ({uuid, timePeriod}) => createRequest(`/coin/${uuid}/history?timeperiod=${timePeriod}`),
        }),
    })
});

export const { useGetCryptosQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;
