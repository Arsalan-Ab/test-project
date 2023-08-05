import { createTheme } from "@mui/material/styles";
import i18n from "../i18n/i18n";

export const theme = createTheme({
    direction: i18n.dir(),
    typography: {
        fontFamily: "Vazir",
    },
});
