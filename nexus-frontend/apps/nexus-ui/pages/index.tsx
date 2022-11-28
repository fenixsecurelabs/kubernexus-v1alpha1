import { NoSsr } from '@mui/material';
import Head from 'next/head';
import { Component } from 'react';
import { connect, Provider } from 'react-redux'
import { getPath } from "../../../packages/lib/path"
import DashboardComponent from '../components/DashboardComponent';
import { store } from '../lib/store';

class Index extends Component {
  componentDidMount() {
    console.log(`path: ${getPath()}`);
    // this.props.updatepagepath({ path : getPath() });
  }

  render() {
    return (
      <NoSsr>
        <Head>
          <title>Dashboard | Meshery</title>
        </Head>
        <Provider store={store}>
          <DashboardComponent />
        </Provider>
      </NoSsr>
    );
  }
}

export default Index;