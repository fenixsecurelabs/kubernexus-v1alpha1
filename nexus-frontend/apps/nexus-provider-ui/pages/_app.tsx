import App from "next/app";
import getPageContext from "./../../../packages/ui/components/PageContext"
import "../../../packages/ui/styles/globals.css"
import { GlobalStyles, NoSsr, Paper, Typography } from "@mui/material";
import FavioriteIcon from "@mui/icons-material/Favorite"
import Head from "next/head";
import PropTypes from 'prop-types';

type Props = {}
type State = {
  pageContext: any
  mobileOpen: boolean
}

class MesheryProviderApp extends App<Props, State>{
  state: State = {
    pageContext: getPageContext(),
    mobileOpen: false,
  }
  static propTypes: { classes: PropTypes.Validator<object>; };

  componentDidMount(): void {
    // ...
  }

  render() {
    const { Component, pageProps, classes } = this.props;
    return (
      <NoSsr>
        <GlobalStyles styles={{
          body: {
            margin: 0,
            padding: 0
          }
        }} />
        <Head>
          <title>Meshery</title>
        </Head>
        <div>
          <div>
            <main>
              <Paper>
                <Component pageContext={this.pageContext} {...pageProps} />
              </Paper>
            </main>
            <footer>
              <Typography variant="body2" align="center" color={"textSecondary"} component="p">
                <span>
                  Built with
                  {' '}
                  <FavioriteIcon />
                </span>
              </Typography>
            </footer>
          </div>
        </div>
      </NoSsr>
    )
  }
}

MesheryProviderApp.propTypes = { classes: PropTypes.object.isRequired, };

export default MesheryProviderApp