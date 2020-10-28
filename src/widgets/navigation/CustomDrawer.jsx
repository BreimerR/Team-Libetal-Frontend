import {Drawer} from "@material-ui/core";
import View from "../../modules/repos/contributions/View";
import PropTypes from "prop-types";
import React, {Component} from "react";
import Settings from "../../utils/Settings";
import Paper from "@material-ui/core/Paper";

// this component needs access to app base settings in order to decide the
// orientation
export default class CustomDrawer extends Component {

    state = {
        isOpen: true
    };

    static WIDTH = 240;
    static HEIGHT = "100%";

    static propTypes = {
        ...View.propTypes,
        items: PropTypes.oneOfType
    };

    static defaultProps = {
        minWidth: CustomDrawer.WIDTH,
        minHeight: CustomDrawer.HEIGHT,
        onChange(drawer) {
            if (drawer.isOpen) {
                console.log(`Drawer is opening`);
            } else console.log(`Drawer is closing`);
        }
    };

    get style() {
        let {} = this;

        let style = View.extractStyles(this.props);


        let marginDirection = "marginLeft" || "marginRight";
        // TODO this statement has two meanings.
        // and can be a feature request for Unify
        // if(marginDirection === "marginLeft" || "marginRight")
        let hideSize = 0;

        if (marginDirection === "marginLeft" || marginDirection === "marginRight") {
            // TODO  this does not cater for top and top drawers.
            hideSize = Math.max(style.minWidth, style.width);
        } else if (marginDirection === "marginTop") {
            hideSize = Math.max(style.marginTop, style.height);
        } else hideSize = Math.max(style.marginBottom, style.height);

        let multiple = Settings.displayDirection === "ltr" ? -1 : 1;

        style.borderRadius = 0;
        style[marginDirection] = this.state.isOpen ? 0 : multiple * hideSize;

        return style;
    }


    set isOpen(value) {
        this.setState({isOpen: value});
    }

    get isOpen() {
        return this.state.isOpen;
    }

    onChange() {
        let {
            props: {onChange}
        } = this;
        if (typeof onChange === "function") onChange(this);
    }

    componentDidMount() {

        this.onChange();
    }

    render() {
        let {
            props: {
                onChange,
                variant,
                children
            }
        } = this;

        return (
            <Paper
                style={this.style}
            >
                {/*TODO not best design for items in this view one should be able to just pass objects or arrays*/}
                {children}
            </Paper>
        );
    }
}