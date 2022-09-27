#gradingStudents

link: https://www.hackerrank.com/challenges/grading/problem
<hr>
HackerLand University has the following grading policy:

* Every student receives a <strong><i>grade</i></strong> in the inclusive range from <strong>0</strong> to <strong>100</strong>.
* Any <strong><i>grade</i></strong> less than <strong>40</strong> is a failing grade.

Sam is a professor at the university and likes to round each student's <strong><i>grade</i></strong> according to these rules:

* If the difference between the <strong><i>grade</i></strong> and the next multiple of <strong>5</strong> is less than <strong>3</strong>, round <strong><i>grade</i></strong> up to the next multiple of <strong>5</strong>.
* If the value of <strong><i>grade</i></strong> is less than <strong>38</strong>, no rounding occurs as the result will still be a failing grade.

<strong>Examples</strong>

* <strong><i>grade</i></strong> = <strong>84</strong> round to <strong>85</strong> (85 - 84 is less than 3)
* <strong><i>grade</i></strong> = <strong>29</strong> do not round (result is less than 40)
* <strong><i>grade</i></strong> = <strong>57</strong> do not round (60 - 57 is 3 or higher)

Given the initial value of <strong><i>grade</i></strong> for each of Sam's <strong><i>n</i></strong> students, write code to automate the rounding process.

<strong>Function Description</strong>

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

* int grades[n]: the grades before rounding

<strong>Returns</strong>

* int[n]: the grades after rounding as appropriate

<strong>Input Format</strong>

The first line contains a single integer, <strong><i>n</i></strong>, the number of students.
Each line <strong><i>i</i></strong> of the <strong><i>n</i></strong> subsequent lines contains a single integer, <strong><i>grades[i]</i></strong>.

<strong>Constraints</strong>

* 0 ≤ n ≤ 60
* 1 ≤ grades[i] ≤ 100

<strong>Sample Input 0</strong>

> 4
> 73
> 67
> 38
> 33

<strong>Sample Output 0</strong>

> 75
> 67
> 40
> 33

<strong>Explanation 0</strong>

<img src="https://s3.amazonaws.com/hr-challenge-images/0/1484768684-54439977a1-curving2.png" alt="example image"/>

1. Student <strong>1</strong> received a <strong>73</strong>, and the next multiple of <strong>5</strong> from <strong>73</strong> is <strong>75</strong>. Since <strong>75 - 73 < 3 </strong>, the student's grade is rounded to <strong>75</strong>.
2. Student <strong>2</strong> received a <strong>67</strong>, and the next multiple of <strong>5</strong> from <strong>67</strong> is <strong>70</strong>. Since <strong>70 - 67 = 3</strong>, the grade will not be modified and the student's final grade is <strong>67</strong>.
3. Student <strong>3</strong> received a <strong>38</strong>, and the next multiple of <strong>5</strong> from <strong>38</strong> is <strong>40</strong>. Since <strong>40 - 38 < 3 </strong>, the student's grade will be rounded to <strong>40</strong>.
4. Student <strong>4</strong> received a grade below <strong>33</strong>, so the grade will not be modified and the student's final grade is <strong>33</strong>.

