import HandleRoutes from "./routes/routes";
import GlobalStyle from "./styles/globalStyle";
import DataProvider from "./contexts/contextData";

function App() {
  return (
    <DataProvider>
      <GlobalStyle/>
      <HandleRoutes/>
    </DataProvider>
  );
}

export default App;
