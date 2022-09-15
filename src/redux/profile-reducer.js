const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const UPDATE_TEXT_INPUT = " UPDATE-TEXT-INPUT";

let initialState = {
   aboutProfile: {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaHWHLDl411K6vo4P6im_KF1JBUXGjdDvWw&usqp=CAU",
      name: 'Ruslan S.',
      date: "14 january",
      city: "Namestovo",
      href: "https://greenshop.ssenick.fun"
   },
   posts: {
      postData: [
         {
            id: 1,
            message: 'Post 1 Post 1 Post 1',
            like: '1',
            src: "https://s1.1zoom.me/big0/280/Dogs_Bulldog_Snout_479887.jpg"
         },
         {
            id: 2,
            message: 'Post 2 Post 2 Post 2',
            like: '10',
            src: "https://oir.mobi/uploads/posts/2019-12/1576378395_1-2.png"
         },
         {
            id: 3,
            message: 'Post 3 Post 3 Post 3',
            like: '100',
            src: "https://krot.info/uploads/posts/2022-03/1646115263_2-krot-info-p-smeshnie-sobaki-smeshnie-foto-2.jpg"
         },
      ],
      newPostText: {
         textArea: '',
         textInput: '',
      },
   }
};
const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NEW_POST:
         if (state.posts.newPostText.textArea === '') {
            alert("You didn't enter text")
            return state
         }
         let newPost = {
            id: state.posts.postData.length + 1,
            message: state.posts.newPostText.textArea,
            like: '0',
            src: state.posts.newPostText.textInput,
         };

         return {
            ...state,
            posts: {
               ...state.posts,
               postData: [...state.posts.postData, newPost],
               newPostText: {
                  ...state.posts.newPostText,
                  textArea: '',
                  textInput: "",
               }
            }
         }

      // newState1 = {...state}
      // newState1.posts.postData = [...state.posts.postData];
      // newState1.posts.postData.push(newPost);
      // newState1.posts.newPostText = {...state.posts.newPostText}
      // newState1.posts.newPostText.textArea = '';
      // newState1.posts.newPostText.textInput = '';
      // return newState1;
      case UPDATE_TEXT_AREA:
         return {
            ...state,
            posts: {
               ...state.posts,
               newPostText: {
                  ...state.posts.newPostText,
                  textArea: action.text
               }
            }
         }
      // let newState2 = {...state}
      // newState2.posts = {...state.posts}
      // newState2.posts.newPostText = {...state.posts.newPostText}
      // newState2.posts.newPostText.textArea = action.text;
      // return newState2;
      case UPDATE_TEXT_INPUT:
         return {
            ...state,
            posts: {
               ...state.posts,
               newPostText: {
                  ...state.posts.newPostText,
                  textInput: action.text
               }
            }
         }
      // let newState3 = {...state}
      // newState3.posts = {...state.posts}
      // newState3.posts.newPostText = {...state.posts.newPostText}
      // newState3.posts.newPostText.textInput = action.text;
      // return newState3;
      default:
         return state;
   }
}
export const addPostsCreator = () => ({type: ADD_NEW_POST});
export const updateTextAreaPostsCreator = (text) => ({type: UPDATE_TEXT_AREA, text: text});
export const updateTextInputPostsCreator = (text) => ({type: UPDATE_TEXT_INPUT, text: text});
export default profileReducer;