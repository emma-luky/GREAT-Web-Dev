document
  .getElementById("madLibsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const word1 = document.querySelector(".word1").value;
    const word2 = document.querySelector(".word2").value;
    const word3 = document.querySelector(".word3").value;
    const word4 = document.querySelector(".word4").value;
    const word5 = document.querySelector(".word5").value;
    const word6 = document.querySelector(".word6").value;
    const word7 = document.querySelector(".word7").value;
    const word8 = document.querySelector(".word8").value;
    const word9 = document.querySelector(".word9").value;
    const word10 = document.querySelector(".word10").value;
    const word11 = document.querySelector(".word11").value;
    const word12 = document.querySelector(".word12").value;

    // Create the Mad Libs paragraph
    const madLibsParagraph = `A ${word1} is on a hunt for a ${word2} deep in the
     ${word3} forest. The forest is ${word4} and ${word5}. A ${word6} gets stuck in the
     ${word7}. ${word8}, a ${word9} trys to escape by ${word10}. Unfortunetly, ${word11}
     dies and ${word12} rein supreme.`;

    // Display the paragraph
    const resultParagraph = document.getElementById("madLibsResult");
    resultParagraph.style.display = "block";
    resultParagraph.textContent = madLibsParagraph;
  });

document
  .getElementById("madLibsForm2")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const word13 = document.querySelector(".word13").value;
    const word14 = document.querySelector(".word14").value;
    const word15 = document.querySelector(".word15").value;
    const word16 = document.querySelector(".word16").value;
    const word17 = document.querySelector(".word17").value;
    const word18 = document.querySelector(".word18").value;
    const word19 = document.querySelector(".word19").value;
    const word20 = document.querySelector(".word20").value;
    const word21 = document.querySelector(".word21").value;
    const word22 = document.querySelector(".word22").value;
    const word23 = document.querySelector(".word23").value;
    const word24 = document.querySelector(".word24").value;
    const word25 = document.querySelector(".word25").value;
    const word26 = document.querySelector(".word26").value;
    const word27 = document.querySelector(".word27").value;
    const word28 = document.querySelector(".word28").value;
    const word29 = document.querySelector(".word29").value;
    const word30 = document.querySelector(".word30").value;
    const word31 = document.querySelector(".word31").value;

    // Create the Mad Libs paragraph
    const madLibsParagraph2 = `If you give a ${word13} a ${word14}, they are going to ask for a
     ${word15}. When you give them the ${word15}, they will want to ${word16}. When they
     are finished, they will ${word17}. Then they will ${word18} and ${word19} to the ${word20}.
     Since that doesn't work out, they will want to go to ${word21}. On the way, they will
     see a ${word22} and will want a ${word23}. Then you will have to take them to the ${word24}.
     When they are done, they will ${word25}. They will ask you for some ${word26}. On the way home
     they will start a game of ${word27}. When you finally get home, you'll have to ${word28}. Then
     they will want a ${word29}. You'll have to find ${word30} and ${word31}.`;

    // Display the paragraph
    const resultParagraph = document.getElementById("madLibsResult2");
    resultParagraph.style.display = "block";
    resultParagraph.textContent = madLibsParagraph2;
  });

document
  .getElementById("madLibsForm3")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const word32 = document.querySelector(".word32").value;
    const word33 = document.querySelector(".word33").value;
    const word34 = document.querySelector(".word34").value;
    const word35 = document.querySelector(".word35").value;
    const word36 = document.querySelector(".word36").value;
    const word37 = document.querySelector(".word37").value;
    const word38 = document.querySelector(".word38").value;
    const word39 = document.querySelector(".word39").value;
    const word40 = document.querySelector(".word40").value;

    // Create the Mad Libs paragraph
    const madLibsParagraph = `Every summer I go to Camp ${word32}! It is a ${word33} camp
     because of all the ${word34} things you get to do ! During the day we get to ${word35}
     in the lake, hike through the ${word36}, and play with the ${word37}! Then at night,
     we roast ${word38} over the ${word39}, and tell ${word40} stories!`;

    // Display the paragraph
    const resultParagraph = document.getElementById("madLibsResult3");
    resultParagraph.style.display = "block";
    resultParagraph.textContent = madLibsParagraph;
  });
