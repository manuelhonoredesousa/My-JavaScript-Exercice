#miniMaxSum

link: https://www.hackerrank.com/challenges/mini-max-sum/problem
<hr>

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

<strong>Example:</strong>
<strong><i>arr[1,3,5,7,9]</i></strong>

* "use in this order to [9, 5, 7, 1, 3] to make sure you develope a dinamic solution"

<strong>print</strong>
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.




<strong>3 + 5 + 9 = 17</strong>. Their absolute difference is <strong>|15 - 17| = 2</strong>.

<strong>Function description</strong>

Complete the <strong><i>diagonalDifference</i></strong> function in the editor below.

diagonalDifference takes the following parameter:

* int arr[n][m]: an array of integers

<strong>Return</strong>

* int: the absolute diagonal difference

<strong>Input Format</strong>

A single line of five space-separated integers.

<strong>Constraints</strong>

<strong>1 ≤ arr[i] ≤ 10<sup>9</sup></strong>

<strong>Output Format</strong>

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

<strong>Sample Input</strong>

1 2 3 4 5

<strong>Sample Output</strong>

10 14

<strong>Explanation</strong>

The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

1. Sum everything except 1, the sum is <strong>2 + 3 + 4 + 5 = 14</strong>.
2. Sum everything except 2, the sum is <strong>1 + 3 + 4 + 5 = 13</strong>.
3. Sum everything except 3, the sum is <strong>1 + 2 + 4 + 5 = 12</strong>.
4. Sum everything except 4, the sum is <strong>1 + 2 + 3 + 5 = 11</strong>.
5. Sum everything except 5, the sum is <strong>1 + 2 + 3 + 4 = 10</strong>.


<strong>Hints:</strong> Beware of integer overflow! Use 64-bit Integer