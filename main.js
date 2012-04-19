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
		$("."+selectedContent+"Content").hide(1500);
		if (subSelectedItem!= me) {
			$(subSelectedItem).toggleClass("subItemSelected");
			subSelectedItem= null;
		}
	}
	selectedContent = me.id;		
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
					$("#album").attr('src','Homepage2/album/Home.html');
					$(".HomeContent").show(1000);
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
					$("#CaliforniaFrame").attr('src','Photos/MyAlbum/California.html');
					$(".CaliforniaContent").show(1000);
					break;
				case "France": 
					submenuHeadClick(this);
					break;
				case "JoshuaTree": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#JoshuaTreeFrame").attr('src','Photos/MyAlbum/JoshuaTree.html');
					$(".JoshuaTreeContent").show(1000);
					break;
				case "London": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#LondonFrame").attr('src','Photos/MyAlbum/London.html');
					$(".LondonContent").show(1000);
					break;
				case "MarthasVineyard": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#MarthasVineyardFrame").attr('src','Photos/MyAlbum/MarthasVineyard.html');
					$(".MarthasVineyardContent").show(1000);
					break;
				case "NewYorkCity": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#NewYorkCityFrame").attr('src','Photos/MyAlbum/NewYorkCity.html');
					$(".NewYorkCityContent").show(1000);
					break;
				case "NewZealand": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#NewZealandFrame").attr('src','Photos/MyAlbum/NewZealand.html');
					$(".NewZealandContent").show(1000);
					break;
				case "Weddings": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$("#WeddingsFrame").attr('src','Photos/MyAlbum/Wedding.html');
					$(".WeddingsContent").show(1000);
					break;
				case "Timelapses": 
					submenuHeadClick(this);
					hideOthers(this);
					$(".TimelapsesContent").show(1000);
					break;
				case "AboutUs": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$(".AboutUsContent").show(1000);
					break;
				case "ContactUs": 
					submenuHeadClick(this);
					hideOthers(this);
					$(".ContactUsContent").show(1000);
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
				$("#AustraliaUnderwaterFrame").attr('src','Photos/MyAlbum/AustraliaUnderwater.html');
				$(".AustraliaUnderwaterContent").show(1000);
				selectedContent = "AustraliaUnderwater";
				break;
			case "AustraliaPlaces": 			
				submenuItemClick(this);
				hideOthers(this);
				$("#AustraliaPlacesFrame").attr('src',"Photos/MyAlbum/AustraliaPlaces.html");
				$(".AustraliaPlacesContent").show(1000);
				selectedContent = "AustraliaPlaces";
				break;
			case "AustraliaWildlife": 			
			submenuItemClick(this);
			hideOthers(this);
			$("#AustraliaWildlifeFrame").attr('src','Photos/MyAlbum/AustraliaWildlife.html');
			$(".AustraliaWildlifeContent").show(1000);
			selectedContent = "AustraliaWildlife";
			break;
			case "BahamasUnderwater": 
				submenuItemClick(this);
				hideOthers(this);
				$("#BahamasUnderwaterFrame").attr('src','Photos/MyAlbum/BahamasUnderwater.html');
				$(".BahamasUnderwaterContent").show(1000);
				selectedContent = "BahamasUnderwater";
				break;								
			case "BahamasPlaces": 			
				submenuItemClick(this);
				hideOthers(this);
				$("#BahamasPlacesFrame").attr('src','Photos/MyAlbum/BahamasScenery.html');
				$(".BahamasPlacesContent").show(1000);
				selectedContent = "BahamasPlaces";
				break;	
			case "Etretat": 
				submenuItemClick(this);
				hideOthers(this);
				$("#EtretatFrame").attr('src','Photos/MyAlbum/Etretat.html');
				$(".EtretatContent").show(1000);
				selectedContent = "Etretat";
				break;
			case "Honfleur": 			
				submenuItemClick(this);
				hideOthers(this);
				$("#HonfleurFrame").attr('src','Photos/MyAlbum/Honfleur.html');
				$(".HonfleurContent").show(1000);
				selectedContent = "Honfleur";
				break;
			case "Paris": 			
			submenuItemClick(this);
			hideOthers(this);
			$("#ParisFrame").attr('src','Photos/MyAlbum/Paris.html');
			$(".ParisContent").show(1000);
			selectedContent = "Paris";
			break;
			case "New York City": 			
			submenuItemClick(this);
			//hideOthers(this);
			selectedContent = "NewYorkCity";
			break;
			
			case "Contacts": 			
				submenuItemClick(this);
				hideOthers(this);
				$(".ContactUsContent").show(1000);
				selectedContent = "ContactUs";
				break;
			
		}});

});