// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  let string = arr[0];
  let num = arr[1];

  if (typeof string !== "string" || typeof num !== "number") return undefined;
  if (num < 0) return "";

  let newString = "";

  for (let i = 0; i < num; i++) {
    newString = newString + string;
  }

  console.log(newString);

  return newString;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["hello", 2], "hellohello"));
expect(repeat(["meow", 5], "meowmeowmeowmeow"));
expect(repeat([13, 7], undefined));

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
