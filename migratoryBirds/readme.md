#migratoryBirds

link: https://www.hackerrank.com/challenges/migratory-birds/problem

<hr>

Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

<strong>Example</strong>

<strong><i>arr = </i> [1,1,2,2,3] </strong>

There are two each of types <strong>1</strong> and <strong>2</strong>, and one sighting of type <strong>3</strong>. Pick the lower of the two types seen twice: type <strong>1</strong>.

<strong>Function Description</strong>

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

- int arr[n]: the types of birds sighted

<strong>Returns</strong>

- int: the lowest type id of the most frequently sighted birds

<strong>Input Format</strong>

The first line contains an integer, <strong>n</strong>, the size of <strong>arr</strong>.
The second line describes <strong>arr</strong> as <strong>n</strong> space-separated integers, each a type number of the bird sighted.

<strong>Constraints</strong>

- 5 ≤ n ≤ 2 x ≤ 10<sup>5</sup>
- It is guaranteed that each type is 1, 2, 3, 4, or 5.

<strong>Sample Input 0</strong>

> 6
> 1 4 4 4 5 3

<strong>Sample Output 0</strong>

> 4

<strong>Explanation 0</strong>

The different types of birds occur in the following frequencies:

Type <strong>1</strong>: <strong>1</strong> bird
Type <strong>2</strong>: <strong>0</strong> birds
Type <strong>3</strong>: <strong>1</strong> bird
Type <strong>4</strong>: <strong>3</strong> birds
Type <strong>5</strong>: <strong>1</strong> bird

The type number that occurs at the highest frequency is type <strong>4</strong>, so we print <strong>4</strong> as our answer.

<strong>Sample Input 1</strong>

> 11
> 1 2 3 4 5 4 3 2 1 3 4

<strong>Sample Output 1</strong>

> 3

<strong>Explanation 1</strong>

The different types of birds occur in the following frequencies:

Type <strong>1</strong>: <strong>2</strong> bird
Type <strong>2</strong>: <strong>2</strong> birds
Type <strong>3</strong>: <strong>3</strong> bird
Type <strong>4</strong>: <strong>3</strong> birds
Type <strong>5</strong>: <strong>1</strong> bird

Two types have a frequency of <strong>3</strong>, and the lower of those is type <strong>3</strong>.
