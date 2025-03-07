import './App.css';
import { Card } from './nurse1';

const users = [
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ NARVAE NARVAEZ NARVAZZ',
    number: 339,
  },
  {
    name: '',
    number: 340,
  },
  {
    name: 'LUIS ANTONIO NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS ANTONIO ANTONIO CRUZ ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS ANTONIO ANTONIO XRUZ ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ NARVEAZ NARVAE NARVAEZ NARVAZZ',
    number: 340,
  },
  {
    name: 'LUIS ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO  LUIS ANTONIO  ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'MARIA ELFRIDA DEL CASTILLO BELTRAN',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
    number: 340,
  },
  {
    name: 'LUIS DAVID ANTONIO ANTONIO ANDRADE NARVAEZ',
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
