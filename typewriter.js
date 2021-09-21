const sentence = "Bonsouir Elliot";

const typewriter = function(sentence) {
  let ms = 75;
  for (let char = 0; char < sentence.length; char ++) {
    setTimeout(() => {
      process.stdout.write(sentence[char]);
    }, ms);
    ms += 75;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, ms);
};

//test
typewriter(sentence);