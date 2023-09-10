from typing import List

class Solution:
    def jump(self, nums: List[int]) -> int:
        if len(nums) == 1: return 0

        len_of_numbers = len(nums)
        finished = False
        max_val = 0
        max_val_index = 0
        index = 0
        steps = 0
        
        for i in range(10000):
            if finished == True: break
            number = nums[index]
            max_val = 0
            
            if index == len_of_numbers - 1:
                    finished = True
                    break
        
            for j in range(1, number + 1):
                position = index + j
                if position >= len_of_numbers - 1:
                    finished = True
                    break

                next_number = nums[position]

                if (next_number >= max_val
                    ) or (
                        (position + next_number) > (index + number)
                        ) and (position + next_number) > (max_val + max_val_index):
                        
                    max_val = next_number
                    max_val_index = position
            
            index = max_val_index
            steps += 1
        return steps
    
solution = Solution()

print(solution.jump(nums = [2,3,1,1,4])) # 2
print(solution.jump(nums = [1,2,3])) # 2 EXEEDS THE LENGTH
print(solution.jump(nums = [1,2])) # 1
print(solution.jump(nums = [2,3,1])) # 2 EXEEDS THE LENGTH
print(solution.jump(nums = [1,2,1,1,1])) # 3
print(solution.jump(nums = [1,1,1,1])) # 3
print(solution.jump(nums = [1,2,0,1])) # 2
print(solution.jump(nums = [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3])) # 2
print(solution.jump(nums = [10,9,8,7,6,5,4,3,2,1,1,0])) # 2
print(solution.jump(nums = [4,1,1,3,1,1,1])) # 2
print(solution.jump(nums = [8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5])) # 13







