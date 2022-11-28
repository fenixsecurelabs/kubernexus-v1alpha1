import { withStyles } from "@mui/material";

export const providerStyles = (theme) => ({
    root: {
        padding: "170px 0px",
        textAlign: "center",
    },
    container: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(5),
    },
    logo: {
        width: theme.spacing(50),
        maxWidth: "100%",
        height: "auto",
    },
    modalHeading: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    providerLink: {
        color: "darkcyan",
        cursor: "pointer",
        fontWeight: 700,
    },
    providerDesc: {
        whiteSpace: "pre",
    },
    chartTitle: {
        fontWeight: 700,
    },
    providerTitle: {
        fontWeight: 700,
    },
    providerDivider: {
        backgroundColor: "#c1c8d2",
        marginLeft: "10px",
        marginRight: "10px"
    },
    providerDisabled: {
        // color: "darkcyan",
        display: "flex",
        justifyContent: "space-between",
    },
    circularProgress: {
        color: "white",
        marginRight: 8
    }
});

const DialogTitle = withStyles(providerStyles)((props) => {
    const { children, classes, onCLose, ...other } = props;
    return (
        <div />
    )
})

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))

const DiaglogActions = withStyles((theme) => ({
    root: {
        padding: theme.spacing(1)
    },
}))