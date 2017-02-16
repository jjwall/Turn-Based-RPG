$(document).ready(function() {

	var health = {
		warrior: 200,
		mage: 180,
		thief: 150,
		cleric: 120
	}

	//on mouse rollover at start it shows the stats of the character? I like it

	var fightingWarrior = false;

	var fightingMage = false;

	var fightingThief = false;

	var fightingCleric = false;

	var attackingWarrior = false;

	var attackingMage = false;

	var attackingThief = false;

	var attackingCleric = false;

	var warriorStore = false;

	var mageStore = false;

	var thiefStore = false;

	var clericStore = false;
	//character select screen set up
	$('#char_select1').append("Warrior");
	$('#char_select1').append('<img src="assets/images/warrior.png" height="150px">');
	$('#char_select1').append(health.warrior);
	$('#char_select2').append("Mage");
	$('#char_select2').append('<img src="assets/images/mage.png" height="150px">');
	$('#char_select2').append(health.mage);
	$('#char_select3').append("Thief");
	$('#char_select3').append('<img src="assets/images/thief.png" height="150px">');
	$('#char_select3').append(health.thief);
	$('#char_select4').append("Cleric");
	$('#char_select4').append('<img src="assets/images/cleric.png" height="150px">');
	$('#char_select4').append(health.cleric);

	//css for character selct screen
	$('#char_select1').css('background', 'white').css('border', "solid 2px green").css('width', '125px');
	$('#char_select2').css('background', 'white').css('border', "solid 2px green").css('width', '150px');
	$('#char_select3').css('background', 'white').css('border', "solid 2px green").css('width', '100px');
	$('#char_select4').css('background', 'white').css('border', "solid 2px green").css('width', '110px');

	
	//if character chosen is warrior
	$("#char_select1").one("click", function(){
		warriorStore = true;
		fightingMage = true;
		fightingThief = true;
		fightingCleric = true;
		$('#char_select2').remove();
		$('#char_select3').remove();
		$('#char_select4').remove();

		$('#target1').append("Mage");
		$('#target1').append('<img src="assets/images/mage.png" height="150px">');
		$('#target1').append(health.mage);
		$('#target2').append("Thief");
		$('#target2').append('<img src="assets/images/thief.png" height="150px">');
		$('#target2').append(health.thief);
		$('#target3').append("Cleric");
		$('#target3').append('<img src="assets/images/cleric.png" height="150px">');
		$('#target3').append(health.cleric);

		$('#target1').css('background', 'white').css('border', "solid 2px orange").css('width', '150px');
		$('#target2').css('background', 'white').css('border', "solid 2px orange").css('width', '100px');
		$('#target3').css('background', 'white').css('border', "solid 2px orange").css('width', '110px');

		});

$('#target1').bind("click", fight1);
$('#target2').bind("click", fight2);
/*$('#target3').bind("click", fight3);*/
$('#attack_btn').bind("click", attackFunc);

// can only fight mage or warrior in fight1
// can only fight thief or mage in fight2
// can only fight thief or cleric in fight3

function fight1 (e) {
	if (warriorStore === true && fightingMage === true) {
		$('#target1').remove();
		$('#target2').css('left', '0px');
		$('#target3').css('left', '125px');
		$('#fight').append("Mage");
		$('#fight').append('<img src="assets/images/mage.png" height="150px">');
		$('#fight').append(health.mage);
		$('#fight').css('background', 'white').css('border', "solid 2px red").css('width', '150px');
		attackingMage = true;
	}
	else if (fightingWarrior === true) {
		alert("warrior");
	}
	fightingWarrior = false;
	fightingMage = false;
	fightingThief = false;
	fightingCleric = false;
}

function fight2 (e) {
	if (warriorStore === true && fightingThief === true) {
		$('#target2').remove();
		$('#target3').css('left', '175px')
		$('#fight').append("Thief");
		$('#fight').append('<img src="assets/images/thief.png" height="150px">');
		$('#fight').append(health.thief);
		$('#fight').css('background', 'white').css('border', "solid 2px red").css('width', '100px');
		attackingThief = true;
	}
	else if (thiefStore === true && fightingMage === true) {
		alert("mage");
		$('#target1').remove();
		$('#target2').css('left', '0px');
		$('#target3').css('left', '125px');
		$('#fight').append("Mage");
		$('#fight').append('<img src="assets/images/mage.png" height="150px">');
		$('#fight').append(health.mage);
		$('#fight').css('background', 'white').css('border', "solid 2px red").css('width', '150px');
	}
	fightingWarrior = false;
	fightingMage = false;
	fightingThief = false;
	fightingCleric = false;
}

/*function fight3 (e) {
	fightingMage = true;
} come to this later */

function attackFunc (e) {
	if (attackingWarrior === false && attackingMage === false && attackingThief === false && attackingCleric === false) {
		alert("There is nothing to attack!");
	}
	else if (attackingMage === true) {
		alert("fire ball that man");
		}
	else if (attackingThief === true) {
		alert("pick pocked iz azz");
	}
	}

/*
$('#target1').one("click", function(){
	fightingMage = true;
	fightCheck();
	$('#target1').remove();
	$('#target2').css('left', '0px');
	$('#target3').css('left', '125px');
	$('#fight').append("Mage");
	$('#fight').append('<img src="assets/images/mage.png" height="150px">');
	$('#fight').append(health.mage);
	$('#fight').css('background', 'white').css('border', "solid 2px red").css('width', '150px');
});

$('#target2').one("click", function(){
	fightingThief = true;
	fightCheck();
	$('#target2').remove();
	$('#target3').css('left', '175px')
	$('#fight').append("Thief");
	$('#fight').append('<img src="assets/images/thief.png" height="150px">');
	$('#fight').append(health.thief);
	$('#fight').css('background', 'white').css('border', "solid 2px red").css('width', '100px');

});

var x = 0;
$('#target3').on("click", function(){
	fightingMage = false;
	fightCheck();
});*/


})