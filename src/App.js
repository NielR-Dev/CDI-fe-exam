import './App.css';
import ImageItem from './ImageItem';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <h2 className='header'>Image Gallery</h2>
        <div className="grid">
          <ImageItem imgURL="./img/mist.jpg" altText="Image"></ImageItem>
          <ImageItem imgURL="./img/mountainskies.jpg" altText="Image"></ImageItem>
          <ImageItem imgURL="./img/ocean.jpg" altText="Image"></ImageItem>
          <ImageItem imgURL="./img/rocks.jpg" altText="Image"></ImageItem>
          <ImageItem imgURL="./img/underwater.jpg" altText="Image"></ImageItem>
          <ImageItem imgURL="./img/nature.jpg" altText="Image"></ImageItem>
          <ImageItem imgURL="./img/fields.jpg" altText="Image"></ImageItem>
          <ImageItem imgURL="./img/tree.jpg" altText="Image"></ImageItem>
          <ImageItem imgURL="./img/water-drop.jpg" altText="Image"></ImageItem>
        </div>
      </div>
    </div>
  );
}

export default App;
