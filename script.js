 
function ScrollFunction() {
  var aboutSection = document.getElementById('about-section');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
};


function OpenCv(){
  const button = document.getElementById("open-cv");
  const link = document.getElementById("pdf-link");
  button.addEventListener("click", () => {
    link.click();
  });
}
  