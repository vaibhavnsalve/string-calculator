
    export const add = (numbers) => {
        if (!numbers) return 0;
      
        // Handle comma and newline as delimiters
        const delimiters = /[,\n]/;
        const numArr = numbers.split(delimiters).map(Number);
        
        return numArr.reduce((acc, curr) => acc + curr, 0);
      };
      

  