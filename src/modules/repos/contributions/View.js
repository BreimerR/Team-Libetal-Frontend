import * as React from "react";
import PropTypes from "prop-types";

export default class View extends React.Component {


    static propTypes = {
        color: PropTypes.string,
        flexGrow: PropTypes.oneOfType(
            [
                PropTypes.number,
                PropTypes.oneOf(
                    [
                        "initial",
                        "inherit"
                    ]
                )
            ]),
        borderRadius: PropTypes.number,
        boxSizing: PropTypes.oneOf(["border-box"]),
        display: PropTypes.oneOf(["none", "block", "inline-block", "inline", "flex", "inline-flex"]),
        zIndex: PropTypes.number,
        overflow: PropTypes.string,
        overflowX: PropTypes.string,
        overflowY: PropTypes.string,
        backgroundColor: PropTypes.string,
        position: PropTypes.oneOf(["static", "fixed", "relative", "sticky"]),
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
        minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
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
                zIndex: sZIndex,
                margin: sMargin,
                padding: sPadding,
                boxSizing: sBoxSizing,
                width: sWidth,
                height: sHeight,
                minWidth: sMinWidth,
                position: sPosition,
                minHeight: sMinHeight,
                marginTop: sMarginTop,
                marginLeft: sMarginLeft,
                paddingTop: sPaddingTop,
                paddingLeft: sPaddingLeft,
                backgroundImage: sBackgroundImage,
                overflow: sOverflow,
                overflowX: sOverflowX,
                maxWidth: sMaxWidth,
                maxHeight: sMaxHeight,
                overflowY: sOverflowY,
                marginRight: sMarginRight,
                marginBottom: sMarginBottom,
                borderRadius: sBorderRadius,
                paddingRight: sPaddingRight,
                paddingBottom: sPaddingBottom,
                backgroundColor: sBackgroundColor,
                display: sDisplay,
                ...style
            } = {},
            boxSizing = sBoxSizing || "border-box",
            position = sPosition,
            zIndex = sZIndex,
            width = sWidth,
            height = sHeight,
            backgroundColor = sBackgroundColor,
            borderRadius = sBorderRadius,
            padding = sPadding,
            paddingLR = padding,
            backgroundImageUrl,
            backgroundImage = sBackgroundImage,
            paddingTB = padding,
            // 0 || 10 = 10 this is why not to use paddingLR || sPaddingLeft
            paddingLeft = paddingLR !== undefined ? paddingLR : sPaddingLeft,
            paddingRight = paddingLR !== undefined ? paddingLR : sPaddingRight,
            paddingTop = paddingTB !== undefined ? paddingTB : sPaddingTop,
            paddingBottom = paddingTB !== undefined ? paddingTB : sPaddingBottom,
            overflow = sOverflow,
            overflowX = overflow === undefined ? sOverflowX : overflow,
            overflowY = sOverflowY === undefined ? overflow : sOverflowY,
            margin = sMargin,
            marginLR = margin,
            marginTB = margin,
            marginLeft = marginLR !== undefined ? marginLR : sMarginLeft,
            marginRight = marginLR !== undefined ? marginLR : sMarginRight,
            marginTop = marginTB !== undefined ? marginTB : sMarginTop,
            marginBottom = marginTB !== undefined ? marginTB : sMarginBottom,
            minWidth = sMinWidth,
            minHeight = sMinHeight,
            maxWidth = sMaxWidth,
            maxHeight = sMaxHeight,
            display = sDisplay
        } = props;


        if (backgroundImageUrl !== undefined) {
            backgroundImage = `url(${backgroundImageUrl})`;
        }

        style = {
            ...style,
            width,
            height,
            boxSizing,
            display,
            zIndex,
            borderRadius,
            backgroundColor,
            padding,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
            backgroundImage,
            overflowX,
            overflowY,
            position,
            margin,
            marginLeft,
            marginRight,
            marginTop,
            marginBottom,
            minWidth,
            minHeight,
            maxWidth,
            maxHeight
        };

        return style;
    }
}