import Head from './component/Head';
import Body from './component/Body';
import {Provider }from 'react-redux';
import './App.css';
import Store from './utils/Store';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Head/>
        <Body/>
    </div>
    </Provider>
  );
}
export default App;
