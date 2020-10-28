import React, {Component} from "react";
import MaterialBtn from "../../../widgets/MaterialBtn";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import Row from "../../../widgets/Row";
import Column from "../../../widgets/Column";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import Flex from "../../../widgets/Flex";
import TextView from "../../../widgets/MaterialTextView";
import MenuItem from "@material-ui/core/MenuItem";
import MaterialIcon from "../../../widgets/MaterialIcon";
import MaterialDivider from "../../../widgets/MaterialDivider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Libetal from "../../../widgets/icons/Libetal";
import Colors from "../../../Colors";
import ListItemDiv from "../../repos/ListItemDiv";
import MaterialRow from "../../../widgets/grid/MaterialRow";
import Spacer from "../../../widgets/dividers/Spacer";
import MaterialCol from "../../../widgets/grid/MaterialCol";
import MaterialMenuItem from "../../../widgets/menu/MaterialMenuItem";

export default class UserAccountButton extends Component {


    state = {
        anchorEl: undefined
    };


    static propTypes = {
        ...MaterialBtn.propTypes,
        userDetails: PropTypes.object,
        navigator: PropTypes.func,
        variant: PropTypes.string
    };

    static defaultProps = {
        variant: "contained",
        userDetails: {
            name: "Breimer",
            email: "brymher@gmail.com",
            img: undefined
        }
    };

    set anchorEl(value) {
        // avoid unnecessary changes
        this.setState(
            {anchorEl: value},
            () => {
                console.log(`Create action on state change of menu option`);
            }
        );
    }

    openMenu(event) {
        this.setState({anchorEl: event.currentTarget});
    }

    close(event) {
        this.setState({anchorEl: undefined});
    }


    get buttonBody() {

        let {
            userDetails
        } = this.props;
        return (
            <Row alignItems={Flex.CENTER} style={{width: 180}}>
                <Column xs={2} justify={Flex.CENTER}>
                    <Avatar
                        src={userDetails.img}
                        style={{
                            width: 24,
                            height: 24
                        }}
                    />
                </Column>
                <Column xs={10}>
                    <TextView
                        text={userDetails.name}
                        style={{
                            textAlign: "left"
                        }}
                    />
                    <TextView
                        text={userDetails.email}
                        fontSize={12}
                        style={{
                            textAlign: "left"
                        }}
                    />
                </Column>
            </Row>
        );
    }

    prepMenuItem(children, onClick) {
        let menuItemStyle = {
            width: "100%",
            margin: 0,
            marginTop: 0,
            marginBottom: 0,
            height: 32,
            minHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 4
        };

        return (
            <MenuItem
                disableGutters
                style={menuItemStyle}
                onClick={onClick}
                children={children}
            />
        );
    }

    get profileActions() {
        const {
            props: {
                navigator,
                variant
            },
            state: {
                anchorEl
            }
        } = this;

        return (
            <MaterialCol xs={5}>
                <TextView
                    text={"Account"}
                />
                <MaterialDivider
                    width={"50%"}
                />
                {
                    this.prepMenuItem(
                        <>
                            {
                                this.props.userDetails.img === undefined ?
                                    (
                                        <Libetal
                                            height={24}
                                            width={24}
                                            iColor={Colors.red}
                                            bColor={Colors.white}
                                            lColor={Colors.blue}/>)
                                    : (
                                        <Avatar
                                            src={this.props.userDetails.img}
                                            style={{width: 24, height: 24}}
                                        />
                                    )
                            }
                            <Spacer orientation={Spacer.VERTICAL} spacing={8}/>
                            <TextView
                                text={"Profile"}
                            />
                        </>,
                        e => {
                            this.props.navigator("users/breimer");
                        }
                    )
                }
                {
                    this.prepMenuItem(
                        <>
                            <MaterialIcon
                                icon={"LockOpen"}
                            />
                            <Spacer orientation={Spacer.VERTICAL} spacing={8}/>
                            <TextView
                                text={"Logout"}
                            />
                        </>,
                        e => this.logOut()
                    )
                }
                {
                    this.prepMenuItem(
                        <>
                            <MaterialIcon
                                icon={"ExitToApp"}
                            />
                            <Spacer orientation={Spacer.VERTICAL} spacing={8}/>
                            <TextView
                                text={"Login/Register"}
                            />
                        </>,
                        e => {
                            navigator("register");
                        }
                    )
                }

            </MaterialCol>
        );
    }

    logOut() {
        console.log(`TODO: 216 UserAccountsButton.jsx`);
    }

    render() {

        const {
            props: {
                navigator,
                variant
            },
            state: {
                anchorEl
            }
        } = this;

        return (
            <>
                <MaterialBtn
                    variant={variant}
                    content={this.buttonBody}
                    textTransform={"none"}
                    style={{
                        paddingLeft: 4,
                        paddingRight: 4,
                        paddingTop: 2,
                        paddingBottom: 2
                    }}
                    onClick={
                        e => {
                            this.anchorEl = e.currentTarget;
                        }
                    }
                />
                <Menu
                    style={{marginTop: 40}}
                    id="accounts-options-menu"
                    anchorEl={this.state.anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={
                        e => {
                            this.anchorEl = undefined;
                        }
                    }
                    TransitionComponent={Fade}
                >
                    <MaterialRow style={{width: 420}} justify={Flex.SPACE_AROUND}>
                        <MaterialCol xs={6}>
                            <TextView
                                text={"Productivity"}

                            />
                            <MaterialDivider
                                width={"50%"}
                            />
                            {
                                this.prepMenuItem(
                                    <>
                                        <MaterialIcon
                                            icon={"People"}
                                        />
                                        <Spacer orientation={Spacer.VERTICAL} spacing={8}/>

                                        <TextView text={"Teams"}/>
                                    </>,
                                    e => {
                                        navigator("dashboard/teams?member=breimer");
                                    }
                                )
                            }
                            {
                                this.prepMenuItem(
                                    <>
                                        <MaterialIcon
                                            icon={"AccountTree"}
                                        />
                                        <Spacer orientation={Spacer.VERTICAL} spacing={8}/>
                                        <TextView text={"Your Projects"}/>
                                    </>,
                                    e => {
                                        navigator("dashboard/projects?by=breimer");
                                    }
                                )
                            }
                            {
                                this.prepMenuItem(
                                    <>
                                        <MaterialIcon
                                            icon={"BugReport"}
                                        />
                                        <Spacer orientation={Spacer.VERTICAL} spacing={8}/>
                                        <TextView text={"Issues"}/>
                                    </>,
                                    e => {
                                        this.props.navigator("dashboard/issues?by=me");
                                    }
                                )
                            }

                            {
                                this.prepMenuItem(
                                    <>
                                        <MaterialIcon
                                            icon={"TrendingUp"}
                                        />
                                        <Spacer orientation={Spacer.VERTICAL} spacing={8}/>
                                        <TextView text={"Insights"}/>
                                    </>,
                                    e => {
                                        this.props.navigator("dashboard/insights/all");
                                    }
                                )
                            }
                        </MaterialCol>
                        <MaterialDivider height={100} orientation={MaterialDivider.VERTICAL}/>
                        {this.profileActions}
                    </MaterialRow>
                </Menu>
            </>
        );
    }
}