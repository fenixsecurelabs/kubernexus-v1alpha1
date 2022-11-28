import { NoSsr } from '@mui/material';
import Head from 'next/head';
import { Component } from 'react';
import { Provider } from 'react-redux'
import { getPath } from "../../../packages/lib/path"
import DashboardComponent from '../components/DashboardComponent';
import { store } from '../lib/store';

type Props = {
  updatepagepath: any
}

type State = {
  updatepagepath: any
}

class Index extends Component<Props, State> {
  componentDidMount() {
    console.log(`path: ${getPath()}`);
    this.props.updatepagepath({ path : getPath() });
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