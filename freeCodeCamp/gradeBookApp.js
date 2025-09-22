function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
function getGrade(score) {
  if(score === 100){
    return 'A++'
  }else if(score >= 90 && score < 100){
    return "A"
  }else if(score >= 80 && score < 90){
    return "B"
  }else if(score >= 70 && score < 80){
    return "C"
  }else if(score >= 60 && score < 70){
    return "D"
  }else{
    return "F"
  }

}
function hasPassingGrade(score) {
  let grade = getGrade(score)
  if(grade !== 'F'){
    return true
  }else {
    return false
  }
}
function studentMsg(totalScores, studentScore) {
  let total = getAverage(totalScores);
  let score = getGrade(studentScore);
  if(hasPassingGrade(studentScore)){
    return "Class average: " + total +". Your grade: " + score + ". You passed the course."
  }else{
    return "Class average: " + total +". Your grade: " + score + ". You failed the course."
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 87));

