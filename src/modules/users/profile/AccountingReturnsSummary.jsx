import React, {Component} from "react";
import MaterialRow from "../../../widgets/grid/MaterialRow";
import Libetal from "../../../widgets/icons/Libetal";
import Colors from "../../../Colors";


export default class AccountingReturnsSummary extends Component {


    render() {
        return (
            <MaterialRow padding={12}>

                <Libetal
                    bColor={Colors.white}
                    iColor={Colors.orange}
                    lColor={Colors.blue}
                    height={84}
                    width={84}
                />
            </MaterialRow>
        );
    }
}