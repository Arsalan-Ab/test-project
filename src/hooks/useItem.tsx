import FileDownloadIcon from "@mui/icons-material/FileDownload";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import NavItem from "../components/Navitem";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";

const useNavItem = () => {
    const { t } = useTranslation();
    const items = [
        {
            name: t("download"),
            icon: <FileDownloadIcon />,
            link: "",
            childs: [
                {
                    name: t("available_item"),
                    icon: <HorizontalRuleIcon />,
                    link: "",
                    clickHandle: (open: string, setOpen: Function) =>
                        setOpen(!open),
                },
            ],
        },
    ];
    const navItem = items.map((item) => {
        return NavItem(item);
    });

    return navItem;
};

export default useNavItem;
