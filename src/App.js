import React, { useState } from 'react';
import './App.css';


import {
    Switch,
    Route,
    NavLink, Link, useHistory,

} from 'react-router-dom';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
<>


    <nav>
        <ul>
            <li>
                <NavLink to="/" activeClassName="active-link">Home Page</NavLink>
            </li>


            <li>
                <NavLink to="/login" activeClassName="active-link">Login</NavLink>
            </li>

            <li>
                <NavLink to="/blogposts" activeClassName="active-link">Blog Overzicht</NavLink>
            </li>


            {/*{isLoggedIn === true &&*/}
            <li>
                <NavLink to="/blog" activeClassName="active-link">Blogpost</NavLink>
            </li>
            {/*}*/}

        </ul>
    </nav>


    <Switch>

        <Route exact path="/">
            <section>
                <h1>Home Page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ex fugiat reiciendis
                    temporibus! Assumenda dicta esse laborum porro, provident vero!
                </p>
            </section>
        </Route>


        <Route exact path="/login">
        <section>
            <h1>Login</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ex fugiat reiciendis
                temporibus! Assumenda dicta esse laborum porro, provident vero!
            </p>
        </section>
    </Route>



        <Route exact path="/blogposts">
            <section>
                <h1>Blogpost</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ex fugiat reiciendis
                    temporibus! Assumenda dicta esse laborum porro, provident vero!
                </p>
            </section>
        </Route>


        <Route exact path="/blog">
            <section>
                <h1>Blog Overzicht</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ex fugiat reiciendis
                    temporibus! Assumenda dicta esse laborum porro, provident vero!
                </p>
            </section>
        </Route>


    </Switch>












</>




  );
}

export default App;
