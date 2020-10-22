// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve, reject) => {
    const canProcess = Math.random() > 0.3;
    setTimeout(() => {
      const id = transaction.id;
      if (canProcess) {
        resolve({ id, delay });
      } 
        reject(id);
    }, delay);
  });
};

function randomIntegerFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const logSuccess = ({ id, delay }) => {
  console.log(`Transaction ${id} processed in ${delay}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70})
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71})
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72})
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73})
  .then(logSuccess)
  .catch(logError);