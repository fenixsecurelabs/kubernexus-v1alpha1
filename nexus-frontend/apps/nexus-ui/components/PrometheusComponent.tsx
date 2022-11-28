import {Component} from "react";
import propTypes from 'prop-types';

const promStyles = () => ({})

type Props = {}
type State = {
    prometheusURL: ""
    selectedPrometheusBoardsConfig: ""
}

class PrometheusComponent extends Component<Props, State> {
    static propTypes: { classes: propTypes.Validator<object>; scannedPrometheus: propTypes.Validator<any[]>; };

    constructor(props: Props) {
        // ...
        super(props)
    }

    componentDidMount(): void {
        const self = this;

        // if (self.props.isMeshConfigured)
    }

    static getDerivedStateFromProps(props: Props, state: State) {
    }

    getKubernetesClusterIDs = () => {
        // return getKubernetesClusterIDsFromCtxID()
    }

    handleChange = () => () => {
    }

    handleError = () => {
    }

    handlePrometheusChipDelete = () => {
    }

    handlePrometheusConfigure = () => {
    }
}

export const submitPrometheusConfigure = (self: any, cb = () => {
}) => {
    const {prometheusURL, selectedPrometheusBoardsConfig} = self.state;
    if (prometheusURL === "") {
        return;
    }

    const data = {prometheusURL,};
    const params = Object.keys(data)
}

PrometheusComponent.propTypes = {classes: propTypes.object.isRequired, scannedPrometheus: propTypes.array.isRequired};

const mapDispatchToProps = () => {
}
const mapStateToProps = () => {
}

export default PrometheusComponent