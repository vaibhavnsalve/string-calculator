export function add(numbers) {
  // If the input is empty, return 0
  if (numbers === "") {
    return 0;
  }

  // Default delimiter is a comma
  let delimiter = ",";
  
  // Check if a custom delimiter is defined (starts with "//")
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterLineEnd); // Extract custom delimiter
    numbers = numbers.substring(delimiterLineEnd + 1); // Remove the delimiter line
  }

  // Debug: Print the input received for troubleshooting
  console.log("Input received:", numbers);

  // Replace any escaped newlines (\\n) with actual newlines
  numbers = numbers.replace(/\\n/g, "\n");

  // If a custom delimiter is being used, split by that delimiter
  const numberArray = numbers.split(new RegExp(`[${delimiter}\n,]+`)).filter(Boolean);

  // Debug: Log the split numbers to see how the input is split
  console.log("Split numbers:", numberArray);

  // Handle negative numbers
  const negatives = numberArray.filter(num => Number(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  // Calculate the sum of numbers
  const sum = numberArray.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : Number(curr)), 0);

  // Debug: Print the final sum
  console.log("Final sum:", sum);

  return sum;
}
