import { useEffect } from "react";
import "./styles.css";

export default function PopUp() {
  useEffect(() => {
    const popUp1 = document.querySelector(".pop-up-1");
    const popUp2 = document.querySelector(".pop-up-2");
    const allPopUps = document.querySelectorAll(".pop-up");

    allPopUps.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.remove("show-pop-up");
        if (!popUp2.classList.contains("show-pop-up")) {
          popUp1.classList.remove("move-pop-up-1");
        }
      });
    });

    setTimeout(() => {
      popUp1.classList.add("show-pop-up");

      setTimeout(() => {
        popUp1.classList.add("move-pop-up-1");
        popUp2.classList.add("show-pop-up");

        setTimeout(() => {
          popUp1.classList.remove("show-pop-up");

          setTimeout(() => {
            popUp2.classList.remove("show-pop-up");
          }, 2500);
        }, 2500);
      }, 2500);
    }, 1000);
  }, []);

  return (
    <>
      <div className="pop-up pop-up-1">
        Please note that this design is not my own.
      </div>
      <div className="pop-up pop-up-2">Only the code was written by me.</div>
    </>
  );
}
