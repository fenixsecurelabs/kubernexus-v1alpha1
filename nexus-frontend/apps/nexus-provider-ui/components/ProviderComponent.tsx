import { Dialog, DialogContent, DialogTitle, NoSsr, Tooltip, Typography } from "@mui/material";
import { Component, Fragment } from "react";
import { dataFetch } from "../../../packages/lib/dataFetch"
import PropTypes from "prop-types";

type Props = {
    availableProviders: {}
    selectedProvider: {}
    anchorRef: null
    classes: ""
}

type State = {
    availableProviders: {}
    selectedProvider: {}
    anchorRef: null
    open: boolean
    modalOpen: boolean
    isLoading: boolean
}

class ProviderComponent extends Component<Props, State> {
    static propTypes: { classes: PropTypes.Validator<object>; };

    state: State = {
        availableProviders: {},
        selectedProvider: {},
        anchorRef: null,
        open: false,
        modalOpen: false,
        isLoading: false
    }

    /**
     * loadProvidersFromServer
     */
    loadProvidersFromServer() {
        const self = this;
        dataFetch(
            "/api/providers",
            {
                method: "GET",
                credentials: "include",
            },
            (result) => {
                if (typeof result !== "undefined") {
                    let selectedProvider = "";
                    Object.keys(result).forEach((key) => {
                        if (result[key]["ProviderType"] === "remote") {
                            selectedProvider = key;
                        }
                    });
                    self.setState({ availableProviders: result, selectedProvider });
                }
            },
            (error) => {
                console.log(`there was an error fetching providers: ${error}`);
            }
        );
    }

    componentDidMount(): void {
        // ...
        this.loadProvidersFromServer();
    }

    /*
    handleClose() {
        const self = this;
        this.anchorRef = null;
        
        return (event) => {
            if (self.anchorRef && self.anchorRef.contains(event.target)) {
                return;
            }
            self.setState({ open: false })
        }
    }
    */
    
    handleModalOpen() {
        const self = this;
        return () => {
            self.setState({ modalOpen: true })
        }

     }

    handleModalClose() {
        const self = this;
        return () => {
            self.setState({ modalOpen: true });
        }
    }

    handleToggle() {
        const self = this;
        return () => {
            self.setState({ open: !self.state.open })
        }
     }

    handleMenuItemClient = (e: any, provider: string) => {
        e.preventDefault()
        this.setState({ selectedProvider: provider, open: false, isLoading: true });
        window.location.href = `/api/provider?provider=${encodeURIComponent(provider)}`
     };

    render(){
        const self = this;
        const { classes } = this.props;
        const { availableProviders, modalOpen, isLoading, open, selectedProvider } = this.state

        return (
            <NoSsr>
                <div>
                    <Typography>
                        Please choose a
                        <Tooltip title="Learn more about providers">
                            <a>
                                {" "}
                                provider{" "}
                            </a>
                        </Tooltip>
                        to continue
                    </Typography>
                    <Dialog
                        onClose={self.handleModalClose()}
                        open={modalOpen}
                        disableScrollLock={true}
                    >
                        <DialogTitle>
                            <b>Choosing a provider</b>
                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                <p>
                                    Login...
                                </p>
                                {Object.keys(availableProviders).map((key) => {
                                    return (
                                        <Fragment>
                                            <p>
                                                <ul>

                                                </ul>
                                            </p>
                                        </Fragment>
                                    )
                                })}
                            </Typography>
                        </DialogContent>
                    </Dialog>
                </div>
            </NoSsr>
        );
    }
}

ProviderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default ProviderComponent;