## Task

You are given a positive integer (n), and your task is to find the largest number less than n, which can be written in the form a**b, where a can be any non-negative integer and b is an integer greater than or equal to 2. Try not to make the code time out :)

The input range is from 1 to 1,000,000.

## Return

Return your answer in the form (x, y) or ([x, y], depending on the language ), where x is the value of a**b, and y is the number of occurrences of a**b. By the way ** means ^ or power, so 2 ** 4 = 16. If you are given a number less than or equal to 4, that is not 1, return (1, -1), because there is an infinite number of values for it: 1**2, 1**3, 1**4, .... If you are given 1, return (0, -1).


## Score
- Performance (response time when run the function)
- Correction of logical


## Example Unit Test

- Test.describe("Example Tests")
- Test.assert_equals(largest_power(90), (81, 2))
- Test.assert_equals(largest_power(6), (4, 1))
- Test.assert_equals(largest_power(65), (64, 3))
- Test.assert_equals(largest_power(3), (1, -1))
- Test.assert_equals(largest_power(1), (0, -1))
- Test.assert_equals(largest_power(81), (64, 3))
- Test.assert_equals(largest_power(29), (27, 1))
- Test.assert_equals(largest_power(4), (1, -1))

## Answer

use node.js 15.x

```shell
node assessment01
```