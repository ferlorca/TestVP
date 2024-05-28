function maxNuts(D, N, F, C) {
    let x = Math.floor((C * D) / F);
    if (N > x * F) {
      x = Math.floor(N / F);
    }
    return x;
  }
  
  function main() {
    let inputs = [];
    while (true) {
      let line = prompt("D,N,F,C", "");
      if (line === "") {
        break;
      }
      inputs.push(line.split(","));
    }
    for (let input of inputs) {
      let D = parseInt(input[0]);
      let N = parseInt(input[1]);
      let F = parseInt(input[2]);
      let C = parseInt(input[3]);
      let X = maxNuts(D, N, F, C);
      console.log(X);
    }
  }

  main();