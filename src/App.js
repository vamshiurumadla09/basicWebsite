import logo from './logo.svg';
import './App.css';
import Header from './componentsJS/Header';
import Footer from './componentsJS/Footer';
import { Outlet } from 'react-router-dom';
import MoviesDataBase from './componentsJS/MoviesDataBase';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
