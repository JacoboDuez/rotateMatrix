const A = [[1,2,3],
            [4,5,6],
            [7,8,9],
        ];

function transpose(A){
    let N = A.length;
    for(let i=0;i<N-1;i++){
        for(let j=i+1;j<N;j++){
            swap(A,i,j,j,i);
        }
    }
}

function swap(A,i,j,k,l){
    let temp = A[j][i];
    A[j][i] = A[l][k];
    A[l][k] = temp;
}

function exchangeColumns(A){
    let N = A.length;
    let n = Math.floor(N/2);
    for(let i=0;i<n;i++){
        for(let j=0;j<N;j++){
            swap(A,i,j,N-1-col,row);
        }
    }
}

function rotateMatrix(A){
    document.getElementById("original matrix").innerHTML += json.stringify(A);
    transpose(A);
    exchangeColumns(A);
    document.getElementById("matrix results").innerHTML += json.stringify(A);
}



console.log('Original A= ',JSON.stringify(A));
transpose(A);
console.log('Transpose A= ' + JSON.stringify(A));
exchangeColumns(A);
console.log('Swapped matrix A = ',JSON.stringify(A));