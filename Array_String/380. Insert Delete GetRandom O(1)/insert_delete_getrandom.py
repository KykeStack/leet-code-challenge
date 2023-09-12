from random import randint

class RandomizedSetA:

    def __init__(self):
        self.randomized_set = set()

    def insert(self, val: int) -> bool:
        if not self.randomized_set.__contains__(val):
          self.randomized_set.add(val)
          return True
        return False

    def remove(self, val: int) -> bool:
        if self.randomized_set.__contains__(val):
          self.randomized_set.discard(val)
          return True
        return False

    def getRandom(self) -> int:
      random_number = randint(0, len(self.randomized_set) - 1 ) 
      idx = 0
      for i in self.randomized_set:
        if idx == random_number:
          return i
        idx += 1
        
class RandomizedSetB:

    def __init__(self):
        self.randomized_set = {}

    def insert(self, val: int) -> bool:
        if self.randomized_set.get(val, "notFound") == "notFound":
          self.randomized_set.update({val: val})
          return True
        return False

    def remove(self, val: int) -> bool:
        if self.randomized_set.get(val, "notFound") == "notFound":
            return False
        self.randomized_set.pop(val)
        return True

    def getRandom(self) -> int:
      random_number = randint(0, len(self.randomized_set) - 1)
      return list(self.randomized_set.keys())[random_number]
        
    def getSet(self) -> int:
        return list(self.randomized_set.keys())
      

  
# Your RandomizedSet object will be instantiated and called as such:
obj = RandomizedSetB()
param_2 = obj.remove(0)
print(param_2)
param_2 = obj.remove(0)
print(param_2)
param_1 = obj.insert(0)
print(param_1)
param_1 = obj.insert(1)
print(param_1)
param_1 = obj.insert(2)
print(param_1)
param_1 = obj.insert(3)
print(param_1)
param_1 = obj.insert(4)
print(param_1)
param_1 = obj.insert(5)
print(param_1)
param_1 = obj.insert(6)
print(param_1)
param_1 = obj.remove(6)
print(param_1)
param_3 = obj.getRandom()
print(param_3)
param_1 = obj.remove(0)
print(param_1)
param_1 = obj.insert(0)
print(param_1)

print(obj.getSet())
