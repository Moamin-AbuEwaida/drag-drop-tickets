import Board from './components/Board'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id='board-1' className='board'>
          <Card id='card-1' className='card' draggable='true'>
            <h1>Card One</h1>
            <p> This is a test of creating draggable tickets</p>
          </Card>
        </Board>
        <Board id='board-2' className='board'>
          <Card id='card-2' className='card' draggable='true'>
            <h1>Card Two</h1>
            <p> This is a test of creating draggable tickets</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
