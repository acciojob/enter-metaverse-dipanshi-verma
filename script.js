document.getElementById("enterBtn").addEventListener("click", function () {
  const statusPara = document.getElementById("status");

  const newHeading = document.createElement("h1");
  newHeading.id = "status";
  newHeading.textContent = "Entered Metaverse";

  statusPara.replaceWith(newHeading);
});
