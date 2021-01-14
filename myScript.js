function daftar(i){
	if(i==1)
		localStorage.setItem("sign","in");
	else
		localStorage.setItem("sign","up");
	location.href = "daftar.html";
}

// hihstory

function historyBack() {
    window.history.back()
}
function historyForward() {
    window.history.forward()
}

//sign User

setTimeout(userSign,0);

var sudahMasuk = localStorage.getItem("sudahMasuk");
function userSign(){
	if(sudahMasuk=="iya"){
		userKe = localStorage.getItem("username"+(localStorage.getItem("userKe"))+"");
		document.getElementsByClassName('sign')[0].style.display = "none";
		document.getElementsByClassName('sign')[1].style.display = "none";

		document.getElementsByClassName('signUser')[0].style.display = "block";
		document.getElementsByClassName('signUser')[1].style.display = "block";
		document.getElementsByClassName('signUser')[2].style.display = "block";

		document.querySelector('.navToko').style.display = "block";

		document.getElementsByClassName('signUser')[0].innerHTML += userKe;

		// window.alert("Login Sucsess!!");

	}
	else{
		document.getElementsByClassName('sign')[0].style.display = "block";
		document.getElementsByClassName('sign')[1].style.display = "block";

		document.getElementsByClassName('signUser')[0].style.display = "none";
		document.getElementsByClassName('signUser')[1].style.display = "none";
		document.getElementsByClassName('signUser')[2].style.display = "none";
	
		document.querySelector('.navToko').style.display = "none";
	}
		
}

// sign out
function keluar(){
		document.getElementsByClassName('sign')[0].style.display = "block";
		document.getElementsByClassName('sign')[1].style.display = "block";

		document.getElementsByClassName('signUser')[0].style.display = "none";
		document.getElementsByClassName('signUser')[1].style.display = "none";
		document.getElementsByClassName('signUser')[2].style.display = "none";
		localStorage.setItem("sudahMasuk","belum");
		localStorage.removeItem("userKe");

		location.reload();
}

// get guide
function getGuide(){
	location.href = "registry.html";
}

// to home
function toHome(){
	location.href = "index.html";
}