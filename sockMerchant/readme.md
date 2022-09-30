#sockMerchant

link: https://www.hackerrank.com/challenges/sock-merchant/problem
<hr>
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

<strong>Examples</strong>

 <strong><i>n</i> = 7</strong> 
 <strong><i>ar</i> = [1, 2, 1, 2, 1, 3, 2]</strong> 

There is one pair of color <strong>1</strong> and one of color <strong>2</strong>. There are three odd socks left, one of each color. The number of pairs is <strong>2</strong>.

<strong>Function Description</strong>

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

* int n: the number of socks in the pile
* int ar[n]: the colors of each sock

<strong>Returns</strong>

* int: the number of pairs

<strong>Input Format</strong>

The first line contains an integer <strong><i>n</i></strong>, the number of socks represented in <strong><i>ar</i></strong>.
The second line contains <strong><i>n</i></strong> space-separated integers, <strong><i>ar[i]</i></strong>, the colors of the socks in the pile.

<strong>Constraints</strong>

* 1 ≤ n ≤ 100
* 1 ≤ ar[i] ≤ 100 where 0 ≤ <strong>i</strong> < <strong>n</strong>

<strong>Sample Input</strong>

>STDIN ---------------------- Function
>------------------------------------
>9 ------------------------------------------------------ n = 9
>10 20 20 10 10 30 50 10 20 ------------------- ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

<strong>Sample Output</strong>

> 3

<strong>Explanation 0</strong>

<img src="https://s3.amazonaws.com/hr-challenge-images/25168/1474122392-c7b9097430-sock.png" alt="example image"/>

There are three pairs of socks.