import { connect } from "react-redux";
import TestScreen from "../../../screens/TestScreen";
import { addValue } from "../../test";

const mapStateToProps =(state)=>{
    console.log(state)
    return {
        value: state.value.value
    }
}

const mapActionsToProps ={
    addValue,
}

export default connect(mapStateToProps,mapActionsToProps)(TestScreen)