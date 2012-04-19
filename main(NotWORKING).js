// JavaScript Document
var myElement = document.getElementById("menuDiv");
var selected = null;
var subSelected = null;
var subSelectedItem = null;
var selectedContent = "Home";
var selectedBio = null;
function menuHeadClick (me){
		if (selected != me) {
			$(selected).toggleClass("menuHeadSelected");
			$(me).toggleClass("menuHeadSelected");
		}
		selected = me;
		$(".subMenu").slideUp(800);
}
function submenuHeadClick (me) {
	if (selected != me) {
			$(selected).toggleClass("menuHeadSelected");
			$(me).toggleClass("menuHeadSelected");
			$(subSelected).slideUp(800);
		}
		selected = me;
		subSelected ="#"+me.id+"Sub";
		$(subSelected).slideDown(800);	
}
function submenuItemClick (me) {
	if (subSelectedItem!= me) {
		$(subSelectedItem).toggleClass("subItemSelected");
		$(me).toggleClass("subItemSelected");		
	}
	subSelectedItem= me;		
}

function hideOthers(me) {
	if (selectedContent !== me.id) {
		
		if(selectedContent == "Home"){
			$("."+selectedContent+"Content").hide(1000);
		}
			
		else {
		$("."+selectedContent+"Content").hide(1000);}
		
		if (subSelectedItem!= me) {
			$(subSelectedItem).toggleClass("subItemSelected");
			subSelectedItem= null;
		}
	}
	selectedContent = me.id;	
	console.log("Selected content is now: ", selectedContent);	
}



$(document).ready(function() {
	$(".subMenuItem").css("display","block");
	$(".subMenu").hide(0);
	$(".menuHead, .subMenuItem").hover(function() {		
		$(this).toggleClass("hoverOn");
	});
	

	// Function to handle non submenu heads being clicked

	
	// Click Handling For Menu Items
	$(".menuHead").click(function() {
			if (selected == null)
				selected = this.id;
			console.log(this);
			console.log(this.id);		
			switch(this.id) {
				case "Home": 
					menuHeadClick(this);
					hideOthers(this);
					$("#HomeAlbum").attr('src','Homepage2/album/Home.html');
					$(".HomeContent").fadeIn(1000);
					break;
				case "Australia": 
					submenuHeadClick(this);
					break;
				case "Bahamas": 
					submenuHeadClick(this);
					break;
				case "California": 
					submenuHeadClick(this);
					hideOthers(this);
					$("#album").attr('src','Photos/MyAlbum/California.html');
					$(".PhotoAlbums").fadeIn(1000);
					break;
				case "France": 
					submenuHeadClick(this);
					break;
				case "JoshuaTree": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#album").attr('src','Photos/MyAlbum/JoshuaTree.html');
					$(".PhotoAlbums").fadeIn(1000);
					break;
				case "London": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#album").attr('src','Photos/MyAlbum/London.html');
					$(".PhotoAlbums").fadeIn(1000);
					break;
				case "MarthasVineyard": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#album").attr('src','Photos/MyAlbum/MarthasVineyard.html');
					$(".PhotoAlbums").fadeIn(1000);
					break;
				case "NewYorkCity": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#album").attr('src','Photos/MyAlbum/NewYorkCity.html');
					$(".PhotoAlbums").fadeIn(1000);
					break;
				case "NewZealand": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#album").attr('src','Photos/MyAlbum/NewZealand.html');
					$(".PhotoAlbums").fadeIn(1000);
					break;
				case "Weddings": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#album").attr('src','Photos/MyAlbum/Wedding.html');
					$(".PhotoAlbums").fadeIn(1000);
					break;
				case "Timelapses": 
					submenuHeadClick(this);
					hideOthers(this);
					$(".TimelapsesContent").fadeIn(1000);
					break;
				case "AboutUs": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$(".AboutUsContent").fadeIn(1000);
					break;
			}});	
			
	$(".subMenuItem").click(function() {
		/* Check to see if another sub menu has been selected */
		if (subSelectedItem== null) 
			subSelectedItem= this.id;
		switch(this.id) {
			case "AustraliaUnderwater": 
				submenuItemClick(this);
				hideOthers(this);
				$(".PhotoAlbums").fadeIn(1000);
				$("#album").attr('src','Photos/MyAlbum/AustraliaUnderwater.html');
				selectedContent = "HomeContent";
				break;
			case "AustraliaPlaces": 			
				submenuItemClick(this);
				hideOthers(this);
				$(".PhotoAlbums").fadeIn(1000);
				$("#album").attr('src',"Photos/MyAlbum/AustraliaPlaces.html");
				selectedContent = "HomeContent";
				break;
			case "AustraliaWildlife": 			
			submenuItemClick(this);
			hideOthers(this);
			$(".PhotoAlbums").fadeIn(1000);
			$("#album").attr('src','Photos/MyAlbum/AustraliaWildlife.html');
			selectedContent = "HomeContent";
			break;
			case "BahamasUnderwater": 
				submenuItemClick(this);
				hideOthers(this);
				$("#album").attr('src','Photos/MyAlbum/BahamasUnderwater.html');
				$(".PhotoAlbums").fadeIn(1000);
				selectedContent = "HomeContent";
				break;								
			case "BahamasPlaces": 			
				submenuItemClick(this);
				hideOthers(this);
				$("#album").attr('src','Photos/MyAlbum/BahamasScenery.html');
				$(".PhotoAlbums").fadeIn(1000);
				selectedContent = "HomeContent";
				break;	
			case "Etretat": 
				submenuItemClick(this);
				hideOthers(this);
				$("#album").attr('src','Photos/MyAlbum/Etretat.html');
				$(".PhotoAlbums").fadeIn(1000);
				selectedContent = "HomeContent";
				break;
			case "Honfleur": 			
				submenuItemClick(this);
				hideOthers(this);
				$("#album").attr('src','Photos/MyAlbum/Honfleur.html');
				$(".PhotoAlbums").fadeIn(1000);
				selectedContent = "HomeContent";
				break;
			case "Paris": 			
			submenuItemClick(this);
			hideOthers(this);
			$("#album").attr('src','Photos/MyAlbum/Paris.html');
			$(".PhotoAlbums").fadeIn(1000);
			selectedContent = "HomeContent";
			break;
		}});

});