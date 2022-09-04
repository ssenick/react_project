let initialState = {
   navList: [
      {id: 1, nameLink: 'Profile', to: "/profile"},
      {id: 2, nameLink: 'Messages', to: "/dialogs"},
      {id: 3, nameLink: 'Login', to: "/login"},
   ],
   friends: [
      {
         id: 1,
         src: 'https://s1.1zoom.me/b5050/279/Dogs_Colored_background_489617_3840x2400.jpg',
         name: 'Ira',
         to: "/dialogs"
      },
      {
         id: 2,
         src: 'https://zoodoma.com/wp-content/uploads/2019/04/frenchie-face-e1554109768762.jpg',
         name: 'Andrii',
         to: "/dialogs"
      },
      {
         id: 3,
         src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RrbeDSBmhZT6psLXpEolt95PYJUnJXQeyltUgu9cTng4mEKG5ETeRbd-2KIglKnfG1s&usqp=CAU',
         name: "Igor",
         to: "/dialogs"
      },

   ]
};


const asideReduce = (state = initialState, action) => {
   return state;
}
export default asideReduce;