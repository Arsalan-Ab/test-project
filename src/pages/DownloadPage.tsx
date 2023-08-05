import { Box, MenuItem, Select, useTheme } from "@mui/material";
import NavItem from "../components/Navitem";
import useNavItem from "../hooks/useItem";
import { colors } from "../constants/colors";
import { useTranslation } from "react-i18next";

const DownloadPage = () => {
    const items = useNavItem();
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    document.body.dir = i18n.dir();

    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
        console.log(i18n.language);
        document.body.dir = i18n.dir();
        theme.direction = i18n.dir();
        console.log(theme.direction);
    };
    return (
        <>
            <Box bgcolor={colors.navColor} className="h-full w-1/6 p-2 mb-4">
                <Box>{items}</Box>
            </Box>

            <Box className="flex gap-2 items-center">
                <Box>{t("change_language")}</Box>
                <Box>
                    <Select
                        size="small"
                        onChange={(event) => changeLanguage(event.target.value)}
                        defaultValue={"fa-IR"}
                    >
                        <MenuItem value={"fa-IR"}>فارسی</MenuItem>
                        <MenuItem value={"en-Us"}>english</MenuItem>
                    </Select>
                </Box>
            </Box>
        </>
    );
};

export default DownloadPage;
