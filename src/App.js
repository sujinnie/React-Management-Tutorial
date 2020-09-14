import React, { Component } from 'react';
//import logo from './logo.svg';
import Customer from './components/customer'
import './App.css';
import Paper from '@material-ui/core/Paper'; //컴포넌트의 외부를 감쌀 때 쓰는 컴포넌트
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit*3,
    overflowX: "auto" //x축으로 오버플로우 가능,,
  },
  table:{
    minWidth: 1080 //가로 최소 1080px -> 가로스크롤바 생길수도 있다 이말
  }
})

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
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c=>{//map함수 쓸때는 key라는 props가 필수
              return(
                <Customer
                  key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
                />
              )
            })}
          </TableBody>
        </Table>
      </Paper>
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

export default withStyles(styles)(App);
