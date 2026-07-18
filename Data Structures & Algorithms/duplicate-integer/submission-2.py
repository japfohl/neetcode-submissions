class Solution:
  def hasDuplicate(self, nums: List[int]) -> bool:
    dupes: dict[int, bool] = {}
    for num in nums:
      if num in dupes:
        return True
      else:
        dupes[num] = True
    return False
