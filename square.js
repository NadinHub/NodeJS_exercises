const arg = process.argv;
const a = arg[2];

function square(a) {
  let arr = [];
  let str;
  
  if (a >= 1 && a <= 10) {
    for (i = 0; i <= a; i++) {
      arr.push("#");
      str = arr.join(" ");
    }
    console.log(str);
    for (j = 1; j < a; j++) {
      console.log(str);
    }
  } else "Please, write number from 1 to 10";
}

square(a);
