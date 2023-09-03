from typing import List
        
class SolutionA:
    def removeElement(self, nums: List[int], val: int) -> int:
        occurrences = nums.count(val)
        k = len(nums) - occurrences
        for i in range(occurrences):
            nums.remove(val)
        return  k
        
        
class SolutionB:
    def removeElement(self, nums: List[int], val: int) -> int:
        occurrences = 0
        k = len(nums)
        while val in nums:
            nums.remove(val)
            occurrences += 1
        k = k - occurrences
        return  k
    
new_solution = SolutionA()

b = new_solution.removeElement(nums = [3,2,2,3], val = 3)
print(b)
a = new_solution.removeElement(nums = [0,1,2,2,3,0,4,2], val = 2)
print(a)


# new_solution = SolutionB()

# b = new_solution.removeElement(nums = [3,2,2,3], val = 3)
# print(b)
# a = new_solution.removeElement(nums = [0,1,2,2,3,0,4,2], val = 2)
# print(a)