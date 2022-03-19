import './App.css';
import Card from './Card';
import contacts from './Contact';
import Avatar from './Avatar';

function createCard(contact){
  return (
    <Card
    id={contact.id}
     key={contact.id} 
     name={contact.name} 
     image={contact.imgURL} 
     phone={contact.number} 
     mail={contact.email}/>
    )
}

function App() {
  return (
    <>
    <Avatar img="https://media.gettyimages.com/photos/robert-downey-jr-attends-the-the-first-avenger-civil-war-berlin-at-picture-id522965038?s=2048x2048"/>
   {/* <Card name={contacts[0].name} image={contacts[0].imgURL} phone={contacts[0].number} mail={contacts[0].email}/>
   <Card name={contacts[2].name} image={contacts[2].imgURL} phone={contacts[2].number} mail={contacts[2].email}/> */}
    {contacts.map(createCard)}
    </>
  );
}

export default App;
