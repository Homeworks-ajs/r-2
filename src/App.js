import './App.css';
import ShopItemClass from './ShopItemClass';

function App(item) {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item.item} />
      </div>
    </div>
  )
}

export default App;
