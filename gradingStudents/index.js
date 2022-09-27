function gradingStudents(grades) {
  // Write your code here
  const arr = grades.map((grade) => {
    const lastValueS = Number(String(grade)[String(grade).length - 1]);

    if (lastValueS - 5 < 0) {
      if (lastValueS - 5 == -1 || lastValueS - 5 == -2) {
        if (lastValueS - 5 == -1) return grade + 1 < 40 ? grade : grade + 1;
        else return grade + 2 < 40 ? grade : grade + 2;
      }
    } else {
      if (lastValueS - 5 == 3 || lastValueS - 5 == 4) {
        if (lastValueS - 5 == 3) return grade + 2 < 40 ? grade : grade + 2;
        else return grade + 1 < 40 ? grade : grade + 1;
      }
    }
    return grade;
  });
  return arr;
}

const grade = [73, 67, 38, 33];
console.log(gradingStudents(grade));
