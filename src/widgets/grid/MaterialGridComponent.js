import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Flex from "../Flex";
import View from "../../modules/repos/contributions/View";

export default class MaterialGridComponent extends Component {

    // noinspection DuplicatedCode
    static propTypes = {
        ...View.propTypes,
        theme: PropTypes.func,
        justify: PropTypes.oneOf([Flex.CENTER, Flex.START, Flex.END, Flex.SPACE_AROUND, Flex.SPACE_BETWEEN, Flex.SPACE_EVENLY, Flex.STRETCH]),
        alignItems: PropTypes.oneOf([Flex.CENTER, Flex.START, Flex.END, Flex.SPACE_AROUND, Flex.SPACE_BETWEEN, Flex.SPACE_EVENLY, Flex.STRETCH]),
        alignContent: PropTypes.oneOf([Flex.CENTER, Flex.START, Flex.END, Flex.SPACE_AROUND, Flex.SPACE_BETWEEN, Flex.SPACE_EVENLY, Flex.STRETCH]),
        spacing: PropTypes.number,
        xs: PropTypes.number,
        xm: PropTypes.number,
        xl: PropTypes.number,
        sm: PropTypes.number,
        lg: PropTypes.number
    };

    render() {
        // noinspection DuplicatedCode
        let {
            justify,
            alignItems,
            alignContent,
            direction,
            theme,
            color,
            sm,
            lg,
            xs,
            xm = sm,
            xl = lg,
            spacing,
            backgroundImage,
            ...props
        } = this.props;

        return (
            <Grid
                container
                style={View.extractStyles(this.props)}
                spacing={spacing}
                justify={justify}
                color={"secondary"}
                alignItems={alignItems}
                direction={this.direction}
                alignContent={alignContent}
                xs={xs}
                sm={xm}
                lg={xl}
                {...props}
            />
        );
    }
}