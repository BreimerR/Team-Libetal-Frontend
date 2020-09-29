import React from "react";
import {withProps} from "recompose";
import * as Icons from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import MaterialIconButton from "./button/MaterialIconButton";

export default class MaterialIcon extends React.Component {

    static defaultProps = {
        iconSize: 24,
        color: "secondary",
        style: {}
    };


    static propTypes = {
        icon: PropTypes.oneOf([
            "Settings",
            "Home",
            "Notifications",
            "Apps",
            "Sort",
            "Search",
            "Copyright",
            "Save",
            "FilterList",
            "AttachFile",
            "StarBorder",
            "FavoriteBorder",
            "MoreVert",
            "ExpandMore",
            "ExpandLess",
            "ChevronLeft",
            "ChevronRight",
            "MoreHoriz",
            "AccountTree",
            "RssFeed",
            "Favorite",
            "Chat",
            "Accessibility",
            "InvertColors",
            "People",
            "ExitToApp",
            "BugReport",
            "Close",
            "Help",
            "TrendingUp",
            "TrendingDown",
            "Done"
        ]).isRequired,
        color: PropTypes.string,
        iconSize: PropTypes.number
    };

    render() {
        let {
            icon = "Apps",
            iconSize = 24,
            iconName,
            iconPadding,
            color = "secondary",
            style: {
                height,
                width,
                ...style
            } = {},
            ...props
        } = this.props;

        if (!(color === "secondary" || color === "primary" || color === "action" || color === "inherit" || color === "disabled")) {
            style.color = color;
            color = undefined;
        }

        iconName = iconName || icon;

        let Icon = withProps({
            ...props
        })(Icons[iconName]);


        return (
            <Icon
                style={{
                    ...style,
                    height: iconSize,
                    width: iconSize
                }}
                color={color}
            />
        );
    }
}