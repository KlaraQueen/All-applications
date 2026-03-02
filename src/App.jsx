import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { GlobalStyle } from "./core/GlobalStyle/GlobalStyle";
import { ScrollToTop } from "./core/ScrollToTop/ScrollToTop";
import { Home } from "./pages/Home/Home";
import { AppDetail } from "./pages/AppDetail/AppDetail";
import { Regulamin } from "./pages/Regulamin/Regulamin";
import { PolitykaPrywatnosci } from "./pages/PolitykaPrywatnosci/PolitykaPrywatnosci";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aplikacje/:appId" element={<AppDetail />} />
          <Route path="/regulamin" element={<Regulamin />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
