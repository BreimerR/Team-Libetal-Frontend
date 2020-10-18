import React, {Component} from "react";
import PaginationController from "./PaginationController";
import MaterialRow from "../grid/MaterialRow";
import GridItem from "../grid/GridItem";
import MaterialSelect from "../input/MaterialSelect";
import PropTypes from "prop-types";
import Flex from "../Flex";

export default class PaginationControllerWithItemsControls extends Component {

    static propTypes = {
        ...PaginationController.propTypes,
        onChange: PropTypes.func,
        itemsPerPageOptions: PropTypes.array
    };

    static defaultProps = {
        itemsPerPageOptions: [
            5, 25, 50, 100
        ]
    };

    state = {
        currentItemsPerPageIndex: 0
    };

    render() {
        let {
            props: {
                startPage,
                visiblePageIndexControls,
                totalItems,
                onUpdate,
                itemsPerPageOptions,
                display
            },
            state: {
                currentItemsPerPageIndex
            }
        } = this;

        return (
            <GridItem style={{
                display
            }}>
                <MaterialRow alignItems={Flex.CENTER}>
                    <PaginationController
                        onUpdate={onUpdate}
                        startPage={startPage}
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPageOptions[currentItemsPerPageIndex]}
                        visiblePageIndexControls={visiblePageIndexControls}
                    />
                    <MaterialSelect
                        value={currentItemsPerPageIndex}
                        onChange={
                            e => this.setState({currentItemsPerPageIndex: e.target.value})
                        }
                        selectionItems={itemsPerPageOptions.map((value, key) => ({key, value}))}
                    />
                </MaterialRow>
            </GridItem>
        );
    }
}