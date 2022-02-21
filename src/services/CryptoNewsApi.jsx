import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '0a1bf2b15dmsh4d956f4e0797547p1faab4jsnb0b6aaeb29da'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});



export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`),

        })
    })
});

export const { useGetCryptoNewsQuery} = cryptoNewsApi;


