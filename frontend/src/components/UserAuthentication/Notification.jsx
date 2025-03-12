// export default function Notification() {
//   return (
//     <div role="alert" className="alert alert-success">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6 shrink-0 stroke-current"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//       <span>Your purchase has been confirmed!</span>
//     </div>
//   );
// }

import { useSelector, useDispatch } from "react-redux";

export default function Notification() {
  const {
    isNotification,
    notificationMessage,
    loggedUserName,
    isNewUser,
    newUserName,
    isError,
    errorMessage,
  } = useSelector((store) => store.notification);
  // const dispacth = useDispatch();

  console.log(isError, errorMessage);

  return (
    <div className=" flex max-w-md bg-stone-300 shadow-lg rounded-lg overflow-hidden fixed top-1 left-1/2 -translate-x-1/2">
      <div className="w-2 bg-gray-800"></div>
      <div className="flex items-center px-2 py-3">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
        <div className="mx-3">
          {/* conditionally show notif if user is new (only once,during first time) or old */}
          <h2 className="text-xl font-semibold text-gray-800">
            {isError
              ? `${errorMessage}`
              : isNewUser
              ? `Welcome ${newUserName}`
              : `Welcome Back ${loggedUserName} !`}
          </h2>
          <p className="text-gray-600">
            {isNotification && notificationMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
