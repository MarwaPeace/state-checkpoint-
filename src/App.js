
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { Component } from 'react'


class App extends Component {
constructor(){
  super()
  this.state={
    fullName:"Selena Gomez",
    bio: "is an American singer, songwriter, and actress. Gomez began her acting career on the children's television series Barney & Friends (2002–2004). In her teenage years",
    profession: "Chanteuse",
    image :"https://akamai.vgc.no/v2/images/dcaa81c7-9f69-4632-b3f2-c188b7583b70?fit=crop&format=auto&h=1793&w=1900&s=8bf6c4ca6ef745464ad843a9a756bd0401eb54f5",
    show:true,
    counter:0

  }
}
Show(){

  this.setState({
    show:!this.state.show })}
componentDidMount(){
  setInterval(() => {this.setState({counter:this.state.counter+1})
}, 1000);
}
render (){
  return (
    <>
    {this.state.show && <CardGroup>
    <Card style={{ width: '18rem' ,marginTop:"50px", backgroundImage: "linear-gradient(white,red)",margin:"auto"}}>
    <Card.Title><h1 style={{margin:"auto"}}>{this.state.fullName}</h1></Card.Title>
      <Card.Img style={{ width: '18rem', margin:"auto"}} variant="top" src={this.state.image} />
      <Card.Body>
        <Card.Title><h3 style={{color:"white"}}>{this.state.profession}</h3></Card.Title>
        <Card.Text style={{color:"white"}}>
        {this.state.bio}
        </Card.Text>
       
      </Card.Body>
    </Card>
    </CardGroup>
}
<Button style={{marginTop:"20px"}} variant="success" onClick={()=>this.Show()}>Show</Button>
    </>
  );
}

}

export default App;
