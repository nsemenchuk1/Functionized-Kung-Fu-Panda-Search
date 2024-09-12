// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    displayCharacter("Po", "img/po.png", "Buddy, I am the Dragon Warrior");
  } else if (name === "tigress" || name === "master tigress") {
    displayCharacter(
      "Master Tigress",
      "img/tigress.png",
      "That was pretty hardcore!"
    );
  } else if (name === "mantis" || name === "master mantis") {
    displayCharacter("Master Mantis", "img/mantis.png", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    displayCharacter("Master Monkey", "img/monkey.png", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    displayCharacter(
      "Master Crane",
      "img/crane.png",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    displayCharacter(
      "Master Viper",
      "img/viper.png",
      "I don't need to bite to fight!"
    );
  } else if (name === "shifu" || name === "master shifu") {
    displayCharacter(
      "Master Shifu",
      "img/shifu.png",
      "There is now a level Zero."
    );
  } else if (name === "ping" || name === "mr. ping") {
    displayCharacter(
      "Mr. Ping",
      "img/mr-ping.png",
      "We are noodle folk, broth runs through our veins!"
    );
  } else {
    displayCharacter("?????", "img/question-mark.png", "Character Not Found");
  }
}

// Character Display Function
function displayCharacter(name, img, quote) {
  document.getElementById("character-name").innerHTML = name;
  document.getElementById("main-img").src = img;
  document.getElementById("quote").innerHTML = quote;
}
