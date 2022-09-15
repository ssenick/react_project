import React from 'react';
import axios from "axios";
import s from "./Users.module.scss";
import Button from "../../UI/button/button";
import avatar from "../../../assets/image/avatar.jpeg"

class Users extends React.Component {
   constructor(props) {
      super(props);
      props.setUsers([
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
      ])
   }

   render() {
      return <div className={s.users}>
         {this.props.users.map((user) => {
            return <article key={user.id} className={s.user}>
               <div className={s.user__info}>
                  <div className={s.user__avatar}>
                     <img
                        src={user?.srcPhoto ? user?.srcPhoto : avatar}
                        alt="avatar"/>
                  </div>
                  <div className={s.user__btns}>
                     {user.status
                        ? <Button onClick={() => this.props.unsubscribe(user.id)} text={'unsubscribe'}/>
                        : <Button onClick={() => this.props.subscribe(user.id)} text={'subscribe'}/>}
                  </div>
               </div>
               <div className={s.user__about}>
                  <div className={s.user__main}>
                     <h3 className={s.user__name}>
                        {`${user.name} ${user.surname[0] ? user.surname[0] : "S."}`}
                     </h3>
                     <p className={s.user__descr}>
                        {user.statements ? user.statements : "Lorem sada masdas jajsda askdas dkaksdkaskdas daksdk kasdk aks"}
                     </p>
                  </div>
                  <div className={s.user__location}>
                     <p>{user.location?.city ? user.location.city : 'Sumy'}</p>
                     <p>{user.location?.country ? user.location.country : "Ukraine"}</p>
                  </div>
               </div>
            </article>

         })}
      </div>
   }
}

export default Users;