import { Component } from "react";
import { NoSsr } from '@mui/material';
import ProviderComponent from "../components/ProviderComponent";

class Index extends Component {
  componentDidMount(): void {}

  render() {
    return (
      <NoSsr>
        <ProviderComponent />
      </NoSsr>

    )
  }
}

export default Index;