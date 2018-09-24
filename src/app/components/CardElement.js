import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "bootstrap-4-react";

const CardElement = props => {
    const { data } = props;

    const cards = data.map(path => (
        <Col md={4} sm={12} key={path} className="image-grid">
            <img src={path} alt={path} />
        </Col>
    ));

    return <Row className="row-margin-top">{cards}</Row>;
};

CardElement.defaultProps = {
    data: []
};

CardElement.propTypes = {
    data: PropTypes.array
};

export default CardElement;
