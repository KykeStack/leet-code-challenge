from typing import List

class SolutionA:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        setst = list(set(strs))
        if len(setst) == 1: return strs[0]
        
        largest = ""
        for word in setst:
            if len(word) > len(largest):
                largest = word
        
        smallest = largest
        for word in setst:
            if len(word) < len(smallest):
                smallest = word
                
        prefix = ""
        list_prefix = [] # This could be improve, possibly with a hash map instead
        pattern = list(smallest)
        
        for word in setst:
            if word == smallest:
                continue
            index = 0
            list_word = list(word)
            interrupted = False
            for letter in pattern:
                a = list_word[index]
                if letter == a and not interrupted:
                    print(letter, a)
                    prefix += letter
                else:
                    interrupted = True
                index += 1
            if prefix != "":
                list_prefix.append(prefix)
            prefix = ""
            
        if len(list_prefix) != len(setst) - 1:
            # There is at least a word that doesn't contain the common prefix
            return ""
        list_prefix.sort() 
        return list_prefix[0]
        
class SolutionB:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ans=""
        v=sorted(strs)
        first=v[0]
        last=v[-1]
        for i in range(min(len(first),len(last))):
            print(ans, first[i], last[i])
            if(first[i]!=last[i]):
                return ans
            ans+=first[i]
        return ans 
    
solution = SolutionA()
print(solution.longestCommonPrefix(strs = ["cir","car"])) # c
print(solution.longestCommonPrefix(strs = ["flower","flow","flight"])) # fl
print(solution.longestCommonPrefix(strs = ["dog","racecar","car"])) # ""
print(solution.longestCommonPrefix(strs = ["aac","a","ccc"])) # ""
print(solution.longestCommonPrefix(strs = ["c","acc","ccc"])) # ""
print(solution.longestCommonPrefix(strs = ["reflower","flow","flight", "flagrante"])) # ""
print(solution.longestCommonPrefix(strs =  ["aaa","aa","aaa"])) # aa
print(solution.longestCommonPrefix(strs = ["ab", "a"])) # a
print(solution.longestCommonPrefix(strs = ["flower","flower","flower","flower"])) #flower





