$(document).ready(function() {

	var health = {
		warrior: 200,
		mage: 180,
		thief: 150,
		cleric: 120
	}

	//on mouse rollover at start it shows the stats of the character? I like it

	var enemies = 3;

	var warDmg = 2;

	var fightingWarrior = false;

	var fightingMage = false;

	var fightingThief = false;

	var fightingCleric = false;

	var attackingWarrior = false;

	var attackingMage = false;

	var attackingThief = false;

	var attackingCleric = false;

	var warriorDead = false;

	var mageDead = false;

	var thiefDead = false;

	var clericDead = false;

	var warriorStore = false;

	var mageStore = false;

	var thiefStore = false;

	var clericStore = false;

	var char1 = $('#char_select1');

	var char2 = $('#char_select2');

	var char3 = $('#char_select3');

	var char4 = $('#char_select4');

	var target1 = $('#target1');

	var target2 = $('#target2');

	var target3 = $('#target3');

	var fight = $('#fight');
	//character select screen set up
	char1.append("Warrior");
	char1.append('<img src="assets/images/warrior.png" height="150px">');
	char1.append(health.warrior);
	char2.append("Mage");
	char2.append('<img src="assets/images/mage.png" height="150px">');
	char2.append(health.mage);
	char3.append("Thief");
	char3.append('<img src="assets/images/thief.png" height="150px">');
	char3.append(health.thief);
	char4.append("Cleric");
	char4.append('<img src="assets/images/cleric.png" height="150px">');
	char4.append(health.cleric);

	//css for character select screen
	char1.css('background', 'white').css('border', "solid 2px green").css('width', '115px');
	char2.css('background', 'white').css('border', "solid 2px green").css('width', '150px');
	char3.css('background', 'white').css('border', "solid 2px green").css('width', '95px');
	char4.css('background', 'white').css('border', "solid 2px green").css('width', '105px');
	//widths have all been tested for each char, health can lower w/ no awkward appendages
	
	//if character chosen is warrior
	char1.one("click", function(){
		warriorStore = true;
		fightingMage = true;
		fightingThief = true;
		fightingCleric = true;
		char2.remove();
		char3.remove();
		char4.remove();

		target1.append("Mage");
		target1.append('<img src="assets/images/mage.png" height="150px">');
		target1.append(health.mage);
		target2.append("Thief");
		target2.append('<img src="assets/images/thief.png" height="150px">');
		target2.append(health.thief);
		target3.append("Cleric");
		target3.append('<img src="assets/images/cleric.png" height="150px">');
		target3.append(health.cleric);
		//css width properties will need to be changed from style.css to .css here

		target1.css('background', 'white').css('border', "solid 2px orange").css('width', '150px');
		target2.css('background', 'white').css('border', "solid 2px orange").css('width', '95px');
		target3.css('background', 'white').css('border', "solid 2px orange").css('width', '105px');

		});

target1.bind("click", fight1);
target2.bind("click", fight2);
target3.bind("click", fight3);
$('#attack_btn').bind("click", attackFunc);

// can only fight mage or warrior in fight1
// can only fight thief or mage in fight2
// can only fight thief or cleric in fight3

function fight1 (e) {
	if (warriorStore === true && fightingMage === true) {
		target1.remove();
		target2.css('left', '10px');
		target3.css('left', '135px');
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '150px');
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
		target2.remove();
		fight.append("Thief");
		fight.append('<img src="assets/images/thief.png" height="150px">');
		fight.append(health.thief);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '95px');
		attackingThief = true;
		cssCheck();
		// look below at cssCheck for further guidance
	}
	else if (thiefStore === true && fightingMage === true) {
		target1.remove();
		target2.css('left', '0px');
		target3.css('left', '125px');
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '150px');
		attackingMage = true;
	}
	fightingWarrior = false;
	fightingMage = false;
	fightingThief = false;
	fightingCleric = false;
}

function fight3 (e) {
	if (warriorStore === true && fightingCleric === true) {
		target3.remove();
		fight.append("Cleric");
		fight.append('<img src="assets/images/cleric.png" height="150px">');
		fight.append(health.thief);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '110px');
		attackingCleric = true;
	}
	fightingWarrior = false;
	fightingMage = false;
	fightingThief = false;
	fightingCleric = false;
}


function attackFunc (e) {
	if (attackingWarrior === false && attackingMage === false && attackingThief === false && attackingCleric === false) {
		$("#text1").text("There is nothing to attack!");
		$("#text2").text("");
	}
	else if (attackingMage && warriorStore) {
		health.warrior -= 25;
		warDmg = warDmg+6
		health.mage -= warDmg;
		char1.empty();
		char1.append("Warrior");
		char1.append('<img src="assets/images/warrior.png" height="150px">');
		char1.append(health.warrior);
		fight.empty();
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		$("#text1").text("Warrior attacked for "+ warDmg + " damage.")
		$("#text2").text("Mage counter-attacked for 25 damage.")
		//health needs to be dynamic, i.e. attack increases for warrior
		//mage attack stays constant?
		//need to append message that tells you attack stuff etc.
		}
	else if (attackingThief && warriorStore) {
		health.warrior -= 12;
		warDmg = warDmg+6
		health.thief -= warDmg;
		char1.empty();
		char1.append("Warrior");
		char1.append('<img src="assets/images/warrior.png" height="150px">');
		char1.append(health.warrior);
		fight.empty();
		fight.append("Thief");
		fight.append('<img src="assets/images/thief.png" height="150px">');
		fight.append(health.thief);
		$("#text1").text("Warrior attacked for " + warDmg + " damage.")
		$("#text2").text("Thief counter-attacked for 12 damage.")
	}
	else if (attackingCleric && warriorStore) {
		health.warrior -= 5;
		warDmg = warDmg+6
		health.cleric -= warDmg;
		char1.empty();
		char1.append("Warrior");
		char1.append('<img src="assets/images/warrior.png" height="150px">');
		char1.append(health.warrior);
		fight.empty();
		fight.append("Cleric");
		fight.append('<img src="assets/images/cleric.png" height="150px">');
		fight.append(health.cleric);
		$("#text1").text("Warrior attacked for " + warDmg + " damage.")
		$("#text2").text("Cleric counter-attacked for 5 damage.")
	}
	deadCheck();
}

function deadCheck () {
	if (health.mage <= 0 && attackingMage){
		fight.empty().css('border', "solid 2px lightgrey");
		attackingMage = false;
		mageDead = true;
		enemies--;
		$("#text1").text("Warrior defeated the Mage!");
		$("#text2").text("");
		fightsTrue();
	}
	if (health.thief <= 0 && attackingThief){
		fight.empty().css('border', "solid 2px lightgrey");
		attackingThief = false;
		thiefDead = true;
		enemies--;
		$("#text1").text("Warrior defeated the Thief!");
		$("#text2").text("");
		fightsTrue();
	}
	if (health.cleric <= 0 && attackingCleric){
		fight.empty().css('border', "solid 2px lightgrey");
		attackingCleric = false;
		clericDead = true;
		enemies--;
		$("#text1").text("Warrior defeated the Cleric!");
		$("#text2").text("");
		fightsTrue();
	}
}

function fightsTrue () {
	fightingWarrior = true;
	fightingMage = true;
	fightingThief = true;
	fightingCleric = true;
	if (enemies === 0) {
		setTimeout(function(){ alert("You Win!");
		location.reload();}, 500);
	}
	else if ((warriorStore) && (health.warrior <= 0)) {
		setTimeout(function(){ alert("You lose!");
		location.reload();}, 500);
	}
}

function cssCheck () {
	//this works, not sure how many times this is needed,
	// maybe 4? just for all target 3s?
	if (mageDead && thiefDead || mageDead && attackingThief) {
		target3.css('left', '10px');
	}
	else {
		target3.css('left', '175px');
	}
}

// only would have do a deadCheck function for target3
// so when Warrior is selected Char, will need to do a deadCheck on mage and on
// thief to ensure that Cleric gets cssed all the way to left if last one standing
/*function deadCheck (e) {
	if (mageDead && ThiefDead) {
		target3.css('left', '10px')
	}
}*/


})