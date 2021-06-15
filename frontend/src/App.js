import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AboutCryptoScreen from './screens/AboutCryptoScreen';
import ItemScreen from './screens/ItemScreen';
import AdminScreen from './screens/AdminScreen';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/about-crypto' component={AboutCryptoScreen} />
          <Route exact path='/items' component={ItemScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
          <Route exact path='/admin-tools' component={AdminScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
