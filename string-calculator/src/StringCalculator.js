
export const add = (numbers) => {
    if (!numbers) return 0;
  
    let delimiter = /[,\n]/;
  
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numbers = numbers.substring(delimiterEndIndex + 1);
    }
  
    const numArr = numbers.split(delimiter).map(Number);
    const negatives = numArr.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
      }

      
    return numArr.reduce((acc, curr) => acc + curr, 0);
  };
  

  