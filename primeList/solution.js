/* Write a function that generates a list of all prime numbers
 * in a specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia.
*/

const primeSieve = (start, end) => {
  const primes = [];
  const upperLimit = Math.sqrt(end);
  const output = [];

  for (let i = 0; i <= end; i++) {
    primes.push(true);
  }

  for (let i = 2; i <= upperLimit; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= end; j += i) {
        primes[j] = false;
      }
    }
  }

  for (let i = 2; i <= end; i++) {
    if (primes[i] && i >= lowerLimit) output.push(i);
  }

  return output;
};
