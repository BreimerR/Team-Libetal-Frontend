import * as React from "react";
import PropTypes from "prop-types";

export default class View extends React.Component {


    static propTypes = {
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        paddingLR: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        paddingTB: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        paddingLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        paddingRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        paddingTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        marginLR: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        marginTB: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    };

    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    /*TODO wrap with fragment to provide for trial HOC*/
    getLayout(props) {
        throw new Error(`Implement getLayout for ${this}`);

    }

    render() {
        return this.getLayout(this.props);
    }

    static extractStyles(props) {
        let {
            style: {
                backgroundColor: sBackgroundColor,
                margin: sMargin,
                marginLeft: sMarginLeft,
                marginRight: sMarginRight,
                marginBottom: sMarginBottom,
                marginTop: sMarginTop,
                padding: sPadding,
                paddingLeft: sPaddingLeft,
                paddingRight: sPaddingRight,
                paddingTop: sPaddingTop,
                paddingBottom: sPaddingBottom,
                minHeight: sMinHeight,
                minWidth: sMinWidth,
                ...style
            } = {},
            backgroundColor = sBackgroundColor,
            padding = sPadding,
            paddingLR = padding,
            paddingTB = padding,
            paddingLeft = paddingLR || sPaddingLeft,
            paddingRight = paddingLR || sPaddingRight,
            paddingTop = paddingTB || sPaddingTop,
            paddingBottom = paddingTB || sPaddingBottom,
            margin = sMargin,
            marginLR = margin,
            marginTB = margin,
            marginLeft = marginLR || sMarginLeft,
            marginRight = marginLR || sMarginRight,
            marginTop = marginTB || sMarginTop,
            marginBottom = marginTB || sMarginBottom,
            minWidth

        } = props;

        style = {
            ...style,
            backgroundColor,
            padding,
            paddingLR,
            paddingTB,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
            margin,
            marginLR,
            marginTB,
            marginLeft,
            marginRight,
            marginTop,
            marginBottom,
            minWidth
        };

        return style;
    }
}