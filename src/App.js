import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Provider } from 'react-redux';
import store from './store';


// const store = createStore(() => [] , {} , applyMiddleware());

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
       
        <Postform/>
       
        <Posts/>
       
      </header>
    </div>
    </Provider>
  );
}

export default App;
