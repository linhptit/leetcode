package main

func main() {

}

func twoSum(nums []int, target int) []int {
	loopUpMap := make(map[int]int)

	for i, num := range nums {
		if j, ok := loopUpMap[target-num]; ok {
			return []int{j, i}
		}
		loopUpMap[num] = i
	}

	return nil
}
