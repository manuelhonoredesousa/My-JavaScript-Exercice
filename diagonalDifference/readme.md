#diagonalDifference

link: https://www.hackerrank.com/challenges/diagonal-difference/problem
<hr>

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix <strong><i>arr</i></strong> is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = <strong>1 + 5 + 9 = 15</strong>. The right to left diagonal = <strong>3 + 5 + 9 = 17</strong>. Their absolute difference is <strong>|15 - 17| = 2</strong>.

<strong>Function description</strong>

Complete the <strong><i>diagonalDifference</i></strong> function in the editor below.

diagonalDifference takes the following parameter:

* int arr[n][m]: an array of integers

<strong>Return</strong>

* int: the absolute diagonal difference

<strong>Input Format</strong>

The first line contains a single integer,<strong><i>n</i></strong> , the number of rows and columns in the square matrix <strong><i>arr</i></strong>.
Each of the next <strong><i>n</i></strong> lines describes a row, <strong><i>arr[i]</i></strong>, and consists of <strong><i>n</i></strong> space-separated integers <strong><i>arr[i][j]</i></strong>.

<strong>Constraints</strong>
* <strong><i>-100 ≤ arr[i][j] ≤ 100 </i></strong>

<strong>Output Format</strong>

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

<strong>Sample Input</strong>

3
11 2 4
4 5 6
10 8 -12

<strong>Sample Output</strong>

15

<strong>Explanation</strong>

The primary diagonal is:

11
&nbsp;&nbsp;&nbsp;&nbsp;5
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-12

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
&nbsp;&nbsp;&nbsp;&nbsp;5
10

Sum across the secondary diagonal: 4 + 5 + 10 = 19

Difference: |4 - 19| = 15

<strong>Note:</strong> |x| is the absolute value of x
