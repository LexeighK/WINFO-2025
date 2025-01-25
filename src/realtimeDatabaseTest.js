import { ref, set, onValue } from 'firebase/database';
import { db } from './firebaseConfig.js'; // Use './' to indicate the same directory



// Write data to the database
const writeData = () => {
  const dataRef = ref(db, 'path/to/data');
  set(dataRef, {
    name: 'John Doe',
    age: 30,
  })
    .then(() => console.log('Data written successfully!'))
    .catch((err) => console.error('Error writing data:', err));
};

// Read data from the database
const readData = () => {
  const dataRef = ref(db, 'path/to/data');
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    console.log('Realtime Data:', data);
  });
};

// Run the functions for testing
writeData();
readData();
