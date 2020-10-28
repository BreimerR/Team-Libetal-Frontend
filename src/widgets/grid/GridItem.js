import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import View from "../../modules/repos/contributions/View";

export default class GridItem extends Component {

    static sizeType = PropTypes.oneOfType(
        [
            PropTypes.bool,
            PropTypes.oneOf(
                ["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            )
        ]
    );

    static propTypes = {
        ...View.propTypes,
        xs: GridItem.sizeType,
        xm: GridItem.sizeType,
        xl: GridItem.sizeType,
        sm: GridItem.sizeType,
        flexGrow: PropTypes.number
    };

    render() {
        let {
            overflowY,
            backgroundColor,
            flexGrow,
            xs,
            xm,
            xl,
            sm = xm,
            ...props
        } = this.props;

        let style = View.extractStyles(this.props);

        if (flexGrow !== undefined) style.flexGrow = flexGrow || style.flexGrow;

        return (
            <Grid
                xs={xs}
                sm={sm}
                xl={xl}
                style={style}
                item
                {...props}
            />
        );
    }
}