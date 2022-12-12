import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clblbtp7u0gds01uk107vf2yx/master',
    cache: new InMemoryCache()
})