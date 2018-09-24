import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "bootstrap-4-react";

const ImageGrid = props => {
    const rowStyle = {
        marginTop: "10rem"
    };

    const { images } = props;

    // style={{
    //     background: `url(${path})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "100%",
    //     marginTop: "30px"
    // }}

    const grid = images.map(path => (
            <Col
                md={4}
                sm={12}
                key={path}
                className="image-grid"
            >
            <img src={path} alt={path} />

            </Col>

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
