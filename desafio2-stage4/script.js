const students = [
  {
    name:'Igor',
    note1: 9.5,
    note2: 5.4,
  },
  
  {
    name:'Bárbara',
    note1: 10,
    note2: 6,
  },
  
  {
    name:'Eloina',
    note1: 5,
    note2: 8,
  },  
  
  {
    name:'Iago',
    note1: 7,
    note2: 10,
  },  
  
  {
    name:'Bia',
    note1: 5.4,
    note2: 8.5,
  }
]


function calcMedia (note1, note2){
  return (note1+note2)/2
}

 

for (let student  of students){
  let mediaStudent = calcMedia(student.note1, student.note2)
  if (mediaStudent >= 7.0){
    alert(`Sua nota final foi ${mediaStudent}.
    Parabéns, ${student.name}!  Você foi aprovado(a) no concurso!`)
  }else{
    alert(`Sua nota final foi ${mediaStudent}
    ${student.name}, tente novamente!`)
  }
}