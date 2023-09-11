from typing import List

# number with number or more applications
class Solution:
    def hIndex(self, citations: List[int]) -> int:
      len_citations = len(citations)
      citations.sort()
      index = 0
      for number in citations:
        dept = len_citations - index  
        if number >= dept:
          return dept
        index += 1
      return 0
    
solution = Solution()

print(solution.hIndex(citations = [3,0,6,1,5]))
print(solution.hIndex(citations = [1,3,1]))
print(solution.hIndex(citations = [0, 0]))
print(solution.hIndex(citations = [0]))
print(solution.hIndex(citations = [1]))
print(solution.hIndex(citations = [1, 1, 1, 1, 0]))



