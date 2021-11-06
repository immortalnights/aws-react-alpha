import logo from './logo.svg'
import './App.css'
import Amplify from '@aws-amplify/core'
import awsconfig from './aws-exports'
import { Game } from './models'

function App() {
  Amplify.configure(awsconfig)

  const getEverything = async () => {
    const models = await Amplify.DataStore.query(Game);
    console.log(models);
  }
  const saveSomething = async () => {
    await Amplify.DataStore.save(
      new Game({
        id: "1",
        name: "mygame",
      })
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p onClick={getEverything}>Get everything</p>
        <p onClick={saveSomething}>Save something</p>
      </header>
    </div>
  );
}

export default App;
