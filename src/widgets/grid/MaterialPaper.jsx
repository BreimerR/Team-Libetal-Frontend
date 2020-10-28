import React, {Component} from "react";
import View from "../../modules/repos/contributions/View";
import PropTypes from "prop-types";
import {Paper} from "@material-ui/core";

export default class MaterialPaper extends Component {

    static propTypes = {
        ...View.propTypes,
        component: PropTypes.any,
        elevation: PropTypes.number,
        variant: PropTypes.oneOf(["outlined", "elevation"])
    };


    render() {
        let {
            props: {
                elevation,
                variant,
                children,
                component,
                ...props
            }
        } = this;

        return (
            <Paper
                component={component}
                variant={variant}
                elevation={elevation}
                style={View.extractStyles(this.props)}
                {...props}
                children={children}
            />
        );
    }

}