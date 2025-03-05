import './App.css';
import { Card } from './nurse1';

const users = [
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ',
    number: 339,
  },
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  
 
];

export function App() {
  return (
    <section className="App">
      {users.map(({ name, number }) => (
        <Card
          number={number}
        >
          {name}
        </Card>
      ))}
    </section>
  );
}
