import threeSumClosest from "../src/threeSumClosest/threeSumClosest";
import threeSum from "../src/threeSum/threeSum";

describe('medium test', () => {
    it('threeSumClosest', () => {
        expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
        expect(threeSumClosest([1, 1, 1, 0], -100)).toBe(2);
    })

    it('theeSum', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    });
});
