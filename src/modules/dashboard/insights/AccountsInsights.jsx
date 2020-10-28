import React, {Component} from "react";
import TabsLayout from "../../../widgets/TabsLayout";
import MaterialRow from "../../../widgets/grid/MaterialRow";
import MaterialTextView from "../../../widgets/MaterialTextView";
import MaterialCol from "../../../widgets/grid/MaterialCol";
import GridItem from "../../../widgets/grid/GridItem";
import Paper from "@material-ui/core/Paper";
import Flex from "../../../widgets/Flex";
import MaterialSelect from "../../../widgets/input/MaterialSelect";
import Calendar from "../../../utils/Calendar";
import {Tabs} from "@material-ui/core";
import LineChart from "../../../widgets/graphs/LineChart";
import DataSet from "../../../widgets/DataSet";
import Checkbox from "@material-ui/core/Checkbox";
import {BarChart} from "@material-ui/icons";
import Bar from "../../../widgets/graphs/Bar";
import Colors from "../../../Colors";


/**
 * TODO: Accounts Insights should display
 users transactions
 users commits
 users merged commits
 total commit hours
 total commit worth
 Projects one has worked on
 * Could show the returns per company
 * Quarterly returns of a given product (requires per project navigation)
 * 1st quarter
 * 2nd quarter
 * 3rd quarter
 * 4th quarter
 *  net revenue
 *  taxes
 *  operating expenses
 * sales per platform where the product is launched in
 * */

export default class AccountsInsights extends Component {

    state = {
        visibleProjects: [],
        visibleProjectsCount: 0,
        currentVisibleProjectIndex: 0,
        currentFiscalQuarter: 0,
        fiscalQuarters: [1, 2, 3, 4],
        currentFiscalMonth: -1


    };


    constructor(props) {
        super(props);

        this.bindEvents();
    }

    bindEvents() {
        this.onProjectsLoaded = this.onProjectsLoaded.bind(this);
    }

    onProjectsLoaded({response, data: visibleProjects, dataCount: visibleProjectsCount}) {
        console.log(visibleProjects);
        if (response.code === 200) this.setState({visibleProjects, visibleProjectsCount});
    }

    // TODO this are the projects the current user can view stats on
    // Starting public projects, private project(created by current user or current user is part of).
    fetchVisibleProjects() {
        fetch("/data/accounts/visible.projects.json")
            .then(data => data.json())
            .then(this.onProjectsLoaded);
    }

    fetchData() {
        this.fetchVisibleProjects();
    }

    componentDidMount() {
        this.fetchData();
    }


    selectedProjectTabProps = {
        variant: "h3",
        paddingLR: 8
    };

    projectTabProps = {
        paddingLR: 5
    };

    get currentVisibleProject() {
        return this.state.visibleProjects[this.state.currentVisibleProjectIndex] || {};
    }

    get projectsTabs() {

        let {
            currentVisibleProjectIndex,
            visibleProjects
        } = this.state;
        return visibleProjects.map(
            ({name}, key) => ({
                key,
                label: (
                    <MaterialTextView {...(key === currentVisibleProjectIndex ? this.selectedProjectTabProps : this.projectTabProps)}>
                        {name}
                    </MaterialTextView>
                )
            })
        );
    }

    get visibleMonths() {

        let {
            state: {
                currentFiscalQuarter
            }
        } = this;

        let quarterDifference = 3;
        let quarterStart = currentFiscalQuarter * quarterDifference;

        let months = Calendar.MONTHS_LIST_SHORT;

        return currentFiscalQuarter === -1 ? months : months.slice(quarterStart, quarterStart + quarterDifference);

    }

    get quartersSelect() {

        let {
            state: {
                fiscalQuarters,
                currentFiscalQuarter
            }
        } = this;

        fiscalQuarters = ["All", ...(fiscalQuarters.map(v => `Q${v}`))];

        return (
            <MaterialSelect
                disableUnderline
                value={currentFiscalQuarter}
                selectionItems={
                    fiscalQuarters.map((value, key) => ({
                        // support for this in Unify
                        // key +=1,
                        key: key - 1,
                        value
                    }))
                }
                renderValue={
                    selected => (
                        <MaterialTextView
                            paddingLeft={6}
                            text={fiscalQuarters[selected + 1]}
                            variant={"h4"}
                        />
                    )
                }
                onChange={
                    (e) => this.setState({currentFiscalQuarter: e.target.value})
                }
            />
        );
    }

    get visibleProjectsTabsView() {
        return (
            <>
                <TabsLayout
                    maxWidth={"80%"}
                    overflowX={"hide"}
                    tabLRPadding={0}
                    tabTBPadding={0}
                    showIndicator={false}
                    tabs={this.projectsTabs}
                    variant={TabsLayout.VARIANT.SCROLLABLE}
                    onChange={
                        (e, currentVisibleProjectIndex) => this.setState({currentVisibleProjectIndex})
                    }
                />
            </>
        );
    }

    get sharePriceGraph() {
        return (
            <>
                <MaterialRow>
                    <GridItem>
                        <MaterialRow alignItems={Flex.CENTER}>
                            <Checkbox size={"small"}/>
                            <MaterialTextView
                                text={"Price Per Share"}
                                fontSize={"8pt"}/>
                        </MaterialRow>
                    </GridItem>
                </MaterialRow>
                <Bar
                    showLabels={false}
                    showLegends={false}
                    showGridLines={false}
                    labels={this.visibleMonths}
                    children={
                        [
                            <DataSet
                                label={"Price"}
                                data={[30, 40, 35]}
                                backgroundColor={Colors.alpha("blue", .2)}
                                borderColor={Colors.blue}
                                borderWidth={2}
                                pointRadius={4}
                                fillArea={true}
                                type={"line"}
                            />
                        ]
                    }
                />
            </>
        );
    }

    get mainAccountsGraph() {

        return (
            <>
                <MaterialRow justify={Flex.CENTER}>
                    <GridItem>
                        <MaterialRow alignItems={Flex.CENTER}>
                            <Checkbox size={"small"}/>
                            {/*TODO
                                                since different businesses
                                                have different modes of sales i.e
                                                sales in terms of subscriptions
                                                sales in terms of daily usage
                                                sales in terms of one off purchases
                                                thus this should be put into account
                                                depending on the product and the set
                                                of purchase option it has and needs to be in the database

                                                */}
                            <MaterialTextView
                                text={"Total Sales"}
                                fontSize={"8pt"}/>
                        </MaterialRow>
                    </GridItem>
                    <GridItem>
                        <MaterialRow alignItems={Flex.CENTER}>
                            <Checkbox size={"small"}/>
                            <MaterialTextView
                                text={"Billings"}
                                fontSize={"8pt"}/>
                        </MaterialRow>
                    </GridItem>
                    <GridItem>
                        <MaterialRow alignItems={Flex.CENTER}>
                            <Checkbox size={"small"}/>
                            <MaterialTextView
                                text={"Taxes"}
                                fontSize={"8pt"}/>
                        </MaterialRow>
                    </GridItem>
                    <GridItem>
                        <MaterialRow alignItems={Flex.CENTER}>
                            <Checkbox size={"small"}/>
                            <MaterialTextView
                                text={"Returns"}
                                fontSize={"8pt"}/>
                        </MaterialRow>
                    </GridItem>
                </MaterialRow>
                <Bar
                    showLabels={false}
                    showLegends={false}
                    showGridLines={false}
                    labels={this.visibleMonths}
                    children={
                        [
                            <DataSet
                                label={"Total Sales"}
                                data={[8000, 12000, 40100]}
                                backgroundColor={Colors.alpha("blue", .2)}
                                borderColor={Colors.blue}
                                borderWidth={2}
                                pointRadius={4}
                                fillArea={true}
                                type={"line"}
                            />,
                            <DataSet
                                label={"Billings"}
                                data={[1000, 1000, 9100]}
                                borderColor={Colors.purple}
                                backgroundColor={Colors.alpha("purple", .3)}
                            />,
                            <DataSet
                                label={"Taxes"}
                                data={[2000, 1500, 2500]}
                                borderColor={Colors.red}
                                backgroundColor={Colors.alpha("red", .3)}
                            />,
                            <DataSet
                                label={"Returns"}
                                data={[900, 700, 100]}
                                borderColor={Colors.green}
                                backgroundColor={Colors.alpha("green", .3)}
                            />
                        ]
                    }
                />
            </>
        );
    }

    render() {

        let {
            state: {
                currentVisibleProject: project,
                currentFiscalMonth
            }
        } = this;
        let saleCardMinHeight = 140;

        return (
            <>
                <MaterialRow justify={Flex.SPACE_BETWEEN}>
                    <GridItem xs={12} xm={8} lg={5}>
                        {this.visibleProjectsTabsView}
                    </GridItem>
                    <GridItem xs={12} xm={4} lg={4}>
                        {/*TODO think of something to put here*/}
                    </GridItem>
                </MaterialRow>
                <MaterialCol alignContent={Flex.START} alignItems={Flex.CENTER}>
                    <MaterialRow alignItems={Flex.START} justify={Flex.CENTER}>
                        <MaterialRow xs={10}>
                            {this.quartersSelect}
                        </MaterialRow>
                        <Paper component={GridItem} xs={10} padding={4}>
                            <MaterialRow alignItems={Flex.END}>
                                <GridItem>
                                    <TabsLayout
                                        variant={TabsLayout.VARIANT.SCROLLABLE}
                                        value={currentFiscalMonth}
                                        marginRight={4}
                                        tabLRPadding={5}
                                        tabTBPadding={1}
                                        minHeight={0}
                                        tabs={
                                            ["All", ...this.visibleMonths].map((label, key) => ({
                                                // TODO support for this in Unify
                                                // key +=1,
                                                key,
                                                label
                                            }))
                                        }
                                        onChange={
                                            (e, currentFiscalMonth) => this.setState({currentFiscalMonth})
                                        }
                                    />
                                </GridItem>
                            </MaterialRow>
                            <MaterialRow alignItems={Flex.END}>
                                <GridItem xs={11} xm={8}>
                                    {this.mainAccountsGraph}
                                </GridItem>
                                <GridItem xs={11} xm={4}>
                                    {this.sharePriceGraph}
                                </GridItem>
                            </MaterialRow>
                        </Paper>
                    </MaterialRow>
                    <MaterialRow justify={Flex.CENTER}>
                        <GridItem padding={4} xs={11} xm={3}>
                            <Paper>
                                <MaterialCol
                                    justify={Flex.SPACE_EVENLY}
                                    alignItems={Flex.CENTER}
                                    paddingLeft={4}
                                    minHeight={saleCardMinHeight}>
                                    <MaterialRow justify={Flex.SPACE_EVENLY}>
                                        <MaterialTextView variant={"h3"} text={"ksh.3000"}/>
                                        <MaterialTextView
                                            text={`+${1}%`}
                                            textColor={Colors.green}
                                        />
                                    </MaterialRow>
                                    <MaterialTextView variant={"h5"} text={"Billings"} textColor={Colors.blue}/>
                                </MaterialCol>
                            </Paper>
                        </GridItem>
                        <GridItem padding={4} xs={11} xm={3}>
                            <Paper>
                                <MaterialCol
                                    justify={Flex.SPACE_EVENLY}
                                    alignItems={Flex.CENTER}
                                    paddingLeft={4}
                                    minHeight={saleCardMinHeight}>
                                    <MaterialRow justify={Flex.SPACE_EVENLY}>
                                        <MaterialTextView variant={"h3"} text={"ksh.3000"}/>
                                        <MaterialTextView
                                            text={`+${10}`}
                                            textColor={Colors.green}
                                        />
                                    </MaterialRow>
                                    <MaterialTextView
                                        variant={"h5"}
                                        text={"Total Revenue"}
                                        textColor={Colors.blue}/>
                                </MaterialCol>
                            </Paper>
                        </GridItem>
                        <GridItem padding={4} xs={11} xm={3}>
                            <Paper>
                                <MaterialCol
                                    justify={Flex.SPACE_EVENLY}
                                    alignItems={Flex.CENTER}
                                    paddingLeft={4}
                                    minHeight={saleCardMinHeight}>
                                    <MaterialRow justify={Flex.SPACE_EVENLY}>
                                        <MaterialTextView variant={"h2"} text={"ksh.300"}/>
                                        <MaterialTextView text={`-${20}%`} textColor={Colors.red}/>
                                    </MaterialRow>
                                    <MaterialTextView variant={"h5"} text={"Profits"} textColor={Colors.blue}/>
                                </MaterialCol>
                            </Paper>
                        </GridItem>
                    </MaterialRow>
                </MaterialCol>
                <MaterialCol minHeight={400}>

                </MaterialCol>
            </>
        );
    }
}