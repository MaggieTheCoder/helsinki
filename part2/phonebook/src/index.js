import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// let inPhoneBook = persons.some((p) => {
//   if (p.name === newName) {
//     return true;
//   }
//   return false;
// });
// console.log(inPhoneBook);
// if (inPhoneBook) {
//   alert(`${newName} already exists`);
// } else {
//   setPersons(persons.concat(personObject));
//   setNewName("");
// }
