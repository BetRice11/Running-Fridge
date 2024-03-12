// // App.js modification
// import React, { useState } from 'react';
// import Login from './pages/Login';
// import Beverages from './pages/Beverages';

// function App() {
//   const [token, setToken] = useState('');

//   const handleLoginSuccess = (data) => {
//     setToken(data.token);
//     localStorage.setItem('token', data.token); // Simple example; consider more secure options
//   };

//   return (
//     <div className="App">
//       {!token ? (
//         <Login onLoginSuccess={handleLoginSuccess} />
//       ) : (
//         <Beverages token={token} />
//       )}
//     </div>
//   );
// }
