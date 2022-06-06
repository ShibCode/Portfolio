export function letterAnimation(lettersArr, allLetters) {
  lettersArr.forEach((arr) => {
    arr.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("show-letter");
        letter.classList.add("animate-enter");

        setTimeout(() => {
          letter.classList.remove("animate-enter");
        }, 600);
      }, index * 100);
    });
  });

  allLetters.forEach((letter) => {
    letter.addEventListener("mouseover", (e) => {
      e.target.classList.add("animate");
      setTimeout(() => {
        e.target.classList.remove("animate");
      }, 800);
    });
  });
}
