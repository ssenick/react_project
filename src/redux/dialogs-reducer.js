const UPDATE_TEXT_AREA_MESSAGE = 'UPDATE-TEXT-AREA-MESSAGE';
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState = {
   dialogsData: [
      {id: 1, name: 'Igor'},
      {id: 2, name: 'Ira'},
      {id: 3, name: 'Alona'},
      {id: 4, name: 'Igor'},
      {id: 5, name: 'Daniil'},
      {id: 6, name: 'Mama'},
   ],
   messagesData: [
      {id: 1, message: 'hi'},
      {id: 2, message: 'How is your name?'},
      {id: 3, message: 'Dima )'},
   ],
   textArea: '',
};
const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_TEXT_AREA_MESSAGE:
         return {
            ...state,
            textArea: action.text,
         }
      case ADD_NEW_MESSAGE:
         if (state.textArea === '') {
            return state;
         }
         let newMessage = {
            id: state.dialogsData.length + 1,
            message: state.textArea
         };
         return {
            ...state,
            messagesData: [...state.messagesData, newMessage],
            textArea: '',
         }
      // newState.messagesData.push(newMessage);
      // newState.textArea = '';
      default:
         return state
   }
}

export const sendMessageCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateMessageTextCreator = (text) => ({type: UPDATE_TEXT_AREA_MESSAGE, text: text});
export default dialogsReducer;