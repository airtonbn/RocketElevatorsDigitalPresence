$('document').ready(function () {
	$('#residential').hide();
	$('#commercial').hide();
	$('#corporate').hide();
	$('#hybrid').hide();
});

$('#select-building-type').change(function () {
	var buildingType = this.value;
	if (buildingType === "residential") {
		$('#residential').show();
		$('#commercial').hide();
		$('#corporate').hide();
		$('#hybrid').hide();
	} else if (buildingType === "commercial") {
		$('#residential').hide();
		$('#commercial').show();
		$('#corporate').hide();
		$('#hybrid').hide();
	} else if (buildingType === "corporate") {
		$('#residential').hide();
		$('#commercial').hide();
		$('#corporate').show();
		$('#hybrid').hide();
	} else if (buildingType === "hybrid") {
		$('#residential').hide();
		$('#commercial').hide();
		$('#corporate').hide();
		$('#hybrid').show();
	}
});

function calculShaft() {
	var department = $('#select-building-type').val();
	var valor;
	var NberElevators;
	if (department == "residential") {

		var apart = document.getElementById("apart").value || 0;
		var floors = document.getElementById("floorsRes").value || 0;
		var base = document.getElementById("baseRes").value || 0;
		var Nber = Math.ceil(apart / (floors * 6));

		var colonne = Math.ceil(floors / 20);

		NberElevators = Nber * colonne;
		if (apart != 0 && floors != 0 && base != 0) { document.getElementById("numElevReq").value = NberElevators; }
		else {
			document.getElementById("numElevReq").value = 0;
		}
	}


	if (department == "commercial") {
		var a1 = document.getElementById("parkCom").value || 0;
		var a2 = document.getElementById("baseCom").value || 0;
		var a3 = document.getElementById("floorsCom").value || 0;
		var a4 = document.getElementById("companiesCom").value || 0;


		NberElevators = document.getElementById("cageCom").value || 0;
		if (a1 != 0 && a2 != 0 && a3 != 0 && a4 != 0) {
			document.getElementById("numElevReq").value = NberElevators;
		}
		else {
			document.getElementById("numElevReq").value = 0;
		}
	}

	if (department == "corporate") {
		var floorsCorp1 = document.getElementById("floorsCorp").value || 0;
		var floorsCorp = Number(document.getElementById("floorsCorp").value || 0);

		var Bc = document.getElementById("baseCorp").value;
		var Bsm = Number(document.getElementById("baseCorp").value || 0);
		var mpf = document.getElementById("occupCorp").value || 0;
		var Nber = Math.ceil(mpf * (floorsCorp + Bsm) / 1000);
		var colonne = Math.ceil((floorsCorp + Bsm) / 20);
		var NberResultElevatorsByCol = Math.ceil(Nber / colonne);

		NberElevators = NberResultElevatorsByCol * colonne;

		document.getElementById("numElevReq").value = NberElevators;
	}

	if (department == "hybrid") {

		var floorsCorp1 = document.getElementById("floorsHybr").value || 0;
		var floorsCorp = Number(document.getElementById("floorsHybr").value || 0);
		var Bc = document.getElementById("baseHybr").value;
		var Bsm = Number(document.getElementById("baseHybr").value || 0);
		var mpf = document.getElementById("occupHybr").value || 0;
		var Nber = Math.ceil(mpf * (floorsCorp + Bsm) / 1000);
		var colonne = Math.ceil((floorsCorp + Bsm) / 20);
		var NberResultElevatorsByCol = Math.ceil(Nber / colonne);

		NberElevators = NberResultElevatorsByCol * colonne;

		document.getElementById("numElevReq").value = NberElevators;

	}

	var PriceInst;
	var InstalCost;

	if (document.getElementById("gammaS").checked) {


		// STANDARD //              
		document.getElementById("priceElev").value = "7565.00";
		PriceInst = 7565 * 1.1 * NberElevators;
		PriceInst = PriceInst.toFixed(2);
		var instCost = 7565 * 0.1 * NberElevators;
		document.getElementById("costTotal").value = PriceInst;
		document.getElementById("costInst").value = instCost;
	}

	//  PREMIUM  //

	if (document.getElementById("gammaP").checked) {
		document.getElementById("priceElev").value = "12345.00";
		PriceInst = (NberElevators * 12345) * 1.13
		PriceInst = PriceInst.toFixed(2);
		var instCost = 12345 * 0.1 * NberElevators;

		document.getElementById("costTotal").value = PriceInst;
		document.getElementById("costInst").value = instCost;
	}

	// EXCELIUM //

	if (document.getElementById("gammaE").checked) {

		document.getElementById("priceElev").value = "15400.00";
		PriceInst = (NberElevators * 15400) * 1.16;
		PriceInst = PriceInst.toFixed(2);
		var instCost = 15400 * 0.1 * NberElevators;

		document.getElementById("costTotal").value = PriceInst;
		document.getElementById("costInst").value = instCost;
	}
}

