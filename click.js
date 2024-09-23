const changeText = () => {
  const button = document.getElementById("gantitext");
  const title = document.getElementById("title");

  button.addEventListener("click", function firstClick() {
    title.textContent = "salam kenal";

    button.removeEventListener("click", firstClick); // Remove the first click event
    button.addEventListener("click", function secondClick() {
      title.textContent = "saya Rifat";

      button.removeEventListener("click", secondClick); // Remove the second click event
      button.addEventListener("click", function thirdClick() {
        title.textContent = "sedang belajar js nihh";
      });
    });
  });
};

// Call the function
export { changeText };
