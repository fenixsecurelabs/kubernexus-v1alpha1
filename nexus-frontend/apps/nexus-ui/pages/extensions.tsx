import Head from 'next/head'
import Preact from 'preact'
import { Grid, Typography, withStyles } from '@mui/material'
import { connect } from 'react-redux'

const styles = (withTheme) => ({
    a: {},
    button: {
        borderRadius: 5,
        minWidth: 100,
        color: "#fff",
        "&:hover": {
            boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
        },
    },
    card: {
        padding: withTheme.spacing(3),
        borderRadius: withTheme.spacing(1),
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        backgroundColor: "#fff",
        minHeight: "250px",
        position: "relative",
    },
    frontSideDesc: {
        paddingTop: "1rem",
        paddingBottom: "1rem",
        textAlign: "left",
        display: "flex",
        flexDirection: 'row',
    },
    img: {
        paddingRight: "1rem",
        height: "auto",
        width: "auto",
        maxWidth: "120px",
        maxHeight: "120px",
    },
    link: {
        textDecoration: "none",
        color: "#00b39F",
    },
})

const INITIAL_GRID_SIZE = { lg: 6, md: 12, xs: 12 };

const Extensions = ({ classes }) => {
    return (
        <Preact.Fragment>
            <Head>
                <title>Extensios | Meshery </title>
            </Head>
            <Grid>
                <Grid item {...INITIAL_GRID_SIZE}>
                    <div className={classes.card}>
                        <Typography className={classes.frontContent} variant="h5" component="div">
                            {"MeshMap"}
                        </Typography>

                        <Typography className={classes.frontSideDesc} variant="body1">
                            // <img className={classes.img} src="" />
                            Collaboratively design and manage your Kubernetes clusters, service mesh deployments, and cloud native apps.
                            MeshMap is now in private beta. Sign-up today to for early access!
                        </Typography>                        
                    </div>
                </Grid>
            </Grid>
        </Preact.Fragment>
    )
}

export default withStyles(styles)(connect(Extensions));