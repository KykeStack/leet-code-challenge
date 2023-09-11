from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        if len(nums) == 1: return True
        len_nums = len(nums)
        done = False
        max_val = 0
        max_index = 0
        index = 0
        possible = False
        memo = {}
        for i in range(10000):
            if done == True: break
            number = nums[index]
            max_val = 0
            key = f"{number},{index}"
            if memo.get(key, 0) == 0:
              memo[key] = 1
            else:
              memo[key] += 1
            if memo[key] > 1:
              break
            if index == len_nums - 1:
                    done = True
                    possible = True
                    break
            for j in range(1, number + 1):
                position = index + j
                if position >= len_nums - 1:
                    done = True
                    possible = True
                    break
                next_number = nums[position]
                if ((position + next_number) > (index + number)
                  ) and (position + next_number) > (max_val + max_index):
                    max_val = next_number
                    max_index = position            
            index = max_index
        return possible
        

solution = Solution()

print(solution.canJump(nums = [3,2,1,0,4, 2, 2, 2])) # 2
print(solution.canJump(nums = [8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5])) # true
