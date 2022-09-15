import React from "react";
import s from './Users.module.scss';
import Button from "../../UI/button/button";
import axios from "axios";

const Users = (props) => {
   if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            console.log(response.data.items)
            props.setUsers(response.data.items)
         });
   }
   return (
      <div className={s.users}>
         {props.users.map((user) => {
            return <article key={user.id} className={s.user}>
               <div className={s.user__info}>
                  <div className={s.user__avatar}>
                     <img
                        src={user.srcPhoto}
                        alt="avatar"/>
                  </div>
                  <div className={s.user__btns}>
                     {user.status
                        ? <Button onClick={() => props.unsubscribe(user.id)} text={'unsubscribe'}/>
                        : <Button onClick={() => props.subscribe(user.id)} text={'subscribe'}/>}
                  </div>
               </div>
               <div className={s.user__about}>
                  <div className={s.user__main}>
                     <h3 className={s.user__name}>
                        {`${user.name} ${user.surname[0]}.`}
                     </h3>
                     <p className={s.user__descr}>
                        {user.statements}
                     </p>
                  </div>
                  <div className={s.user__location}>
                     <p>{user.location.city}</p>
                     <p>{user.location.country}</p>
                  </div>
               </div>
            </article>

         })}
      </div>
   )
}

export default Users;