#dayOfProgrammer

link: https://www.hackerrank.com/challenges/day-of-the-programmer/problem
<hr>

Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

* Divisible by 400.
* Divisible by 4 and not divisible by 100.

Given a year, <strong>y</strong>, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is <strong>y</strong>.

For example, the given <strong>year</strong> = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is <strong> 12.09.1984 </strong>.

<strong>Function Description</strong>

Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

dayOfProgrammer has the following parameter(s):

* year: an integer

<strong>Input Format</strong>

A single integer denoting year <strong>y</strong>.

<strong>Constraints</strong>

* 1700 \le y \le 2700

<strong>Output Format</strong>

Print the full date of Day of the Programmer during year <strong>y</strong> in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is <strong>y</strong>.

<strong>Sample Input 0</strong>

> 2017

<strong>Sample Output 0</strong>

> 13.09.2017

<strong>Explanation 0</strong>

In the year <strong>y</strong> = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.

<strong>Sample Input 1</strong>

> 2016

<strong>Sample Output 1</strong>

> 12.09.2016

<strong>Explanation 1</strong>

Year <strong>y</strong> = 2016 is a leap year, so February has 29 days but all the other months have the same number of days as in 2017. When we sum the total number of days in the first eight months, we get 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244. Day of the Programmer is the 256th day, so then calculate 256 - 244 = 12 to determine that it falls on day 12 of the 9th month (September). We then print the full date in the specified format, which is 12.09.2016.

<strong>Sample Input 2</strong>

> 1800

<strong>Sample Output 2</strong>

> 12.09.1800

<strong>Explanation 2</strong>

Since 1800 is leap year as per Julian calendar. Day lies on 12 September.