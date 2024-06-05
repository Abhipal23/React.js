
import './App.css'
import Card from './components/card'

function App() {


  return (
      <>
          <h1 className="bg-amber-300 rounded-2xl text-black p-4 m-2 ">
              Tailwind css
          </h1>
           <Card username="Abhishek" btnText="click me"/>
           <Card username="Abhi"/>
      </>
  )
}

export default App
