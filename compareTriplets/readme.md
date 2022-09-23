#diagonalDifference

link: https://www.hackerrank.com/challenges/compare-the-triplets/problem
<hr>
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

* If a[i] > b[i], then Alice is awarded 1 point.
* If a[i] < b[i], then Bob is awarded 1 point.
* If a[i] = b[i], then neither person receives a point.

Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points

<strong>Example</strong>

a = [1, 2, 3]
b = [3, 2, 1]
* For elements *0*, Bob is awarded a point because a[0] .
* For the equal elements a[1] and b[1], no points are earned.
* Finally, for elements 2, a[2] > b[2] so Alice receives a point.

The return array is [1, 1] with Alice's score first and Bob's second.

<strong>Function description</strong>

Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):

* int a[3]: Alice's challenge rating
* int b[3]: Bob's challenge rating

<strong>Return</strong>
* int[2]: Alice's score is in the first position, and Bob's score is in the second.

<strong>Input Format</strong>

The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

<strong>Constraints</strong>
* 1 ≤ a[i] ≤ 100
* 1 ≤ b[i] ≤ 100

<strong>Sample Input 0</strong>

>    5 6 7
>    3 6 10

<strong>Sample Output 0</strong>
>   1 1

<strong>Output Format</strong>

<strong>Explanation 0</strong>

In this example:
* a = (a[0],a[1],a[2]) = (5,6,7) 
* b = (b[0],b[1],b[2]) = (3,6,10)

Now, let's compare each individual score:

* a[0] > b[0], so Alice receives 1 point.
* a[1] = b[1], so nobody receives a point.
* a[2] < b[2], so Bob receives 1 point.

Alice's comparison score is 1, and Bob's comparison score is 1. Thus, we return the array [1,1].

<strong>Sample Input 1</strong>
> 17 28 30
> 99 16 8

<strong>Sample Output 1</strong>
> 2 1

<strong>Explanation 1</strong>

Comparing the 0<sup><i>th</i></sup> elements, 17 < 99 so Bob receives a point.
Comparing the 1<sup><i>th</i></sup> and 2<sup><i>th</i></sup> elements, 28 > 8  and  so Alice receives two points.

The return array is [2,1].