import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://renewed-glowworm-64.hasura.app/v1/graphql",
    cache: new InMemoryCache({ addTypename: false }),
    headers: {
        "x-hasura-admin-secret":
            "d4uArBZ3NzOpz1IzdX4cQmGtk2u5Be1j0wFpZsjRGLJi6xeBjC36yo8ZHlKu9cis",
    },
});