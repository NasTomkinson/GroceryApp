import { Stack } from "expo-router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="styleguide" options={{ headerShown: true, title: "Styleguide"}} />
      </Stack>      
    </ApolloProvider>

  );
}
