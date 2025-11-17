
import './App.css'
import ManuButtonList from './components/ManuButtonList'
import type { ManuButtonType } from './types/ManuButtonType'

function App() {

  const ManuItems:ManuButtonType[] = [
    {
      id:1,
      title:"Popular!"
    },
    {
      id:2,
      title:"Combo Box"
    },
    {
      id:3,
      title:"Crazy Doubles"
    },
    {
      id:4,
      title:"Family Deals | kids Meal"
    },
    {
      id:5,
      title:"Starters"
    },
    {
      id:6,
      title:"Pizza Flavour"
    },
    {
      id:7,
      title:"Pasta | Sandwich | Calzone"
    },
    {
      id:8,
      title:"Desserts"
    },
    {
      id:9,
      title:"Baverages & Extra"
    },

  ]
  

  return (
    <>
<ManuButtonList items = {ManuItems}/>
    </>
  )
}

export default App
