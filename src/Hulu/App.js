import React , {useState} from 'react'
import Header from "./Header"
import Navbar from "./Navbar"
import Results from "./Results"
import "./App.css"
import requests from "./request"

function App() {

 const [selectedOPtion, setselectedOPtion] = useState(requests.fetchTrending);
    return (
        <div className = "app">
            
            <Header/>
            <Navbar setselectedOPtion= {setselectedOPtion}/>
            <Results selectedOption={selectedOPtion} />
            
            {/* Navigation */}
            {/* Results */}
        </div>
    )
}

export default App
