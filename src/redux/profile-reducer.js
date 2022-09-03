const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const UPDATE_TEXT_INPUT = " UPDATE-TEXT-INPUT";


const profileReducer = (state, action) => {
   switch (action.type) {
      case ADD_NEW_POST:
         if (state.newPostText.textArea === '') {
            alert("You didn't enter text")
            return state
         }
         let newPost = {
            id: state.postData.length + 1,
            message: state.newPostText.textArea,
            like: '0',
            src: state.newPostText.textInput,
         };
         state.postData.push(newPost);
         state.newPostText.textArea = '';
         state.newPostText.textInput = '';
         return state;
      case UPDATE_TEXT_AREA:
         state.newPostText.textArea = action.text;
         return state;
      case UPDATE_TEXT_INPUT:
         state.newPostText.textInput = action.text;
         return state;
      default:
         return state;
   }

}
export const addPostsCreator = () => ({type: ADD_NEW_POST});
export const updateTextAreaPostsCreator = (text) => ({type: UPDATE_TEXT_AREA, text: text});
export const updateTextInputPostsCreator = (text) => ({type: UPDATE_TEXT_INPUT, text: text});
export default profileReducer;