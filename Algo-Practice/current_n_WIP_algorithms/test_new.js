function anagramCheck(str1, str2) {
  let strArray1 = [];
  let strArray2 = [];

  for (let i = 0; i < str1.length; i++) {
    strArray1.push(str1[i]);
    strArray2.push(str2[i]);
  }

  console.log(strArray1);
  console.log(strArray2);

  strArray1.sort();
  strArray2.sort();

  console.log(strArray1);
  console.log(strArray2);



  let result = '';

  for (let i = 0; i < strArray1.length; i++) {
    console.log(strArray1[i] + " <-- from 1");
    console.log(strArray2[i] + " <-- from 2");
    //if (JSON.stringify(strArray1[i]) !== JSON.stringify(strArray2[i])) {
    if (strArray1 !== strArray2[i]) {
result = "Not equal";
      //return false;
    }
    result = "Equal";
    //return true;


  }
  return result;
}
  console.log(anagramCheck("shiva", "hiavm"));
