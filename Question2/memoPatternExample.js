/**
I am very proud of my implementation of the memoization pattern in one of the proyects that I've been working currenytly, 
This example is just to show you a quick example of how to use it in a fibonacci exercise. And its quite simple! 
Memoization is a technique used to optimize recursive algorithms by caching the results of previously computed inputs. 
This can significantly improve the performance of such algorithms, as the same inputs do not need to be recomputed, 
saving time and resources.
 * 
 */

fibonachiMaker = () => {
    let count = 0;
    let memorize = {};
    
    getNumberByIndex = (index) => {
      if(memorize[index])
        return memorize[index];
      count++;
      if (index < 2) return index;
  
      memorize[index] = getNumberByIndex(index - 1) + getNumberByIndex(index - 2);
      return memorize[index];
    };
  
    return {
      getNumberByIndex,
      getcount: () => count,
    };
  };
  
  let fibonacciMakerWithMemo = fibonachiMaker();
  
  console.log(fibonacciMakerWithMemo.getNumberByIndex(20));
  console.log(fibonacciMakerWithMemo.getcount());
  

  