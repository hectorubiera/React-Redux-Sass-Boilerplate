import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "bootstrap-4-react";

const ImageGrid = props => {
    const rowStyle = {
        marginTop: "10rem"
    };

    const { images } = props;

    const grid = images.map(path => (
        <Col
            col="md-2"
            key={path}
            className="image-grid"
            style={{ background: `url(${path})` }}
        />
    ));

    return <Row style={rowStyle}>{grid}</Row>;
};

ImageGrid.defaultProps = {
    images: []
};

ImageGrid.propTypes = {
    images: PropTypes.array
};

export default ImageGrid;
