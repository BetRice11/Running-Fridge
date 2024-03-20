// import React, { useEffect } from 'react';
// import { useGetUserQuery, useUpdateUserMutation } from '../app/userSlice.js';

// const ProfilePage = () => {
//   const { data: user, isError, isLoading } = useGetUserQuery();
//   const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

//   useEffect(() => {
//     if (isError) {
//       // Handle error
//     }
//   }, [isError]);

//   const handleUpdateUser = (updatedUserData) => {
//     updateUser(updatedUserData);
//   };

//   return (
//     <div>
//       {isLoading && <div>Loading...</div>}
//       {isUpdating && <div>Updating...</div>}
//       {user && (
//         <div>
//           <h1>Profile Page</h1>
//           <div>
//             <strong>Name:</strong> {user.name}
//           </div>
//           <div>
//             <strong>Email:</strong> {user.email}
//           </div>
//           {/* Add more user information here */}
//           <button onClick={() => handleUpdateUser({ /* updated user data */ })}>Update Profile</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
