#kangaroo

link: https://www.hackerrank.com/challenges/kangaroo/problem
<hr>
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

* The first kangaroo starts at location <strong><i>x1</i></strong> and moves at a rate of <strong><i>v1</i></strong> meters per jump.
* The second kangaroo starts at location <strong><i>x2</i></strong> and moves at a rate of <strong><i>v2</i></strong> meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

<strong>Example</strong>

<strong>x1 = 2</strong>
<strong>v1 = 1</strong>
<strong>x2 = 1</strong>
<strong>v2 = 2</strong>

After one jump, they are both at <strong>x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2)</strong>, so the answer is YES.

<strong>Function Description</strong>

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

* int x1, int v1: starting position and jump distance for kangaroo 1
* int x2, int v2: starting position and jump distance for kangaroo 2

<strong>Returns</strong>

* string: either YES or NO

<strong>Input Format</strong>

A single line of four space-separated integers denoting the respective values of <strong><i>x1, v1, x2,</i></strong> and <strong><i>v2</i></strong>.

<strong>Constraints</strong>

* 0 ≤ x1 < x2 ≤ 10000
* 1 ≤ v1 ≤ 10000
* 1 ≤ v2 ≤ 10000

<strong>Sample Input 0</strong>

> 0 3 4 2

<strong>Sample Output 0</strong>

> YES

<strong>Explanation 0</strong>

The two kangaroos jump through the following sequence of locations:

<img src="https://s3.amazonaws.com/hr-assets/0/1516005283-e74e76ff0c-kangaroo.png">

From the image, it is clear that the kangaroos meet at the same location (number <strong>12</strong> on the number line) after same number of jumps (<strong>4</strong> jumps), and we print YES.

<strong>Sample Input 1</strong>

> 0 2 5 3

<strong>Sample Output 1</strong>

> NO

<strong>Explanation 1</strong>

The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e.,<strong><i>x2 > x1</i></strong>). Because the second kangaroo moves at a faster rate (meaning <strong><i>v2 > v1</i></strong>) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.
