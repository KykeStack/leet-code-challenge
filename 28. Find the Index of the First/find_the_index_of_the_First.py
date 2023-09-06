class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return haystack.find(needle)
        
solution = Solution()

solution.strStr(haystack = "sadbutsad", needle = "sad")
solution.strStr(haystack = "leetcode", needle = "leeto")
