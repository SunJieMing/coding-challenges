const logicMethods = require('./logicGates');
describe('LogicGates', () => {
  describe('NAND', () => {
    it('should function like NAND', () => {
      expect(logicMethods.NAND(0, 0)).toBe(1);
      expect(logicMethods.NAND(0, 1)).toBe(1);
      expect(logicMethods.NAND(1, 0)).toBe(1);
      expect(logicMethods.NAND(1, 1)).toBe(0);
    });
  });
  describe('NOT', () => {
    it('should function like NOT', () => {
      expect(logicMethods.NOT(0)).toBe(1);
      expect(logicMethods.NOT(1)).toBe(0);
    });
  });
  describe('AND', () => {
    it('should function like AND', () => {
      expect(logicMethods.AND(0, 0)).toBe(0);
      expect(logicMethods.AND(0, 1)).toBe(0);
      expect(logicMethods.AND(1, 0)).toBe(0);
      expect(logicMethods.AND(1, 1)).toBe(1);
    });
  });
  describe('OR', () => {
    it('should function like OR', () => {
      expect(logicMethods.OR(0, 0)).toBe(0);
      expect(logicMethods.OR(0, 1)).toBe(1);
      expect(logicMethods.OR(1, 0)).toBe(1);
      expect(logicMethods.OR(1, 1)).toBe(1);
    });
  });
  describe('XOR', () => {
    it('should function like XOR', () => {
      expect(logicMethods.XOR(0, 0)).toBe(0);
      expect(logicMethods.XOR(0, 1)).toBe(1);
      expect(logicMethods.XOR(1, 0)).toBe(1);
      expect(logicMethods.XOR(1, 1)).toBe(0);
    });
  });
});

      // expect(logicMethods.NAND(0, 0)).toBe(1);
      // expect(logicMethods.NAND(0, 1)).toBe(1);
      // expect(logicMethods.NAND(1, 0)).toBe(1);
      // expect(logicMethods.NAND(1, 1)).toBe(0);
      // expect(logicMethods.NOT(0)).toBe(1);
      // expect(logicMethods.NOT(1)).toBe(0);
      // expect(logicMethods.AND(0, 0)).toBe(0);
      // expect(logicMethods.AND(0, 1)).toBe(0);
      // expect(logicMethods.AND(1, 0)).toBe(0);
      // expect(logicMethods.AND(1, 1)).toBe(1);
      // expect(logicMethods.OR(0, 0)).toBe(0);
      // expect(logicMethods.OR(0, 1)).toBe(1);
      // expect(logicMethods.OR(1, 0)).toBe(1);
