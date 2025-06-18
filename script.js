document.getElementById("enterBtn").addEventListener("click", function() {
  const statusPara = document.getElementById("status");

  // Replace <p> content with <h1>Entered Metaverse</h1>
  statusPara.outerHTML = "<h1 id='status'>Entered Metaverse</h1>";
});
