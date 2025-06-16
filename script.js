let inputs = [
  document.getElementById("firstName"),
  document.getElementById("lastName"),
  document.getElementById("email"),
  document.getElementById("birthDay"),
  document.getElementById("birthMonth"),
  document.getElementById("birthYear"),
  document.getElementById("pincode"),
  document.getElementById("city"),
  document.getElementById("phoneNumber"),
  document.getElementById("password"),
  document.getElementById("confirmPassword"),
];

let Flag = false;

let Status1 = document.querySelector(".Status1");
let Status2 = document.querySelector(".Status2");

let filledInputs = new Set();

const updateProgress = () => {
  const total = inputs.length;
  const filled = filledInputs.size;
  const percentage = (filled / total) * 100;

  Status1.style.width = `${percentage}%`;
  Status2.style.width = `${percentage}%`;

  if (percentage == 100) {
    Flag = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (
      input.value.trim() !== "" &&
      (!input.tagName === "SELECT" || input.value !== "")
    ) {
      filledInputs.add(input.id);
    } else {
      filledInputs.delete(input.id);
    }
    updateProgress();
  });
});

const Check = () => {
  console.log("Hello");

  if (!Flag) {
    alert("Please Fill All Input's Of Form");
  } else {
    alert("Perfectly Fill The Form");
  }
};
