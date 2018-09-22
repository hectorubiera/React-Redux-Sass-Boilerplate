import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "bootstrap-4-react";

import { fetchingData } from "../actions";
import ImageGrid from "../components/ImageGrid";

class App extends Component {

    render() {
        const { onRequestDogs, dogs, fetching } = this.props;

        const rowStyle = {
            marginTop: "5rem"
        };

        return (
            <Container>
                <Row style={rowStyle}>
                    <Col col="md-12" text="center">
                        <h2>React Redux Sass Boilerplate</h2>
                    </Col>
                </Row>
                <Row style={rowStyle}>
                    <Col col="md-12" text="center">
                        <Button primary lg onClick={onRequestDogs}>
                            {fetching ? "Fetching..." : "Fetch Dog Pictures"}
                        </Button>
                    </Col>
                </Row>
                {dogs ? <ImageGrid images={dogs} /> : null}
            </Container>
        );
    }

}

App.defaultProps = {
    dogs: null
};

App.propTypes = {
    onRequestDogs: PropTypes.func.isRequired,
    dogs: PropTypes.array,
    fetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { fetching, dogs, error } = state.appReducer;

    return {
        fetching: fetching,
        dogs: dogs,
        error: error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestDogs: () => dispatch(fetchingData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
