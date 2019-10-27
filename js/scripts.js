function answer() {
  var name = $('#firstname').val()
  var email = $('#email').val()
  var companySize = $("#size :selected").val()
  var industry = $("#industry :selected").val()
  if (companySize === "smb" || industry === "non-icp")
    window.location.href = "moreinformation.html"
  else
    window.location.href = "https://calendly.com/sales-team-80/30-minute-acme-call?name=" + name + "&email=" + email
}