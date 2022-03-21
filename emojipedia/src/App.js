import Emoji from './Emoji';
import Entry from './Entry';
import './App.css';

function CreateEntry(singleEmoji){
  return <Entry
  key = {singleEmoji.id}
  emoji ={singleEmoji.emoji}
  name ={singleEmoji.name}
  description ={singleEmoji.meaning}
   />
}

function App() {
  return (
    <div className="App">
    <h1>
      <span>EmojiPedia</span>
    </h1>
    <dl className='dictionary'>
      {Emoji.map(CreateEntry)} {/** for making object array into an single object and passing it to the function to print . */}
    </dl>
    </div>
  );
}

export default App;
