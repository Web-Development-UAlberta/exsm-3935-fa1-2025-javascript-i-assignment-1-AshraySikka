async function main() {

  let f_name = String(await input("Please enter your first name: ")); //Takes in the first name as an input
  let l_name = String(await input("\nPlease enter your last name: ")); //Takes in the last name as an input
  let fullname = f_name + " " + l_name; //Concatinating the first name and the last name with an additional space in betwwen
  let edited_name = fullname.replace(/o/g, "a"); // Using regex to replace all the 'o' with 'a' and storing it in a variable
  output("\nThe name "+fullname+" edited after replacing character 'o' with 'a' is: "+edited_name+"\n"); //Displaying the edited name
  
  let l_number = Number(await input("\nPlease enter a number larger than 10: ")); //Takes in a number input greater than 10
  let s_number = Number(await input("\nPlease enter a number smaller than 10: ")); // Takes in a number input less than 10
  remainder = (l_number % s_number); // Calculating the mod of the two numbers
  output("\nThe remainder of "+l_number+"/"+s_number+" is: "+remainder); // Displaying the remainder of the mod of the two numbers
  
}
