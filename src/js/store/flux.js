const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: []
	  },
	  actions: {
		// Function to load contacts from the API
		loadContacts: async () => {
		  try {
			const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/downtown_xii');
			if (response.ok) {
			  const contacts = await response.json();
			  setStore({ contacts });
			} else {
			  throw new Error('Failed to fetch contacts');
			}
		  } catch (error) {
			console.error('Error loading contacts:', error);
		  }
		},
		// Function to add a new contact
		addContact: async (newContact) => {
		  try {
			const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(newContact),
			});
			if (response.ok) {
			  getActions().loadContacts(); // Reload the contact list
			} else {
			  throw new Error('Failed to post new contact');
			}
		  } catch (error) {
			console.error('Error adding new contact:', error);
		  }
		},
		// Function to update a contact
		updateContact: async (id, updatedContact) => {
		  try {
			const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
			  method: 'PUT',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(updatedContact),
			});
			if (response.ok) {
			  getActions().loadContacts(); // Reload the contact list
			} else {
			  throw new Error('Failed to update contact');
			}
		  } catch (error) {
			console.error('Error updating contact:', error);
		  }
		},
		// Function to delete a contact
		deleteContact: async (id) => {
		  try {
			const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
			  method: 'DELETE',
			});
			if (response.ok) {
			  getActions().loadContacts(); // Reload the contact list
			} else {
			  throw new Error('Failed to delete contact');
			}
		  } catch (error) {
			console.error('Error deleting contact:', error);
		  }
		},
		// ...other actions
	  }
	};
  };
  
  export default getState;
