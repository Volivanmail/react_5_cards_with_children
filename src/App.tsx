import './App.css'
import { Card } from './components/Card'
import { data } from './data';

export default function App() {
  return (
    <div className="cards">
      <Card card={data[0]}>
        <img src={data[0].image} className="card-img-top" alt="img"/>
      </Card>
      <Card card={data[1]}/>
    </div>
  )
}