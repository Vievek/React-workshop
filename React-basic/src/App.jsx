import React from 'react'
import Test from './Test'
import UseState from './UseState'
import CartComponent from './CartComponent'
import UseEffect from './UseEffect'
import Button from './button'
import UseRef from './UseRef'
import UseMemo from './UseMemo'

function App() {
  const person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
  hobbies: ["reading", "traveling", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
}
  return (
    <>
      {/* <h1>hello</h1>
    <h2>hi</h2>
    <Test sry={"hi"} name={person.name} age={person.age} add={person.address.city}/>
    <hr></hr>
    <Test {...person }/>
    <UseState/>
    <CartComponent/>
    <UseEffect/> */}
      {/* <Button children="hello" cls="primary-button" />
      <br></br>
      <Button children="hello" cls="secondary-button" />
      <br/>
      <Button children="hello" cls="outline-button" /> */}

      {/* <UseRef/> */}
      <UseMemo/>
    </>
  );

}

export default App