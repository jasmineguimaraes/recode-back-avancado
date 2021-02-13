//import './css/App.css';

import { StaticRouter as Router, Route } from 'react-router-dom'
import React, { lazy, Suspense} from 'react';

import Navbar from './views/navbar'
import Main from './views/main';
import Lojas from './views/lojas';
import Produtos from './views/produtos';
import Contato from './views/contato';
import Footer from "./views/footer.js";

function App() {
  return (
    <Router>
        <div className="App">
              	<Navbar />
              <Route exact path="/" component={Main} />
              <Route exact path='/produtos' component={Produtos} />
              <Route exact path="/lojas" component={Lojas} />
              <Route exact path="/contato" component={Contato} />
              	<Footer />
        </div>
    </Router>
  );
}

export default App;
