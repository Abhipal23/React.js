
 function customRender(reactElement,mainContainer){


    /*
    // first create dom element and then inject 

    const domEle=  document.createElement(reactElement.type)
    domEle.innerHTML=reactElement.children
    // now we need to set attributes 

    domEle.setAttribute('href',reactElement.props.href)
    domEle.setAttribute('target',reactElement.props.target)

    // now we need to add all thse to our container
     mainContainer.appendChild(domEle)
    // problem with this code is number of attributes ,if there more attribute then we have to write abov e stament multiple times


// lets fix above one  using loop 

*/

const domEle=  document.createElement(reactElement.type)

domEle.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if(prop==='children')continue
    // some time we get in child in objectb but as of now not  

    domEle.setAttribute(prop,reactElement.props[prop])
}

mainContainer.appendChild(domEle)
    
}

const reactElement ={
    type :'a',
    props:{
        href:'https://google.com',
        target: '_blank'

        // these are attributes 
    },
    children:'click here to open google'
}


const mainContainer =document.querySelector('#root')

// we have created an react element 

// now we need to render 

customRender(reactElement,mainContainer)
// it takes two prameter ,what to be render and where 


