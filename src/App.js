import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Routes as Switch,Route} from "react-router-dom";
const App= () => {
  const pageSize = 5;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar color='#f11946' height={3} progress={progress}/>
        <Switch>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category='general'/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category='health'/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category='entertainment'/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" country="in" category='business'/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category='sports'/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category='science'/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category='technology'/>}/>
        </Switch>
        </Router>
      </div>
    )
}
export default App;


