import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.contacts.loading;
export const getError = (state) => state.contacts.error;
export const getFilter = (state) => state.contacts.filter;
export const getForm = (state) => state.contacts.items;

export const findContact = createSelector(
  [getForm, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const fileredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    const sortedContacts = [...fileredContacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedContacts;
  }
);

// export const getContact = (state) => {
//   const filter = getFilter(state);
//   const allContacts = getForm(state);

//   const normalizedFilter = filter.toLocaleLowerCase();

//   if (filter.length) {
//     return allContacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   } else {
//     return allContacts;
//   }
// };

// export const findContact = createSelector(
//   [getForm, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLocaleLowerCase();

//     if (filter.length) {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//     } else {
//       return contacts;
//     }
//   }
// );
