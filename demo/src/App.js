import './App.css';
import Card from './Card';
import contacts from './Contact';
import Avatar from './Avatar';


function App() {
  return (
    <>
    <Avatar img="https://media.gettyimages.com/photos/robert-downey-jr-attends-the-the-first-avenger-civil-war-berlin-at-picture-id522965038?s=2048x2048"/>
   <Card name={contacts[0].name} image={contacts[0].imgURL} phone={contacts[0].number} mail={contacts[0].email}/>
   <Card name={contacts[1].name} image={contacts[1].imgURL} phone={contacts[1].number} mail={contacts[1].email}/>
   <Card name={contacts[2].name} image={contacts[2].imgURL} phone={contacts[2].number} mail={contacts[2].email}/>
    </>
  );
}

export default App;
