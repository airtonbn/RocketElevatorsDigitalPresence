$('document').ready(function () {
	$('#residential').hide();
	$('#commercial').hide();
	$('#corporate').hide();
	$('#hybrid').hide();
});

$('#select-building-type').change(function () {
	var buildingType = this.value;
	if (buildingType === "residential") {         //   {  }
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

	if (department == "residential") {
		var apart = parseInt(document.getElementById('apart').value);
		var floors = parseInt(document.getElementById('floorsRes').value);
		var base = parseInt(document.getElementById('baseRes').value);

		if (apart > 0 && floors <= 20 || apart > 0 && floors > 20) {
			valor = (apart / (floors - base)) / 6;
			valor = Math.ceil(valor);
			var nbElevators = document.getElementById('numElevReq').value;

			if (document.getElementById("gammaS").checked) {
				document.getElementById('priceElev').value = (7565);
				var costInst = 7565 * (parseInt(nbElevators));
				document.getElementById('costInst').value = (7565 * parseInt(nbElevators)) * 0.1;
				document.getElementById('costTotal').value = (7565 * parseInt(nbElevators)) * 1.1;
			}

			if (document.getElementById("gammaP").checked) {
				document.getElementById('priceElev').value = (12345);
				var costInst = 7565 * (parseInt(nbElevators));
				document.getElementById('costInst').value = (12345 * parseInt(nbElevators)) * 0.13;
				document.getElementById('costTotal').value = (12345 * parseInt(nbElevators)) * 1.13;
			}

			if (document.getElementById("gammaE").checked) {
				document.getElementById('priceElev').value = (15400);
				document.getElementById('costInst').value = (15400 * parseInt(nbElevators)) * 0.16;
				document.getElementById('costTotal').value = (15400 * parseInt(nbElevators)) * 1.16;
			}
		}
	}
	$('#numElevReq').val(valor);

	if (department == "commercial") {
		var bascageCome = parseInt(document.getElementById('cageCom').value);
		var valor = parseInt(bascageCome);
		if (valor > 0) {

			if (document.getElementById("gammaS").checked) {
				document.getElementById('priceElev').value = (7565);
				document.getElementById('costInst').value = (7565 * parseInt(valor)) * 0.1;
				document.getElementById('costTotal').value = (7565 * parseInt(valor)) * 1.1;
			}

			if (document.getElementById("gammaP").checked) {
				document.getElementById('priceElev').value = (12345);
				document.getElementById('costInst').value = (12345 * parseInt(valor)) * 0.13;
				document.getElementById('costTotal').value = (12345 * parseInt(valor)) * 1.13;
			}

			if (document.getElementById("gammaE").checked) {
				document.getElementById('priceElev').value = (15400);
				document.getElementById('costInst').value = (15400 * parseInt(valor)) * 0.16;
				document.getElementById('costTotal').value = (15400 * parseInt(valor)) * 1.16;
			}
		}
	}
	$('#numElevReq').val(valor);

	if (department == "corporate") {
		var companies = parseInt(document.getElementById('companiesCorp').value);
		var floors = parseInt(document.getElementById('floorsCorp').value);
		var base = parseInt(document.getElementById('baseCorp').value);
		var parkCorp = parseInt(document.getElementById('parkCorp').value);
		var occupCorp = parseInt(document.getElementById('occupCorp').value);

		if (apart > 0 && floors > 0) {
			valor = ((floors / 20) / 1000)((floors / occupCorp) / 1000);
			valor = Math.ceil(valor);
			var columns = valor * ((floors + base) / 20);
			valor = math.ceil(columns) * valor;			
			var nbElevators = document.getElementById('numElevReq').value;

			if (document.getElementById("gammaS").checked) {
				valor = ((floors / 20) / 1000)((floors / occupCorp) / 1000);
				valor = Math.ceil(valor);
				var columns = valor * ((floors + base) / 20);
				valor = math.ceil(columns) * valor;
				document.getElementById('priceElev').value = (7565);
				var costInst = 7565 * (parseInt(nbElevators));
				document.getElementById('costInst').value = (7565 * parseInt(valor)) * 0.1;
				document.getElementById('costTotal').value = (7565 * parseInt(valor)) * 1.1;
			}

			if (document.getElementById("gammaP").checked) {
				valor = ((floors / 20) / 1000)((floors / occupCorp) / 1000);
				valor = Math.ceil(valor);
				var columns = valor * ((floors + base) / 20);
				valor = math.ceil(columns) * valor;
				document.getElementById('priceElev').value = (12345);
				var costInst = 7565 * (parseInt(nbElevators));
				document.getElementById('costInst').value = (12345 * parseInt(valor)) * 0.13;
				document.getElementById('costTotal').value = (12345 * parseInt(valor)) * 1.13;
			}

			if (document.getElementById("gammaE").checked) {
				valor = ((floors / 20) / 1000)((floors / occupCorp) / 1000);
				valor = Math.ceil(valor);
				var columns = valor * ((floors + base) / 20);
				valor = math.ceil(columns) * valor;
				document.getElementById('priceElev').value = (15400);
				document.getElementById('costInst').value = (15400 * parseInt(valor)) * 0.16;
				document.getElementById('costTotal').value = (15400 * parseInt(valor)) * 1.16;
			}
		}
	}
	$('#numElevReq').val(valor);

	if (department == "hybryd") {
		var companiesHybr = parseInt(document.getElementById('companiesHybr').value);
		var floorsHybr = parseInt(document.getElementById('floorsHybr').value);
		var baseHybr = parseInt(document.getElementById('baseHybr').value);
		var parkHybr = parseInt(document.getElementById('parkHybr').value);
		var occupHybr = parseInt(document.getElementById('occupHybr').value);
		var hoursAct = parseInt(document.getElementById('hoursAct').value);

		if (apart > 0 && floors > 0) {
			valor = ((floors / 20) / 1000)((floors / occupCorp) / 1000);
			valor = Math.ceil(valor);
			var columns = valor * ((floors + base) / 20);
			valor = math.ceil(columns) * valor;
			document.getElementById('totalCorporate').value = (15400 * parseInt(valor)) * 1.16;
		}
	}
	$('#numElevReq').val(valor);
}

function getGammaValue(unitPrice) {
	var valor;
	var department = $('#select-building-type').val();

	var companies = parseInt(document.getElementById('companiesCom').value);
	var floorsCom = parseInt(document.getElementById('floorsCom').value);
	var baseCom = parseInt(document.getElementById('baseCom').value);
	var parkCom = parseInt(document.getElementById('parkCom').value);
	var cageCom = parseInt(document.getElementById('cageCom').value);

	var companiesCorp = parseInt(document.getElementById('companiesCorp').value);
	var floorsCorp = parseInt(document.getElementById('floorsCorp').value);
	var baseCorp = parseInt(document.getElementById('baseCorp').value);
	var parkCorp = parseInt(document.getElementById('parkCorp').value);
	var occupCorp = parseInt(document.getElementById('occupCorp').value);

	var companiesHybr = parseInt(document.getElementById('companiesHybr').value);
	var floorsHibr = parseInt(document.getElementById('floorsHibr').value);
	var baseHibr = parseInt(document.getElementById('baseHibr').value);
	var parkHibr = parseInt(document.getElementById('parkHibr').value);
	var occupHibr = parseInt(document.getElementById('occupHibr').value);
	var hoursAct = parseInt(document.getElementById('hoursAct').value);
}
$('#calculateQuote').click(function () {

});


	/*
		if (document.getElementById("gammaS").checked) {
			alert(333333);
			var nbElevators = document.getElementById('numElevReq').value;
			document.getElementById('totalStandart').value = (7565 * parseInt(nbElevators)) * 1.1;
		}
	
		if (document.getElementById("gammaP").checked) {
			alert(44444);
			valor = numCage;
			document.getElementById('totalPremium').value = (12345 * parseInt(valor)) * 1.13;
		}
	
		if (document.getElementById("gammaE").checked) {
			alert(55);
			valor = ((floors / 20) / 1000)((floors / people) / 1000);
			valor = Math.ceil(valor);
			var columns = valor * ((floors + base) / 20);
			valor = math.ceil(columns) * valor;
			document.getElementById('totalCorporate').value = (15400 * parseInt(valor)) * 1.16;
			document.getElementById('totalHybrid').value = (15400 * parseInt(valor)) * 1.16;
		}*/


/*
if (optionGamaS == true) {
var nbElevators = document.getElementById('numElevReq').value;
document.getElementById('totalStandart').value = (7565 * parseInt(nbElevators)) * 1.1;
}
if (optionGamaP == true) {
valor = numCage;
document.getElementById('totalPremium').value = (12345 * parseInt(valor)) * 1.13;
}
if (optionGamaE == true) {
valor = ((floors / 20) / 1000)((floors / people) / 1000);
valor = Math.ceil(valor);
var columns = valor * ((floors + base) / 20);
valor = math.ceil(columns) * valor;
document.getElementById('totalCorporate').value = (15400 * parseInt(valor)) * 1.16;
document.getElementById('totalHybrid').value = (15400 * parseInt(valor)) * 1.16;
}
}*/