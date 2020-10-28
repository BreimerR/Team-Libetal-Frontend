import React, {Component} from "react";
import {Chip} from "@material-ui/core";
import PropTypes from "prop-types";
import View from "../../modules/repos/contributions/View";

export default class MaterialChip extends Component {


    static propTypes = {
        ...View.propTypes,
        fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        size: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        label: PropTypes.string.isRequired,
        onDelete: PropTypes.func
    };
    static defaultProps = {
        color: "secondary",
        size: "small"

    };

    render() {

        let {
            props: {
                style: {
                    fontSize: sFontSize
                } = {},
                fontSize = sFontSize,
                ...props
            }
        } = this;

        let style = View.extractStyles(this.props);

        style.fontSize = fontSize;

        return (
            <Chip style={style} {...props} />
        );
    }

}