import React, { Component } from 'react';
//import logo from './logo.svg';
import Customer from './components/customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '정수진',
  'birthday': '960328',
  'gender': '여자',
  'job': '대학생',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '960222',
  'gender': '남자',
  'job': '대학생',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '홍홍홍',
  'birthday': '961222',
  'gender': '여자',
  'job': '대학생',
}]

class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c=>{//map함수 쓸때는 key라는 props가 필수
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
        // <Customer
        //   id={customer[0].id}
        //   image={customer[0].image}
        //   name={customer[0].name}
        //   birthday={customer[0].birthday}
        //   gender={customer[0].gender}
        //   job={customer[0].job}
        // />
        // <Customer
        //   id={customer[1].id}
        //   image={customer[1].image}
        //   name={customer[1].name}
        //   birthday={customer[1].birthday}
        //   gender={customer[1].gender}
        //   job={customer[1].job}
        // />
        // <Customer
        //   id={customer[2].id}
        //   image={customer[2].image}
        //   name={customer[2].name}
        //   birthday={customer[2].birthday}
        //   gender={customer[2].gender}
        //   job={customer[2].job}
        // />
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello React Project!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
