const evenOccurence = (arr) => {
	const obj = {};
	let first;
	arr.forEach(item => {
		if (obj[item] === undefined) return obj[item] = 1;
		if (obj[item] === 1) return obj[item] = 2;
		if (obj[item] === 2) return obj[item] = 1;
	});
	arr.forEach(item => {
		if (obj[item] === 2 && first === undefined) first = item;
	});
	return first;
};

const onlyEven = evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
