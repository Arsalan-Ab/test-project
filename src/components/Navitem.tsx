import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, BoxProps, Collapse } from "@mui/material";
import { ReactNode, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DownloadForm from "./DownloadForm";
import { useTranslation } from "react-i18next";

export interface ItemProps extends BoxProps {
    name: string;
    icon?: ReactNode;
    link: string;
    clickHandle?: Function;
    childs?: ItemProps[];
}

const NavItem = ({ name, icon, link, clickHandle, childs }: ItemProps) => {
    const [open, setOpen] = useState(false);
    const [downloadOpen, setDownloadOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Link to={link}>
                <ListItemButton
                    onClick={
                        clickHandle
                            ? () => clickHandle(downloadOpen, setDownloadOpen)
                            : undefined
                    }
                    sx={{ color: "#FFFFFF" }}
                >
                    <ListItemIcon sx={{ color: "#FFFFFF" }}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={name} />
                    <Box>
                        {childs &&
                            (open ? (
                                <ExpandLess onClick={handleClick} />
                            ) : (
                                <ExpandMore onClick={handleClick} />
                            ))}
                    </Box>
                </ListItemButton>
            </Link>
            {childs?.map((item, index) => (
                <Collapse key={index} in={open} timeout="auto">
                    <List>{NavItem(item)}</List>
                </Collapse>
            ))}
            <DownloadForm open={downloadOpen} setOpen={setDownloadOpen} />
        </>
    );
};

export default NavItem;
