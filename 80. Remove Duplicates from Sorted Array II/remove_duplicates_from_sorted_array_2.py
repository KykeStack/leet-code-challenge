from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        elements = {}
        copy_nums = nums.copy()
        for i in copy_nums:
            if elements.get(i, 0) == 0:
                elements[i] = 1
            else: 
                count = elements[i]
                elements[i] = count + 1 
                if count >= 2:
                    nums.remove(i)
                          
        return len(nums)
        

solution = Solution()

solution.removeDuplicates(nums = [1,1,1,2,2,3])
solution.removeDuplicates(nums = [0,0,1,1,1,1,2,3,3])

