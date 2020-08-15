// import React from 'react'
// import { Layout, Menu } from 'antd';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import Link from 'next/link'
// import SideCompDew from './components/SideCompDew';
// const { Header, Content, Footer, Sider } = Layout;


// import { Provider, connect } from "react-redux";
// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import reducer from './reducers'

// import KasusDew from './kasus'

// const store = createStore(reducer, compose(applyMiddleware(thunk)));


// const index = () => {
  
  
//   return (
//     <Provider store={store}>
//     {console.log("ini store",store)}
//     <div>
//       <Layout>
//         <SideCompDew/>
//         <Layout>
//           <Content style={{ margin: '24px 16px 0' }}>
//             <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//               <KasusDew/>
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     </div>
//     </Provider>
//   )
// }

// export default index


import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;
import LoginDew from './login';



class index extends Component {

  render() {
    return (
    <div className="loginku">
      <LoginDew/>
    </div>
    
    )
  }
}

export default index