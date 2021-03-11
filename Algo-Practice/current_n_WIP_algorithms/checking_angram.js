function anagramCheck(str1, str2) {
  let strArray1 = [];
  let strArray2 = [];

  //THis is sujans
  for (let i = 0; i < str1.length; i++) {
    strArray1.push(str1[i]);
    strArray2.push(str2[i]);
  }

  console.log(strArray1);
  console.log(strArray2);

  strArray1.sort();
  strArray2.sort();
  console.log(strArray1.length);

  console.log(strArray1);
  console.log(strArray2);


  for (let i = 0; i < strArray1.length; i++) {
    if (strArray1[i] != strArray2[i]) {
      return false;
    }

    return true;


  }
}
  console.log(anagramCheck("shiva", "hiavm"));
