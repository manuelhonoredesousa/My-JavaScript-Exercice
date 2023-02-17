#Subarray Division

link: https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
<hr>
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

* The length of the segment matches Ron's birth month, and,
* The sum of the integers on the squares is equal to his birth day.

Determine how many ways she can divide the chocolate.

<strong>Example</strong>

s = [2, 2, 1, 3, 2]
d = 4
m = 2

Lily wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2. In this case, there are two segments meeting her criteria: [2,2] and [1,3].

<strong>Function Description</strong>

Complete the birthday function in the editor below.

birthday has the following parameter(s):

* int s[n]: the numbers on each of the squares of chocolate
* int d: Ron's birth day
* int m: Ron's birth month

<strong>Returns</strong>

* int: the number of ways the bar can be divided

<strong>Input Format</strong>

The first line contains an integer , the number of squares in the chocolate bar.
The second line contains space-separated integers <strong>_nns_</strong>, the numbers on the chocolate squares where <strong>0 <= i < n. </strong>.
The third line contains two space-separated integers, and , Ron's birth day and his birth month <strong>_dm_</strong>.

<strong>Constraints</strong>

* 1 <= n <= 100 
* 1 <= s[i] <= 5, where (0 <= i < n) 
* 1 <= d <= 31 
* 1 <= m <= 12

<strong>Sample Input 0</strong>

> 5
> 1 2 1 3 2
> 3 2

<strong>Sample Output 0</strong>

> 2

<strong>Explanation 0</strong>

Lily wants to give Ron _m = 2_ squares summing to _d = 3_. The following two segments meet the criteria:

<img src="https://s3.amazonaws.com/hr-assets/0/1489060874-a04ddb06cf-choco4.png" >

<strong>Sample Input 1</strong>

> 6
> 1 1 1 1 1 1
> 3 2

<strong>Sample Output 1</strong>

> 0

<strong>Explanation 1</strong>

Lily only wants to give Ron _m = 2_ consecutive squares of chocolate whose integers sum to _d = 3_. There are no possible pieces satisfying these constraints:

<img src="https://s3.amazonaws.com/hr-assets/0/1489060978-e33d905668-choco5.png" >

Thus, we print as our answer 0.

<strong>Sample Input 2</strong>

> 1
> 4
> 4 1

<strong>Sample Output 2</strong>

> 1

<strong>Explanation 2</strong>

Lily only wants to give Ron _m = 1_ square of chocolate with an integer value of _d = 4_. Because the only square of chocolate in the bar satisfies this constraint, we print as our answer 1.
