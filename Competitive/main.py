class Solution(object):
    def longestValidParentheses(self, s):
        bitmap = [0] * len(s)
        stack = []
        temp = 0

        for i, z in enumerate(s):
            if z == "(":
                stack.append(i)
                temp += 1
                continue 

            if not stack:
                continue
            
            bitmap[stack.pop()] = 1
            bitmap[i] = temp
        
        return max( map(lambda x: len(x), "".join(map(str, bitmap)).split("1")) ) 