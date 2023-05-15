import React from "react"
import './App.css'
import Preview from "./components/Preview"
import Navbar from "./components/Navbar"

import { useState } from "react"

function App() {

  const [markdown , setMarkdown] = useState(``);

  return (
    <div className="wrapper">
      <Navbar markdown={markdown} setMarkdown={setMarkdown}/>
      <Preview markdown={markdown} setMarkdown={setMarkdown} />
    </div>
  )
}

export default App
