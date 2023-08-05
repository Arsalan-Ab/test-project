import { Route, Routes } from "react-router-dom";
import "./App.css";
import DownloadPage from "./pages/DownloadPage";
import { CacheProvider } from "@emotion/react";
import { cacheRtl, emptyCache } from "./theme/createEmotionCache";
import { ThemeProvider } from "@mui/system";
import { theme } from "./theme/theme";
import { useTranslation } from "react-i18next";
import "./fonts/Vazir.ttf";
import "./fonts/Vazir-Medium-FD-WOL.ttf";

function App() {
    const { i18n } = useTranslation();
    document.body.dir = i18n.dir();

    return (
        <CacheProvider
            value={document.body.dir === "rtl" ? cacheRtl : emptyCache}
        >
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<DownloadPage />}></Route>
                </Routes>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
