import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import View from "./contributions/View";

export default class ListItemDiv extends Component {

    static propTypes = {
        ...View.propTypes,
        component: PropTypes.any,
        alignItems: PropTypes.oneOf(["center", "flex-start"]),
        disableGutters: PropTypes.bool,
        button: PropTypes.bool
    };

    render() {
        let {
            alignItems,
            component = "div",
            disableGutters,
            style,
            ...props
        } = this.props;


        return (
            <ListItem
                disableGutters={disableGutters}
                component={component}
                alignItems={alignItems}
                style={View.extractStyles(props)}
                {...props}
            />
        );
    }

}