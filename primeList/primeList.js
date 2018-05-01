/* Write a function that generates a list of all prime numbers
 * in a specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia.
*/

const primeSieve = (start, end) => {
	const sieveBox = [];
	const outBox = [];
	const upperLimit = Math.sqrt(end);
	for (let i = 0; i < end; i++) {
		sieveBox.push(true);
	}

	for (let i = 2; i < upperLimit; i++) {
		if (array[i]) {
			for (let j = i * i; j < end; j += i) {
				array[j] = false;
			}
		}
	}

	for (let i = 2; i < end; i++) {
		if(array[i] && start <= i && i <= end) {
			outBox.push(i);
		}
	}
	return outBox;
  // Return a list of all prime numbers >= start and <= end
};
