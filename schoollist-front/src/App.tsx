import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { SchoolListPage } from "./pages/SchoolListPage";
import { client } from "./services/apolloClient";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client={client}>
        <SchoolListPage />
      </ApolloProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
