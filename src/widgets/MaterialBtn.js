import * as React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import View from "../modules/repos/contributions/View";

export default class MaterialBtn extends React.Component {

    static defaultProps = {
        style: {},
        content: "MaterialButton",
        variant: "contained",
        color: "secondary",
        textTransform: "uppercase",
        onClick: () => {
            console.log(`Unhandled button click`);
        }
    };

    static propTypes = {
        textColor: PropTypes.string,
        variant: PropTypes.oneOf(["contained", "text", "default"]),
        content: PropTypes.any,
        textTransform: PropTypes.oneOf(["none", "uppercase", "lowercase", "capitalize"]),
        onClick: PropTypes.func,
        color: PropTypes.string,
        startIcon: PropTypes.any,
        endIcon: PropTypes.any,
        disabled: PropTypes.bool,
        padding: PropTypes.number,
        paddingTB: PropTypes.number,
        paddingLR: PropTypes.number,
        paddingLeft: PropTypes.number,
        paddingRight: PropTypes.number,
        paddingTop: PropTypes.number,
        paddingBottom: PropTypes.number,
        margin: PropTypes.number,
        marginLR: PropTypes.number,
        marginRight: PropTypes.number,
        marginLeft: PropTypes.number,
        marginTB: PropTypes.number,
        marginTop: PropTypes.number,
        marginBottom: PropTypes.number,
        maxWidth: PropTypes.number,
        fontSize: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        ...View.propTypes
    };


    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    render() {

        let {
            textColor,
            onClick,
            className,
            content,
            startIcon,
            endIcon,
            style: {
                textTransform: sTextTransform
            },
            textTransform = sTextTransform,
            variant,
            color,
            children,
            margin,
            disabled,
            ...props
        } = this.props;

        let style = View.extractStyles(this.props);
        style.textTransform = textTransform;

        if (!(color === "secondary" || color === "primary")) {
            style.backgroundColor = color;
            color = undefined;
        }

        style.color = textColor;


        return (
            <Button
                ref={this.ref}
                disabled={disabled}
                startIcon={startIcon}
                endIcon={endIcon}
                onClick={
                    e => {
                        let propagate = onClick(e);

                        if (propagate === true || propagate === undefined) e.stopPropagation();

                    }
                }
                style={style}
                color={color}
                className={className}
                variant={variant}
                {...props}>
                {content}
                {children}
            </Button>
        );
    }
}