// import React from 'react';

// import '../Styling/dashboardComponent.css';
// // import Logo from '../Styling/logowhite.png';

// function displayUser() {
//   return (
// <div className="display-user">
//         <div className="txt-user">
//             <p>NEW USER</p>
//           </div>
//           <div className="txt-user-count">
//             <p>10012</p>
//           </div>
//           <div className="txt-user-day">
//             <p>28 Today</p>
//           </div>
//           <div className="user-vector"></div>
//   </div>
//   );
// }

// export default displayUser;

// import '../Styling/dashboardComponent.css';
// import React, { Component } from 'react'

// class displayUser extends Component {
//   render() {
//     return (
//       <div>
//         <div className="display-user">
//         <div className="txt-user">
//             <p>NEW USER</p>
//           </div>
//           <div className="txt-user-count">
//             <p>10012</p>
//           </div>
//           <div className="txt-user-day">
//             <p>28 Today</p>
//           </div>
//           <div className="user-vector"></div>
//       </div>
//       </div>
//     )
//   }
// }

// export default displayUser;

import React from 'react'

const DisplayUser = () => {
  return (
    <div>
      <div className="display-user">
        <div className="txt-user">
            <p>NEW USER</p>
        </div>
        <div className="txt-user-count">
          <p>10012</p>
        </div>
        <div className="txt-user-day">
          <p>28 Today</p>
        </div>
        {/* <div className="user-vector"></div> */}
      </div>
    </div>
  )
}

export default DisplayUser