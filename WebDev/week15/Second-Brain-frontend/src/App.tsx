import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { SignUp } from "./pages/SignUp"

const App = () =>{
  return (
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App