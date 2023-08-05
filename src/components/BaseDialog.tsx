import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogProps,
} from "@mui/material";

interface BaseDialogProps extends DialogProps {
    title: string;
    actions?: React.ReactNode;
}

const BaseDialog = ({
    title,
    actions,
    children,
    ...other
}: BaseDialogProps) => {
    return (
        <Dialog {...other}>
            <DialogContent>
                <DialogContentText
                    fontSize={20}
                    color="black"
                    marginBottom="0.9rem"
                >
                    {title}
                </DialogContentText>
                {children}
            </DialogContent>
            <DialogActions>{actions}</DialogActions>
        </Dialog>
    );
};

export default BaseDialog;
