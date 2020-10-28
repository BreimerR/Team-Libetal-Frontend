import {Drawer} from "@material-ui/core";
import React, {Component} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MaterialCol from "../../../widgets/grid/MaterialCol";
import GridItem from "../../../widgets/grid/GridItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemDiv from "../../repos/ListItemDiv";
import Colors from "../../../Colors";
import MaterialRow from "../../../widgets/grid/MaterialRow";
import Separator from "../../../widgets/separator";
import MaterialIcon from "../../../widgets/MaterialIcon";
import Paper from "@material-ui/core/Paper";
import Flex from "../../../widgets/Flex";
import MaterialTextView from "../../../widgets/MaterialTextView";
import Chip from "@material-ui/core/Chip";
import MaterialChip from "../../../widgets/chips/MaterialChip";
import Collapse from "@material-ui/core/Collapse";
import PropTypes from "prop-types";
import TabsLayout from "../../../widgets/TabsLayout";
import MaterialDrawer from "../../../widgets/navigation/MaterialDrawer";
import CustomDrawer from "../../../widgets/navigation/CustomDrawer";
import Spacer from "../../../widgets/dividers/Spacer";

export default class UserAccountDrawer extends Component {

    static ITEM_ALL = 0;
    static ITEM_SHARES_SECURED = 1;
    static ITEM_SHARES_PENDING = 2;
    static ITEM_SHARES_DISPUTED = 3;
    static ITEM_SHARES_ALL = 4;
    static ITEM_COMMITS_PENDING = 5;
    static ITEM_COMMITS_MERGED = 6;
    static ITEM_COMMITS_REJECTED = 7;
    static ITEM_COMMITS_ALL = 8;
    static ITEM_TRANSACTIONS_PENDING = 9;
    static ITEM_TRANSACTIONS_SUCCESSFUL = 11;
    static ITEM_TRANSACTIONS_ALL = 12;
    static ITEM_TRANSACTIONS_PROCESSING = 13;

    static ITEMS_SHARES = 0;
    static ITEMS_COMMITS = 1;
    static ITEMS_TRANSACTIONS = 2;

    static propTypes = {
        ...CustomDrawer.propTypes,
        onItemClick: PropTypes.func.isRequired
    };

    state = {
        currentMenuItems: UserAccountDrawer.ITEMS_SHARES
    };

    constructor(props) {
        super(props);
        this.bindEvents();
    }

    bindEvents() {
        this.onItemClick = this.onItemClick.bind(this);
        this.onDrawerTabChange = this.onDrawerTabChange.bind(this);
    }

    onItemClick(e, itemId) {
        let {
            onItemClick
        } = this.props;


        typeof onItemClick === "function" && onItemClick(itemId);
    }

    onDrawerTabChange(e, currentMenuItems) {
        this.currentItems = currentMenuItems;
    }

    get currentItems() {
        let view;

        switch (this.state.currentMenuItems) {
            case UserAccountDrawer.ITEMS_SHARES:
                view = <Collapse component={MaterialCol} in={true} alignItems={Flex.STRETCH} paddingLeft={8}>
                    <ListItem
                        button
                        paddingTop={0}
                        paddingBottom={0}
                        component={MaterialRow}
                        onClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_SHARES_SECURED)
                        }
                    >
                        <ListItemText primary={"Secured"}/>
                        <MaterialChip
                            size={"small"}
                            label={"100+"}
                            backgroundColor={Colors.green}
                            fontSize={"8pt"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        paddingTB={1}
                        component={MaterialRow}
                        onClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_SHARES_PENDING)
                        }
                    >
                        <ListItemText primary={"Pending"}/>
                        <MaterialChip
                            size={"small"}
                            label={"+3"}
                            fontSize={"8pt"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        paddingTB={1}
                        component={MaterialRow}
                        onClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_SHARES_DISPUTED)
                        }
                    >
                        <ListItemText primary={"Disputed"}/>
                        <MaterialChip
                            label={"1"}
                            backgroundColor={Colors.red}
                        />
                    </ListItem>
                    <ListItem
                        button
                        style={{paddingTop: 0, paddingBottom: 0}}
                        component={MaterialRow}
                        onClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_SHARES_ALL)
                        }
                    >
                        <MaterialTextView text={"All"}/>
                    </ListItem>
                </Collapse>;
                break;

            case UserAccountDrawer.ITEMS_COMMITS:
                view = <Collapse component={MaterialCol} in={true} alignItems={Flex.STRETCH} paddingLeft={8}>
                    <ListItem
                        button
                        paddingTop={0}
                        paddingBottom={0}
                        component={MaterialRow}
                        onItemClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_COMMITS_MERGED)
                        }
                    >
                        <ListItemText
                            primary={"Merged"}
                        />
                        <MaterialChip
                            label={12}
                        />
                    </ListItem>
                    <ListItem
                        button
                        component={MaterialRow}
                        paddingTB={1}
                        backgroundColor={Colors.red}
                        onItemClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_COMMITS_PENDING)
                        }
                    >
                        <ListItemText
                            primary={"Pending"}
                        />
                        <MaterialChip
                            label={"+4"}
                            backgroundColor={Colors.purple}
                        />
                    </ListItem>
                    <ListItem
                        button
                        paddingTop={0}
                        paddingBottom={0}
                        component={MaterialRow}
                        onItemClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_COMMITS_REJECTED)
                        }
                    >
                        <ListItemText
                            primary={"Rejected"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        paddingTop={0}
                        paddingBottom={0}
                        component={MaterialRow}
                        onItemClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_COMMITS_ALL)
                        }
                    >
                        <ListItemText
                            primary={"All"}
                        />
                        <MaterialChip
                            label={"+4"}
                        />
                    </ListItem>
                </Collapse>;
                break;
            case UserAccountDrawer.ITEMS_TRANSACTIONS:
                view = <Collapse in={true} component={MaterialCol} alignItems={Flex.STRETCH} paddingLeft={8}>
                    <ListItem
                        button
                        component={MaterialRow}
                        paddingTop={0}
                        paddingBottom={0}
                        onClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_TRANSACTIONS_SUCCESSFUL)
                        }
                    >
                        <ListItemText
                            primary={"Successful"}
                        />
                    </ListItem>
                    <ListItem
                        button
                        component={MaterialRow}
                        paddingTop={0}
                        paddingBottom={0}
                        onClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_TRANSACTIONS_PENDING)
                        }
                    >
                        <ListItemText
                            primary={"Pending"}
                        />
                        {/*PENDING COMPLETED  PROCESSING  ALL*/}
                    </ListItem>
                    <ListItem
                        button
                        paddingTop={0}
                        paddingBottom={0}
                        component={MaterialRow}
                        onClick={
                            e => this.onItemClick(e, UserAccountDrawer.ITEM_TRANSACTIONS_ALL)
                        }
                    >
                        <ListItemText
                            primary={"All"}
                        />

                    </ListItem>
                </Collapse>;
                break;
        }

        return view;
    }

    set currentItems(currentMenuItems) {
        this.setState({currentMenuItems});
    }

    /**
     * Components should claim all their
     * custom properties
     * to avoid passing non-required parameters to
     * it's child custom component item
     *
     * */
    render() {

        let {
            props: {
                onItemClick,
                ...props
            }
        } = this;

        return (
            <CustomDrawer
                {...props}
                paddingTB={4}
                onChange={
                    (drawer) => {
                        if (drawer.isOpen) {

                        }
                    }
                }
            >
                <TabsLayout
                    variant={TabsLayout.VARIANT.SCROLLABLE}
                    tabLRPadding={4}
                    tabs={
                        ["Shares", "Commits", "Transactions"]
                    }
                    onChange={this.onDrawerTabChange}
                />
                {this.currentItems}
            </CustomDrawer>
        );
    }
}