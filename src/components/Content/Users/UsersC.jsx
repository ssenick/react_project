import React from 'react';
import s from "./Users.module.scss";
import Button from "../../UI/button/button";
import avatar from "../../../assets/image/avatar.jpeg"
import axios from "axios";

class Users extends React.Component {

   async componentDidMount() {
      axios.get("https://jsonplaceholder.typicode.com/todos/1")
         .then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
         })
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