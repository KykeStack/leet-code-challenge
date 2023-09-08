class SolutionA:
    def lengthOfLastWord(self, s: str) -> int:
        string_list = s.split(' ')
        for i in string_list[::-1]:
            if i != '':
                return len(i)

class SolutionB:
    def lengthOfLastWord(self, s: str) -> int:
        start = False
        string = ""
        for i in s[::-1]:
            if not start and i == ' ':
                continue
            if start and i == ' ':
                break
            string += i
            start = True
        return len(string)
              
solution = SolutionB()

print(solution.lengthOfLastWord(s = "Hello World"))
print(solution.lengthOfLastWord(s = "   fly me   to   the moon  "))

