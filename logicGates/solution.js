const NAND = (x, y) => {
	  return !(x && y) ? 1 : 0;
};


const NOT = (n) => {
		return NAND(n, n);
};


const AND = (x, y) => {
		return NAND(NAND(x, y), NAND(x, y));
};


const OR = (x, y) => {
		return NAND(NAND(x, x), NAND(y, y));
};


const XOR = (x, y) => {
		return NAND(NAND(x, NAND(x, y)), NAND(NAND(x, y), y));
};


