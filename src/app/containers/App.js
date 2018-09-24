import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "bootstrap-4-react";

import { apiCallRequest } from "../actions";
import CardElement from "../components/CardElement";

class App extends Component {

    render() {
        const { onRequestDogs, data, fetching } = this.props;

        return (
            <Container>
                <Row className="row-margin-top">
                    <Col col="md-12" text="center">
                        <h2>React Redux Sass Boilerplate</h2>
                    </Col>
                </Row>
                <Row className="row-margin-top">
                    <Col col="md-12" text="center">
                        <Button primary lg onClick={onRequestDogs}>
                            {fetching ? "Fetching..." : "Fetch Data"}
                        </Button>
                    </Col>
                </Row>
                {data ? <CardElement data={data} /> : null}
            </Container>
        );
    }

}

App.defaultProps = {
    data: null
};

App.propTypes = {
    onRequestDogs: PropTypes.func.isRequired,
    data: PropTypes.array,
    fetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { fetching, data, error } = state.appReducer;

    return {
        fetching: fetching,
        data: data,
        error: error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestDogs: () => dispatch(apiCallRequest())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
