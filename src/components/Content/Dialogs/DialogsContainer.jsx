import {sendMessageCreator, updateMessageTextCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
   return {
      dialogsData: state.dialogsPage.dialogsData,
      messagesData: state.dialogsPage.messagesData,
      textArea: state.dialogsPage.textArea,
   }
};
const mapDispatchToProps = (dispatch) => {
   return {
      onChangeArea: (text) => {
         dispatch(updateMessageTextCreator(text))
      },
      onClickBtn: () => {
         dispatch(sendMessageCreator());
      }
   }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;