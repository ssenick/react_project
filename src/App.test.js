import {render, screen} from '@testing-library/react';
import App from './App';
import React from "react";

test('renders learn react link', () => {
   render(<App/>);
   const linkElement = screen.getByText(/learn react/i);
   expect(linkElement).toBeInTheDocument();
});
// users: [
//    {
//       id: 1,
//       status: true,
//       name: 'Ruslan',
//       surname: 'Ssenick',
//       statements: 'Learn and become stronger',
//       location: {city: 'Sumy', country: 'Ukraine'},
//       srcPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RrbeDSBmhZT6psLXpEolt95PYJUnJXQeyltUgu9cTng4mEKG5ETeRbd-2KIglKnfG1s&usqp=CAU'
//    },
//    {
//       id: 2,
//       status: false,
//       name: 'Alona',
//       surname: 'Asenick',
//       statements: 'Learn and become stronger Learn and Learn and become stronger Learn and become stronger Learn and become stronger',
//       location: {city: 'Kharkiv', country: 'Ukraine'},
//       srcPhoto: 'https://happypik.ru/wp-content/uploads/2019/09/kartinki-sobak-s-nadpisjami13.jpg'
//    },
//    {
//       id: 3,
//       status: true,
//       name: 'Daniil',
//       surname: 'Lsenick',
//       statements: ' become stronger Learn and become stronger Learn and become stronger',
//       location: {city: 'Lviv', country: 'Ukraine'},
//       srcPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RrbeDSBmhZT6psLXpEolt95PYJUnJXQeyltUgu9cTng4mEKG5ETeRbd-2KIglKnfG1s&usqp=CAU'
//    }
// ],

// <article className={s.user}>
//    <div className={s.user__info}>
//       <div className={s.user__avatar}>
//          <img
//             src={props.srcPhoto}
//             alt="avatar"/>
//       </div>
//       <div className={s.user__btns}>
//          {props.status
//             ? <Button onClick={() => props.subscribe(props.id)} text={'subscribe'}/>
//             : <Button onClick={() => props.unSubscribe(props.id)} text={'unsubscribe'}/>}
//       </div>
//    </div>
//    <div className={s.user__about}>
//       <div className={s.user__main}>
//          <h3 className={s.user__name}>
//             {`${props.name} ${props.surname[0]}.`}
//          </h3>
//          <p className={s.user__descr}>
//             {props.statements}
//          </p>
//       </div>
//       <div className={s.user__location}>
//          <p>{props.location.city}</p>
//          <p>{props.location.country}</p>
//       </div>
//    </div>
// </article>


// .user {
//    display: flex;
//    color: white;
//    gap: 30px;
//
//
// &__info {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       gap: 15px;
//       min-width: 205px;
//    }
//
// &__avatar {
//       width: 80px;
//       height: 80px;
//       border-radius: 50%;
//       overflow: hidden;
//       position: relative;
//
//       img {
//          position: absolute;
//          top: 0;
//          left: 0;
//          width: 100%;
//          height: 100%;
//          object-fit: cover;
//       }
//    }
//
// &__about {
//       border-radius: 10px;
//       border: 1px solid #ffffff;
//       overflow: hidden;
//       padding: 15px;
//       display: flex;
//       justify-content: space-between;
//       column-gap: 20px;
//       width: 100%;
//    }
//
// &__main {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       gap: 30px;
//    }
//
// &__name {
//       font-size: 27px;
//       font-weight: 500;
//       line-height: 1.1;
//    }
//
// &__descr {
//       font-size: 18px;
//       line-height: 1.1;
//       opacity: 0.7;
//    }
//
// &__location {
//       p {
//          font-size: 20px;
//          line-height: 1.4;
//          margin-bottom: 10px;
//          font-weight: 500;
//       }
//    }
// }