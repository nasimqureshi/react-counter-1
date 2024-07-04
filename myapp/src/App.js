import { useState } from "react";

function App() {
  const[friends, setFriends] = useState(["Alex", "John", "Sam"])

  const addOne = () => {
    setFriends([...friends, "Sam,"])
  }
  const removeOne = () => {
    setFriends(friends.filter((f)=> f!=="Alex"))
  }
  const updateOne = () =>{
    setFriends(friends.map((f) => "Alex" ? "Alex Smith": f))
  }
    
  
  
  
  return (
    <>
    {friends.map((f) => (
      <li key={Math.random()}>{f}</li>
    ))}
    <button onClick={addOne}>Add One</button>
    <button onClick={removeOne}>Remove One</button>
    <button onClick={updateOne}>update One</button>
   </>
  );
}

export default App;
