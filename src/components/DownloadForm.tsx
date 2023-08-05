import { Box, Button, Link, Typography } from "@mui/material";
import BaseDialog from "./BaseDialog";
import { useTranslation } from "react-i18next";

interface DownloadFormProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DownloadForm = ({ open, setOpen }: DownloadFormProps) => {
    const { t } = useTranslation();
    return (
        <BaseDialog
            fullWidth
            open={open}
            title={t("files")}
            onClose={() => setOpen(false)}
            actions={
                <Button color="error" onClick={() => setOpen(false)}>
                    <Typography fontSize={16}>{t("close")}</Typography>
                </Button>
            }
        >
            <Box className="flex flex-col gap-5">
                <Box>
                    <Link href="/public/file/file1.txt" download="textFile">
                        {t("file1")}
                    </Link>
                </Box>
                <Box>
                    <Link href="/public/file/file2.txt" download="filmfile">
                        {t("file2")}
                    </Link>
                </Box>
                <Box>
                    <Link href="/public/file/file3.txt" download="musicFile">
                        {t("file3")}
                    </Link>
                </Box>
            </Box>
        </BaseDialog>
    );
};

export default DownloadForm;
