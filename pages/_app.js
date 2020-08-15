import 'antd/dist/antd.css'
import '../styles/dew.css'
// import '../styles/global.css'
 
import '../styles/dashboard.css'
 
import '../styles/card.css'
import '../styles/mapku.css'
import '../styles/table.css'
import '../styles/infoBox.css'
// import "leaflet/dist/leaflet.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../styles/Login.css'
// import '../styles/cobaSide.css'

import React from 'react'
import { Provider, connect } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducers'

const store = createStore(reducer, compose(applyMiddleware(thunk)));

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }



const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      {console.log("ini store2",store)}
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp