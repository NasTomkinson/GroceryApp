import { Stack } from "expo-router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SafeAreaView } from 'react-native-safe-area-context';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="styleguide" options={{ headerShown: true, title: "Styleguide"}} />
          <Stack.Screen name="recipes" options={{  headerShown: false, title: "My Recipes"}}/>
          <Stack.Screen name="recipe/[slug]" options={{ headerShown: false, title: "Recipe"}}/>
        </Stack>
      </SafeAreaView>      
    </ApolloProvider>

  );
}
