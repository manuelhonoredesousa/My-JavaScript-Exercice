function angryProfessor() {
  // Write your code here
  const studentsInAttendance = k;
  const studentsArriveTime = a;
  let studentsInTime = Array();

  studentsArriveTime.forEach((studentTime) => {
    const isThisStudentInTime = studentTime <= 0;
    if (isThisStudentInTime) studentsInTime.push(studentTime);
  });

  const numberOfStudentInTime = studentsInTime.length;
  const isTheClassCancelled = numberOfStudentInTime < studentsInAttendance;
  if (isTheClassCancelled) return "YES";
  else return "NO";
}

console.log(angryProfessor((k = 2), (a = [0,-1,2,1])));
