import './App.css';
import { Card } from './nurse1';

const users = [
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ NARVAE NARVAEZ NARVAZZ',
    number: 339,
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
