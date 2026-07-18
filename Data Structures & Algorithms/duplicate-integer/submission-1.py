class Solution:
  def hasDuplicate(self, nums: List[int]) -> bool:
    dupes: dict[int, bool] = {}
    for idx, num in enumerate(nums):
      if num in dupes:
        return True
      else:
        dupes[num] = True
    return False