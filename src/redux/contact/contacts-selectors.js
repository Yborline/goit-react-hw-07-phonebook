export const getLoading = (state) => state.contacts.loading;
export const getError = (state) => state.contacts.error;
export const getFilter = (state) => state.filter;
export const getForm = (state) => state.contacts.items;
export const getContact = (state) =>
  findContact(state.contacts.items, state.contacts.filter);

const findContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  if (filter.length) {
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    return allContacts;
  }
};
