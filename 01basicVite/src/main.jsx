import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherUser= "ract and chai"

const reactEle = React.createElement(
  // a tag
  // object of key value pair 

  // text 

  'a',
  {href:'https://www.google.com/',target:'_blank'},
  'click here to vist google  ',

  anotherUser
  // varable injection : after all tree formation variable inject here

)

ReactDOM.createRoot(document.getElementById('root')).render(
 
   
     reactEle
    // <App/>
 
)
