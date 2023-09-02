from typing import List

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        nums1[ len(nums1) - n : ] = nums2
        nums1.sort()
        return nums1     
    
solution = Solution()

solution.merge(
    nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
)


solution.merge(
    nums1 = [1], m = 1, nums2 = [], n = 0
)


solution.merge(
    nums1 = [0], m = 0, nums2 = [1], n = 1
)


    
        
        

