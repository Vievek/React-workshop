import React from 'react'
import Test from './Test'

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
    <h1>hello</h1>
    <h2>hi</h2>
    <Test sry={"hi"} name={person.name} age={person.age} add={person.address.city}/>
    <hr></hr>
    <Test {...person }/>
    </>
    
  )
}

export default App