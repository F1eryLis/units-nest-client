import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const uri = 'http://localhost:3000/graphql';

const httpLink = new HttpLink({
    uri,
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:3000/graphql',
    retryAttempts: 5,
    connectionAckWaitTimeout: 2000,
    retryWait: async function waitForServerHealthyBeforeRetry(retryAttempts) {
        if (retryAttempts >= 4) {
            console.debug(`socket:DISCONNECTED ${new Date()}`);
        }
        await new Promise((resolve) => setTimeout(resolve, 5000));
    },
    shouldRetry: (errOrCloseEvent) => {
        console.log("errOrCloseEvent", errOrCloseEvent);
        return true;
    },
    lazy: true,
    keepAlive: 1000,
    on: {
        error: (errors) => {
            console.error(`ERROR: ${JSON.stringify(errors)}`);
        },
        connected: () => {
            console.log(`socket:CONNECTED ${new Date()}`);
        },
        closed: (reason) => {
            console.log(`socket:CLOSED ${new Date()}`);
        },
        connecting: () => {
            console.log(`socket:CONNECTING ${new Date()}`);
        },
        ping: async () => { },
        pong: async () => { }
    }
}));

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});