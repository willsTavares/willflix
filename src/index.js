import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom';



const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  < BrowserRouter >
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
      { /*<Route component={() => (<div>Pagina404</div)} /> forma rápida parece teste pequenas, não ideal*/}

    </Switch>
  </BrowserRouter >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//npm install react-router-dom : https://reactrouter.com/web/guides/quick-start
//SPA = single page application
//<BrowserRouter> = Para criar rotas do Navegador
//<Switch> = Define as entradas possíveis
//<Route> = Cada Route uma rota de navegação