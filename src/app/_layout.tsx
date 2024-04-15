import { Slot, Stack } from "expo-router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://noordgouwe.eu-central-a.ibm.stepzen.net/api/gaudy-waterbuffalo/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "apikey noordgouwe::local.net+1000::54d15b5ebb87b598ce264fce857d372e053929df8d61e010041e95855ba1f488",
  },
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
};

export default RootLayout;
