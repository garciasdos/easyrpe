import firebase from './firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set(
      {
        uid,
        type: 'athlete',
        ...data
      },
      { merge: true }
    );
}

export async function getAllUsers() {
  const snapshot = await firestore.collection('users').get();

  const users = [];

  snapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });

  return { users };
}

export function createRoutine(userId, name, createdAt, startDate, endDate) {
  return firestore.collection('routines').doc().set(
    {
      userId,
      name,
      createdAt,
      startDate,
      endDate
    },
    { merge: true }
  );
}
