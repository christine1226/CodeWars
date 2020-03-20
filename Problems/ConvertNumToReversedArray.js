//Given a random number:
//You have to return the digits of this number within an array in reverse order.
//EX: 348597 => [7,9,5,8,4,3]

function digitize(n) {
  //code here
  let reversed= n.toString().split('').reverse()
  let here = []
  for (let i=0; i<=reversed.length-1; i++){
   here.push(parseInt(reversed[i]))
  }
  return here
}
