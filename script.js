function copyContract() {

  const contract = "B2SDZA6De8Tr9c6dJvVGVSPyEVrRp5k7kVeSHnJdpump";

  navigator.clipboard.writeText(contract);

  const button = document.querySelector(".contract button");

  const originalText = button.innerText;

  button.innerText = "✅ Copied!";

  button.style.background = "#14F195";
  button.style.color = "#000";

  setTimeout(() => {
    button.innerText = originalText;
  }, 2000);

}
