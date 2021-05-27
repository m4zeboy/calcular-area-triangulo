// Encontrar a área de um triângulo usando Determinante
// ====================================================
// [x] Pegar os valores dos pontos do  triangulo
//     [x] a (x,y); b(x,y); c(x,y)
// [x] colocar em uma matriz;
// [] calcular o determinante
// [] Calcular a área --> A = |D| / 2


const triangle = {
    a: [1,-2],
    b: [-2,4],
    c: [1,5],
}

function matrix(triangle) {
    /* 
    |x1, y1, 1| 0,1,2
    |x2, y2, 1| 3,4,5
    |x3, y3, 1| 6,7,8
    */
   const matrix = [
    triangle.a[0], triangle.a[1],1,
    triangle.b[0],triangle.b[1],1,
    triangle.c[0], triangle.c[1],1
    ]
    // console.log(`
    //     ________
    //     |${matrix[0]},${matrix[1]},${matrix[2]},|${matrix[0]},${matrix[1]},
    //     |${matrix[3]},${matrix[4]},${matrix[5]},|${matrix[3]},${matrix[4]},
    //     |${matrix[6]},${matrix[7]},${matrix[8]} |${matrix[6]},${matrix[7]},
    // `)
   return matrix
}

// Calcular determinante ===========================================

function determinant(matrix) {
    /* 
    |x1, y1, 1| x1,y1
    |x2, y2, 1| x2,y2
    |x3, y3, 1| x3,y3

    P1 = (x1 . y2 . 1) + ( y1 . 1 . x3) + (1 . x2 .y3)
    P2 = (y1 . x2 . 1) + (x1 . 1 . y3) + (1 . y2 . x3)

    D = p1 - p2
    */
   const part1 = (matrix[0] * matrix[4] * matrix[8]) + (matrix[1] * matrix[5] * matrix[6]) + (matrix[2] * matrix[3] * matrix[7])
   const part2 = (matrix[1] * matrix[3] * matrix[8]) + (matrix[0] * matrix[5] * matrix[7]) + (matrix[2] * matrix[4] * matrix[6])

    const detResult = part1 - part2

     if(detResult < 0) {
        // verifica se o resultado é negativo
        // para prosseguir é necessário utilizar o módulo.
        let result = detResult * (-1)
         console.log(result)
         return result
     }

   return detResult
}


function triangelArea(determinant) {
    const result = determinant * (1/2)
    console.log(`The Area is ${result} units`)
    return result
}

// triangelArea(determinant(matrix(triangle)))