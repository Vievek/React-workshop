import React,{ useState ,useRef} from 'react'

function UseRef() {
    const [first, setfirst] = useState("")
    const intref = useRef(null)
    console.log(first);
  return (
    <>
      <h1>{first}</h1>
      <input type="text" ref={intref} />
      <button onClick={() => setfirst(intref.current?.value)}>click</button>
      <button onClick={() => intref.current.focus()}>focus</button>
    </>
  );
}

export default UseRef