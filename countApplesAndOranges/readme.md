#countApplesAndOranges

link: https://www.hackerrank.com/challenges/apple-and-orange/problem
<hr>

Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

* The red region denotes the house, where <strong><i>s</i></strong> is the start point, and <strong><i>t</i></strong> is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.

* Assume the trees are located on a single point, where the apple tree is at point <strong><i>a</i></strong>, and the orange tree is at point <strong><i>b</i></strong>.

* When a fruit falls from its tree, it lands <strong><i>d</i></strong> units of distance from its tree of origin along the <strong><i>x</i></strong>-axis. *A negative value of <strong><i>d</i></strong> means the fruit fell <strong><i>d</i></strong> units to the tree's left, and a positive value of <strong><i>d</i></strong> means it falls <strong><i>d</i></strong> units to the tree's right. *

<img src="https://s3.amazonaws.com/hr-challenge-images/25220/1474218925-f2a791d52c-Appleandorange2.png">

Given the value of <strong><i>d</i></strong> for <strong><i>m</i></strong> apples and <strong><i>n</i></strong> oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range <strong><i>[s,t]</i></strong>)?

For example, Sam's house is between <strong><i>s = 7</i></strong> and <strong><i>t = 10</i></strong>. The apple tree is located at <strong><i>a = 4</i></strong> and the orange at <strong><i>b = 12</i></strong>. There are <strong><i>m = 3</i></strong> apples and <strong><i>n = 3</i></strong> oranges. Apples are thrown <strong><i>apples = [2,3, -4]</i></strong> units distance from <strong><i>a</i></strong>, and <strong><i>oranges = [3, -2, -4]</i></strong> units distance. Adding each apple distance to the position of the tree, they land at <strong><i>[4 + 2,4 + 3,4 + -4] = [6,7,0]</i></strong>. Oranges land at <strong><i>[12 + 3,12 + -2,12 + -4] = [15,10,8]</i></strong>. One apple and two oranges land in the inclusive range <strong><i>[7 - 10]</i></strong> so we print
> 1
> 2

<strong>Function description</strong>

Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

* s: integer, starting point of Sam's house location.
* t: integer, ending location of Sam's house location.
* a: integer, location of the Apple tree.
* b: integer, location of the Orange tree.
* apples: integer array, distances at which each apple falls from the tree.
* oranges: integer array, distances at which each orange falls from the tree.

<strong>Input Format</strong>

The first line contains two space-separated integers denoting the respective values of <strong><i>s</i></strong> and <strong><i>t</i></strong>.
The second line contains two space-separated integers denoting the respective values of <strong><i>a</i></strong> and <strong><i>b</i></strong>.
The third line contains two space-separated integers denoting the respective values of <strong><i>m</i></strong> and <strong><i>n</i></strong>.
The fourth line contains <strong><i>m</i></strong> space-separated integers denoting the respective distances that each apple falls from point <strong><i>a</i></strong>.
The fifth line contains <strong><i>n</i></strong> space-separated integers denoting the respective distances that each orange falls from point <strong><i>b</i></strong>.

<strong>Constraints</strong>
* 1 ≤ s,t,a,b,m,n ≤ 10<sup>5</sup>
* -10<sup>5</sup> ≤ d ≤ 10<sup>5</sup>
* a < s < t < b

<strong>Output Format</strong>

Print two integers on two different lines:

1. The first integer: the number of apples that fall on Sam's house.
2. The second integer: the number of oranges that fall on Sam's house.


<strong>Sample Input 0</strong>

> 7 11
> 5 15
> 3 2
> -2 2 1
> 5 -6

<strong>Sample Output 0</strong>

> 1
> 1

<strong>Explanation 0</strong>

The first apple falls at position <strong>[5 - 2 = 3].</strong>
The second apple falls at position <strong>[5 + 2 = 7].</strong>
The third apple falls at position <strong>[5 + 1 = 6].</strong>
The first orange falls at position <strong>[15 + 5 = 20].</strong>
The second orange falls at position <strong>[15 - 6 = 9].</strong>
Only one fruit (the second apple) falls within the region between <strong>7</strong> and <strong>11</strong>, so we print <strong>1</strong> as our first line of output.
Only the second orange falls within the region between <strong>7</strong> and <strong>11</strong>, so we print <strong>1</strong> as our second line of output.