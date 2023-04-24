import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://safe-goshawk-57.hasura.app/v1/graphql",
    cache: new InMemoryCache({ addTypename: false }),
    headers: {
        "x-hasura-admin-secret":
            "FbctAPHfXBWd19HU8T8PHNkL5I5xVcSxVY4M1UI005Poys6iGwQbcBd1caZhhJH1",
    },
});