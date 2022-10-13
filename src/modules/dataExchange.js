/* eslint-disable consistent-return */
const apiSite = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tV9Mpi7zX7Kny0Hg0P8m/scores/';

// send the score data to API

const dataPush = async (scoreData) => {
  await fetch(apiSite, {
    method: 'POST',
    body: JSON.stringify(scoreData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

// receive data from API
const dataFetch = async () => {
  try {
    const response = await fetch(apiSite);
    if (response.status === 200) {
      const receivedData = await response.json();
      return receivedData;
    }
  } catch (e) {
    return (e);
  }
};

export { dataPush, dataFetch };
