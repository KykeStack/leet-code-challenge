"""
- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.
"""
class Solution:
    def romanToInt(self, s: str) -> int:
        roman_numeals = {"I": 1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
        sum = 0
        prev = ""
        for i in s[::-1]:
            val = roman_numeals[i]
            print(f"Previous value -> {prev} :: Current Value -> {i}")
            if (prev == "V" and i == "I") or (prev == "X" and i == "I") :
                sum -= val
                continue
            
            if (prev == "C" and i == "X") or (prev == "L" and i == "X") :
                sum -= val
                continue
            
            if (prev == "M" and i == "C") or (prev == "D" and i == "C") :
                sum -= val
                continue
            sum += val
            prev = i    
        return sum
            
        
solution = Solution()
print(solution.romanToInt(s = "IV")) # 4
print(solution.romanToInt(s = "IX")) # 9
print(solution.romanToInt(s = "III")) # 3
print(solution.romanToInt(s = "LVIII")) # 58
print(solution.romanToInt(s = "MCMXCIV")) # 1994 