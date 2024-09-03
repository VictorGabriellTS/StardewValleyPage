import React from "react"
import ReactDOM from "react-dom/client"
import "../../assets/styles/css/index.css"
import Header from "../react_componets/header.jsx"
import SetDefaultContent from "../react_componets/p_content"

ReactDOM.createRoot(document.getElementById("wrapper")).render(
    <React.StrictMode>
        <Header></Header>
        <SetDefaultContent></SetDefaultContent>
    </React.StrictMode>
)
