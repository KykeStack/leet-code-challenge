from typing import List
import time

def calculate_execution_time(func, *args, **kwargs):
    # get the start time
    st = time.process_time()
    
    func(*args, **kwargs)

    # get the end time
    et = time.process_time()

    # get execution time
    res = et - st
    print('CPU Execution time:', res, 'seconds')
        
class SolutionA:
    def removeDuplicates(self, nums: List[int]) -> int:
        map_numbers = {}
        for i in nums.copy(): 
            map_numbers[i] = 0
        nums = list(map_numbers.keys())
        
        return len(map_numbers)
    
class SolutionB:
    def removeDuplicates(self, nums: List[int]) -> int:
        for i in nums.copy():
            r = nums.count(i)
            if r != 1:
                print(i)
                nums.remove(i)
        print(nums)

class SolutionC:
    def removeDuplicates(self, nums: List[int]) -> int:
        map_numbers = {}
        for i in nums.copy(): 
            if map_numbers.get(i, 0) == 1:
                nums.remove(i)
            map_numbers[i] = 1
        return len(nums)
    
class SolutionC:
    def removeDuplicates(self, nums: List[int]) -> int:
        nums = list(dict.fromkeys(nums))

    
solution = SolutionC()
input_list1 = [1, 1, 2]
input_list2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
input_list3 = [1,1,1,1]

# Call the method with the input lists
calculate_execution_time(solution.removeDuplicates, input_list1)
calculate_execution_time(solution.removeDuplicates, input_list2)
calculate_execution_time(solution.removeDuplicates, input_list3)
