function show(id){

 var check = document.getElementById(id);
 var section = document.getElementById(id.split("_")[0]);
 if (check.style.display == "none" || check.style.display == ""){
	check.style.display = "inline-block";
	section.innerHTML = section.innerHTML + "/";
 }
 else {
	 check.style.display = "none";
	 section.innerHTML = section.innerHTML.split('/')[0]
 }
 }

function load(page){
	// parent.parent.location.hash = page;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var mainpage = parent.frames["main"];
		mainpage.location.href=page;
		return;
	}
	else{
		parent.document.getElementById('frameSet1').cols = "20%,*,20%"; 
		var mainpage = parent.frames["related"];
		mainpage.location.href="related.html";
		var mainpage = parent.frames["main"];
		mainpage.location.href=page;
	}
}
