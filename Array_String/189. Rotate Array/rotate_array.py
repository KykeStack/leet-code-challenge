
from typing import List

class SolutionA:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        curret_number = 0
        nums.reverse()
        for i in range(k):
            curret_number = nums[0]
            nums.pop(0)
            nums.append(curret_number)       
        nums.reverse()
        return nums
        
class SolutionB:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l = len(nums)
        nums = nums[l - k:] + nums[: l - k] 
        return nums
        
        
class SolutionC:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        a = []
        for i in range(k):
            n = - (i + 1)
            m = nums[n]
            a.append(m)            
        nums =  a + nums[:len(nums) - k ]
        return nums

    
solution = SolutionC()

solution.rotate(nums = [1,2,3,4,5,6,7], k = 3)
solution.rotate(nums = [-1,-100,3,99], k = 2)
