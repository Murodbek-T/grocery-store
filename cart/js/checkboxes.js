// Select all checkboxes
const checkboxes = document.querySelectorAll(".option-checkbox");


const termsCheckboxes = document.querySelectorAll(".terms-checkbox");
const optionCheckboxes = document.querySelectorAll(".option-checkbox");
const paymentRadios = document.querySelectorAll(".flat-rate");
const submitButton = document.querySelector(".order-btn");

optionCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.disabled = true;
        }
      });
    } else {
      checkboxes.forEach((otherCheckbox) => {
        otherCheckbox.disabled = false;
      });
    }
  });
});
function checkConditions() {
  const allTermsChecked = Array.from(termsCheckboxes).every((cb) => cb.checked);
  const anyOptionChecked = Array.from(optionCheckboxes).some(
    (cb) => cb.checked
  );
  const anyPaymentChecked = Array.from(paymentRadios).some((rb) => rb.checked);


  if (allTermsChecked && anyOptionChecked && anyPaymentChecked) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", true);
  }
}


termsCheckboxes.forEach((cb) => cb.addEventListener("change", checkConditions));
optionCheckboxes.forEach((cb) =>
  cb.addEventListener("change", checkConditions)
);
paymentRadios.forEach((rb) => rb.addEventListener("change", checkConditions));
