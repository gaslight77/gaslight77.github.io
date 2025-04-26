function showit(var1) {
  // hide the one div is shown
  document.getElementById("tab1").style.display = "none"
  document.getElementById("tab2").style.display = "none"
  document.getElementById("tab3").style.display = "none"
  document.getElementById("tab4").style.display = "none"
  document.getElementById("tab5").style.display = "none"
  document.getElementById("tab6").style.display = "none"
  // show the one div that you sent to this function
  document.getElementById(var1).style.display = "block"
}

function myfunction() {
const var2 = document.getElementById('textbox1').value
const var3 = document.getElementById('textbox2').value
const var4 = document.getElementById('textbox3').value
const var5 = document.getElementById('textbox4').value
document.getElementById('stuff').innerText = var2 + " " + var3 + " " + var4 + " " + var5
}
