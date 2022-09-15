const SUBSCRIBE = 'SUBSCRIBE',
   UNSUBSCRIBE = 'UNSUBSCRIBE',
   SET_USERS = 'SET_USERS';

let initialState = {
   users: [
      {
         id: 1,
         status: true,
         name: 'Ruslan',
         surname: 'Ssenick',
         statements: 'Learn and become stronger',
         location: {city: 'Sumy', country: 'Ukraine'},
         srcPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RrbeDSBmhZT6psLXpEolt95PYJUnJXQeyltUgu9cTng4mEKG5ETeRbd-2KIglKnfG1s&usqp=CAU'
      },
      {
         id: 2,
         status: false,
         name: 'Alona',
         surname: 'Asenick',
         statements: 'Learn and become stronger Learn and Learn and become stronger Learn and become stronger Learn and become stronger',
         location: {city: 'Kharkiv', country: 'Ukraine'},
         srcPhoto: 'https://happypik.ru/wp-content/uploads/2019/09/kartinki-sobak-s-nadpisjami13.jpg'
      },
      {
         id: 3,
         status: true,
         name: 'Daniil',
         surname: 'Lsenick',
         statements: ' become stronger Learn and become stronger Learn and become stronger',
         location: {city: 'Lviv', country: 'Ukraine'},
         srcPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RrbeDSBmhZT6psLXpEolt95PYJUnJXQeyltUgu9cTng4mEKG5ETeRbd-2KIglKnfG1s&usqp=CAU'
      }
   ],
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SUBSCRIBE:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userID) {
                  return {...user, status: true};
               }
               return user;
            })
         }
      case UNSUBSCRIBE:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userID) {
                  return {...user, status: false};
               }
               return user;
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         }
      default:
         return state
   }
}
export const subscribeAc = (userID) => ({type: SUBSCRIBE, userID}),
   unSubscribeAc = (userID) => ({type: UNSUBSCRIBE, userID}),
   setUsersAc = (users) => ({type: SET_USERS, users});


export default usersReducer;