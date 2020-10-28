import React, {Component} from "react";
import MaterialRow from "../../../widgets/grid/MaterialRow";
import PropTypes from "prop-types";
import MaterialCol from "../../../widgets/grid/MaterialCol";
import Flex from "../../../widgets/Flex";
import DividedComponent from "./DividedComponent";
import UserAccountDrawer from "./UserAccountDrawer";
import GridItem from "../../../widgets/grid/GridItem";
import TabsLayout from "../../../widgets/TabsLayout";
import MaterialTextView from "../../../widgets/MaterialTextView";
import CustomDrawer from "../../../widgets/navigation/CustomDrawer";
import AccountingReturnsSummary from "./AccountingReturnsSummary";

/**
 * Costs
 * Total cost of projects worked on
 * Cost of development of projects worked on
 * Cost of contribution on projects worked on
 * Time invested on projects worked on
 * Time of development on projects worked on
 * Time of contribution of projects worked on
 * Personal Evaluations
 * Total of user contribution to a project
 * Total Cost of development by the user.
 * Total cost of user time contribution
 * Pending costs
 * Approved costs
 * Rejected code
 * time and money invested in the rejected code.
 * time and money invested in the accepted code.
 * total time and money invested on rejected code from others.
 * Total time and money invested on the accepted code.
 *
 * Transactions
 * Share progress rises and drops.
 * Share price evaluations.
 *
 * Approved & Rejected contributions.
 * Transactions
 *
 * */
export default class UserAccount extends Component {

    static propTypes = {
        parent: PropTypes.any
    };


    state = {
        currentFragmentId: UserAccountDrawer.ITEM_ALL
    };

    get currentItemView() {
        switch (this.state.currentFragmentId) {

            case UserAccountDrawer.ITEM_SHARES_SECURED:
                break;
            case UserAccountDrawer.ITEM_SHARES_PENDING:
                break;
            case UserAccountDrawer.ITEM_SHARES_DISPUTED:
                break;
            case UserAccountDrawer.ITEM_SHARES_ALL:
                break;
            case UserAccountDrawer.ITEM_COMMITS_ALL:
                break;
            case UserAccountDrawer.ITEM_COMMITS_REJECTED:
                break;
            case UserAccountDrawer.ITEM_COMMITS_MERGED:
                break;
            case UserAccountDrawer.ITEM_COMMITS_PENDING:
                break;
            case UserAccountDrawer.ITEM_TRANSACTIONS_ALL:
                break;
            case UserAccountDrawer.ITEM_TRANSACTIONS_SUCCESSFUL:
                break;
            case UserAccountDrawer.ITEM_TRANSACTIONS_PENDING:
                break;
            default:
                return <AccountingReturnsSummary />;
        }
    }

    render() {
        const {parent} = this.props;

        return (
            <MaterialRow justify={Flex.START} minHeight={580}>
                <UserAccountDrawer
                    zIndex={10}
                    defaultIsOpen={false}
                    parent={parent}
                    onItemClick={
                        (e, itemId) => {
                            this.setState({currentFragmentId: itemId});
                        }
                    }
                />
                <GridItem padding={6}>
                    {this.currentItemView}
                </GridItem>
            </MaterialRow>
        );
    }
}

