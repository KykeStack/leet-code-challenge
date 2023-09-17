"""
- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.
"""

# Can rapresent numbers from 1 to 3999
# If number > 1000 get the reminder, 994 pass this number regression
# print(3999 % 1000)
# If number > 1000 get the base Floor division, m < 3 > 1 M += M
# print(3999 // 1000)  
# if base case 9 or 4 - subtract basecase
# if lees than the max number with same length then max number - number 
# So substract 

roman_numerals = {1000: "M",  500 : "D", 100: "C", 50: "L", 10 : "X", 5: "V",  1: "I"}
base_case = {
    "CM": [900, 1000],
    "XC": [90, 100],
    "IX": [9, 10],
    "CD": [400, 500],
    "XL": [40, 50], 
    "IV": [4, 5]
}
uncompatible = {"900": 900, "90": 90, "9": 9, "400": 400, "40": 40, "4": 4}
class Solution:
    def intToRoman(self, num: int) -> str:
        if num > 3999: return "MMMCMXCIX"
        roman_number=""
        current_number = num
        if num >= 1000: 
            current_number = num % 1000
            integer_division = num // 1000 
            for i in range(1, integer_division + 1):
                roman_number += "M"
        while current_number != 0:
            for k, v in base_case.items():  
                if current_number == 0:
                    break
                print(f"Current number : {current_number}, compare to: {v}")
                if (current_number >= v[0]
                    ) and (current_number < v[1]):
                        roman_number += k
                        current_number -= v[0]
            for k, v in roman_numerals.items(): 
                if current_number == 0:
                    break
                print(f"Current number : {current_number}, compare to: {k}")
                if uncompatible.get(str(current_number)[0]) != None:
                    break  
                if (current_number >= k
                    ) and (len(str(current_number)) == len(str(k))):
                    roman_number += v
                    print(f"roman number : {roman_number}, compare to: {v}")
                    current_number -= k
        return roman_number 
    
solution = Solution()
print(solution.intToRoman(num = 4)) # "IV"
print(solution.intToRoman(num = 9 )) # 9 "IX"
print(solution.intToRoman(num = 3)) # 3 "III"
print(solution.intToRoman(num = 58)) # 58 "LVIII"
print(solution.intToRoman(num = 1994 )) # "MCMXCIV"
print(solution.intToRoman(num = 3999 )) # "MMMCMXCIX"
print(solution.intToRoman(num = 4000 )) # "MMMCMXCIX"

