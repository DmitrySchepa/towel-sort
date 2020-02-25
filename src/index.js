
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return []; 
  const arr = [];
  for (let i=0; i < matrix.length; i++) {
    if (i%2 != 0) {
      matrix[i].reverse();
    }   
      arr.push(matrix[i]);
    }
  return arr.join(',').split(',').map((i)=>+i);
};

