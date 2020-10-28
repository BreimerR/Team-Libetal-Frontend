import React, {Component} from "react";
import PropTypes from "prop-types";
import MaterialRow from "../../../widgets/grid/MaterialRow";
import MaterialCol from "../../../widgets/grid/MaterialCol";
import Flex from "../../../widgets/Flex";

export default class DividedComponent extends Component {


    static propTypes = {
        children: PropTypes.array.isRequired
    };

    render() {

        let {children} = this.props;

        return (
            <MaterialRow justify={Flex.SPACE_AROUND}>
                <MaterialCol xs={12} lg={6}>{children[0]}</MaterialCol>
                <MaterialCol xs={12} lg={5}>{children[1]}</MaterialCol>
            </MaterialRow>
        );
    }
}