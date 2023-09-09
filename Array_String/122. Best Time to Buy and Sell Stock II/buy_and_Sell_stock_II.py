from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        
        for i in range(1, len(prices)):
            next_val = prices[i]
            before_val = prices[i - 1]
            if next_val > before_val :
                max_profit += next_val - before_val
        
        return max_profit
    
solution = Solution()

print(solution.maxProfit(prices = [7,1,5,3,6,4])) # 7
print(solution.maxProfit(prices = [1,2,3,4,5])) # 4
print(solution.maxProfit(prices = [7,6,4,3,1])) # 0
print(solution.maxProfit(prices = [6,1,3,2,4,7])) # 7 
print(solution.maxProfit(prices = [1,2])) # 1
print(solution.maxProfit(prices = [1,2,4]))  # 3



