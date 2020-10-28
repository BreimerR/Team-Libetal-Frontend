import React from "react";
import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import View from "../modules/repos/contributions/View";


export default class MaterialTextView extends React.Component {


    static propTypes = {
        ...View.propTypes,
        textAlign: PropTypes.oneOf(["left", "right", "center"]),
        textColor: PropTypes.string,
        text: PropTypes.string,
        variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "small", "body", "body1", "body2", "caption"]),
        fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    static  defaultProps = {
        style: {}
    };

    constructor(props) {
        super(props);
        this.ref = React.createRef();

    }

    render() {

        let {
            text,
            variant,
            style: {fontSize: cFontSize, sColor, textAlign: sTextAlign},
            textAlign = sTextAlign,
            fontSize = cFontSize,
            textColor = sColor,
            color = textColor,
            ...props
        } = this.props;

        let style = {
            ...View.extractStyles(this.props),
            textAlign,
            fontSize,
            color
        };

        return (
            <Typography
                {...props}
                style={style}
                variant={variant}>
                {text}
                {this.props.children}
            </Typography>
        );
    }
}