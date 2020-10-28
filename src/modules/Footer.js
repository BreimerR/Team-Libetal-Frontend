import React, {Component} from "react";
import Row from "../widgets/Row";
import Colors from "../Colors";
import Column from "../widgets/Column";
import MaterialTextView from "../widgets/MaterialTextView";
import Flex from "../widgets/Flex";
import MaterialIcon from "../widgets/MaterialIcon";
import MaterialRow from "../widgets/grid/MaterialRow";
import GridItem from "../widgets/grid/GridItem";
import MaterialDivider from "../widgets/MaterialDivider";
import Link from "@material-ui/core/Link";
import MaterialCol from "../widgets/grid/MaterialCol";
import Spacer from "../widgets/dividers/Spacer";


export default class Footer extends Component {


    render() {

        let textColor = Colors.white;


        // Parent container affecting left and right margin
        return (
            <>
                <div style={{flexGrow: 1, display: "flex"}}/>
                <MaterialRow justify={Flex.CENTER} style={{
                    backgroundColor: Colors.black, ...this.props.style,
                    paddingTop: 16,
                    paddingLeft: 1
                }}>
                    <MaterialCol xs={6} lg={4}>
                        <Row justify={Flex.CENTER}>
                            <MaterialTextView text={"App Store"} textColor={textColor} variant={"h5"}/>
                        </Row>
                        <Row justify={Flex.END}>
                            <Column xs={7}>
                                <MaterialTextView text={"Pricing"} textColor={textColor}/>
                                <MaterialTextView text={"Hosting"} textColor={textColor}/>
                                <Link href={"/dashboard/projects"}>
                                    <MaterialTextView text={"Projects"} textColor={textColor}/>
                                </Link>
                                <Link href={"/dashboard/teams"}>
                                    <MaterialTextView text={"Teams"} textColor={textColor}/>
                                </Link>

                            </Column>
                        </Row>
                        <Row justify={Flex.CENTER}>
                            <MaterialTextView text={"Requests"} textColor={textColor} variant={"h5"}/>
                        </Row>
                        <Row justify={Flex.END}>
                            <Column xs={7}>
                                <MaterialTextView text={"How It Work"} textColor={textColor}/>
                            </Column>
                        </Row>
                    </MaterialCol>
                    <MaterialRow xs={6} lg={4} justify={Flex.CENTER}>
                        <MaterialRow justify={Flex.START}>
                            <MaterialTextView text={"About"} textColor={textColor} variant={"h5"}/>
                        </MaterialRow>
                        <MaterialTextView
                            textColor={Colors.white}
                            textAlign={"center"}>
                            Libetal helps developers and creators alike,
                            to invest their time wisely on products that could bring more
                            than change to society but so much more.
                        </MaterialTextView>
                    </MaterialRow>
                    <MaterialCol xs={6} lg={4} alignItems={Flex.END}>
                        <Row justify={Flex.CENTER}>
                            <MaterialTextView text={"Contacts"} textColor={textColor} variant={"h6"}/>
                        </Row>
                        <Row justify={Flex.END}>
                            <Column xs={6}>
                                <MaterialTextView text={"libetal@email.com"} textColor={textColor}/>
                                <MaterialTextView text={"+257 725-124-606"} textColor={textColor}/>
                                <MaterialTextView text={"+020 xxx-xxx-xxx"} textColor={textColor}/>
                            </Column>
                        </Row>
                        <Row justify={Flex.CENTER}>
                            <MaterialTextView text={"Address"} textColor={textColor} variant={"h6"}/>
                        </Row>
                        <Row justify={Flex.END}>
                            <MaterialCol xs={6}>
                                <MaterialTextView text={"HQ, Africa"} textColor={textColor}/>
                                <MaterialTextView text={"Kenya, Nairobi"} textColor={textColor}/>
                                <MaterialTextView text={"P.O.Box 00200-12444"} textColor={textColor}/>
                            </MaterialCol>
                        </Row>
                    </MaterialCol>
                    <MaterialDivider width={"60%"}/>
                    <MaterialRow padding={8} justify={Flex.CENTER} alignItems={Flex.CENTER}>
                        <MaterialTextView text={"cookie policy"} textColor={textColor}/>
                        <MaterialTextView marginLeft={4} text={"privacy policy"} textColor={textColor}/>
                        <MaterialTextView marginLeft={4} text={"terms & condition"} textColor={textColor}/>
                        <GridItem marginLeft={4}>
                            <MaterialRow>
                                <MaterialTextView text={"Copyright "} textColor={textColor}/>
                                <MaterialIcon icon={"Copyright"} iconSize={10}/>
                                <MaterialTextView marginLeft={4} text={"2020"} textColor={textColor}/>
                            </MaterialRow>
                        </GridItem>
                    </MaterialRow>

                </MaterialRow>
            </>
        );
    }
}