import React, {Component} from "react";
import Settings from "../../../utils/Settings";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Paper from "@material-ui/core/Paper";
import AppBar from "./widgets/AppBar";
import Footer from "../../Footer";
import MaterialRow from "../../../widgets/grid/MaterialRow";
import GridItem from "../../../widgets/grid/GridItem";
import Flex from "../../../widgets/Flex";
import Avatar from "@material-ui/core/Avatar";
import MaterialCol from "../../../widgets/grid/MaterialCol";
import MaterialTextView from "../../../widgets/MaterialTextView";
import MaterialDivider from "../../../widgets/MaterialDivider";
import Colors from "../../../Colors";
import Separator from "../../../widgets/separator";
import MaterialBtn from "../../../widgets/MaterialBtn";
import Chip from "@material-ui/core/Chip";
import Spacer from "../../../widgets/dividers/Spacer";
import TabsLayout from "../../../widgets/TabsLayout";
import LineChart from "../../../widgets/graphs/LineChart";
import DataSet from "../../../widgets/DataSet";
import Bar from "../../../widgets/graphs/Bar";
import MaterialIcon from "../../../widgets/MaterialIcon";
import Libetal from "../../../widgets/icons/Libetal";
import CommitBranch from "../../../widgets/icons/CommitBranch";
import ProjectsListView from "../../dashboard/projects/widgets/ProjectsListView";
import PaginationController from "../../../widgets/pagination/PaginationController";
import PaginationControllerWithItemsControls from "../../../widgets/pagination/PaginationControllerWithItemsControls";
import UserAccount from "./UserAccount";
import Breakdown from "./Breakdown";


/**TODO
 *
 * User profile should have detains
 * that entails anything to do with the person
 * address details.
 * accounts details.
 *  this should be a summary of the user financial information
 *  i.e credit owed to the platform
 *      cash due for payment to the person
 *      cash earned over a period
 *      transactions made to the account
 *          transactions such as
 *              investment in projects
 *              withdrawals from accounts etc
 *              project accounts details
 *                  you can not see who the shares belong to if in a project you work on
 *                  but you can see the cost of the share
 *                  this looks like part of insights.
 *
 * registration details.
 * */
export default class Profile extends Component {


    state = {
        currentFragmentId: Profile.FRAGMENT_DETAILS
    };

    static FRAGMENT_DETAILS = 0;
    static ACCOUNTS_INVESTMENTS = 1;

    constructor(props) {
        super(props);

        this.bindEvents();
    }

    bindEvents() {
        this.onAppBarTabsChange = this.onAppBarTabsChange.bind(this);
    }

    onAppBarTabsChange(layout, currentTab) {
        this.setState({currentFragmentId: currentTab});
    }

    get currentFragment() {

        let {
            props: {},
            state: {
                currentFragmentId
            }
        } = this;

        switch (currentFragmentId) {
            case Profile.FRAGMENT_DETAILS:
                return <Breakdown/>;
            case Profile.ACCOUNTS_INVESTMENTS:
                return <UserAccount componentInstance={this}/>;
        }
    }

    render() {

        const {
            navigator
        } = this.props;

        return (
            <ThemeProvider theme={Settings.appTheme}>
                <AppBar
                    position={"relative"}
                    navigator={navigator}
                    componentInstance={this}
                    onChange={this.onAppBarTabsChange}/>
                {this.currentFragment}
                <Footer navigator={navigator}/>
            </ThemeProvider>
        );
    }
}