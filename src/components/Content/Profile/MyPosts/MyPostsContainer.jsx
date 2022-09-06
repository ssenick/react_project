import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {
   addPostsCreator,
   updateTextAreaPostsCreator,
   updateTextInputPostsCreator
} from "../../../../redux/profile-reducer";

//
// const MyPostsContainer = (props) => {
//    const onChangArea = (text) => {
//       props.store.dispatch(updateTextAreaPostsCreator(text))
//    }
//    const onChangInput = (text) => {
//       props.store.dispatch(updateTextInputPostsCreator(text));
//    }
//    const onClickBtn = () => {
//       props.store.dispatch(addPostsCreator());
//    }
//
//    return <MyPosts postData={props.store.getState().profilePage.posts.postData}
//                    onChangArea={onChangArea}
//                    onChangInput={onChangInput}
//                    onClickBtn={onClickBtn}
//                    newPostText={props.store.getState().profilePage.posts.newPostText}
//    />
// };

const mapStateToProps = (state) => {
   return {
      newPostText: state.profilePage.posts.newPostText,
      postData: state.profilePage.posts.postData,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onChangArea: (text) => {
         dispatch(updateTextAreaPostsCreator(text))
      },
      onChangInput: (text) => {
         dispatch(updateTextInputPostsCreator(text));
      },
      onClickBtn: () => {
         dispatch(addPostsCreator());
      },
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
