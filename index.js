window.onload=registerListeners;

function registerListeners() {
	var asd;
	asd=document.getElementById("calgLib");
	asd.addEventListener("change", function () { getContent("liblocations.html");}, false);
	asd=document.getElementById("calgTraff");
	asd.addEventListener("change", function () { getContent("trafficincident.html");}, false);
    asd=document.getElementById("calgBuild");
	asd.addEventListener("change", function () { getContent("buildpermit.html");}, false);
    asd=document.getElementById("calgCrime");
	asd.addEventListener("change", function () { getContent("commcrime.html");}, false);
}



function getContent(infopage) {

    asynchrequest= new XMLHttpRequest();
    asynchrequest.onreadystatechange = function() {
if (asynchrequest.readyState == 4 && asynchrequest.status == 200) {
  document.getElementById("buttonresults").innerHTML = asynchrequest.responseText;
}
};
asynchrequest.open("GET", infopage, true);
asynchrequest.send();
}


