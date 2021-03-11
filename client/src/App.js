import Card from './components/Card'
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="c-navbar">
        <div class="c-navbar__logo">
          <a href="/">
            <figure id="604a0aa360b69" class="c-image" data-uid="604a0aa360b64">
              <img src={logo} alt="logo" />
            </figure>
          </a>
        </div>
      </nav>

      <div className="container">
        <Card>
          Card content
        </Card>
      </div>
    </div>
  );
}

export default App;
