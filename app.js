// ვიპოვოთ ღილაკი, სელექციონერი და შედეგის ადგილი
let calcButton = document.getElementById("calcBtn");
let sizeSelect = document.getElementById("sizeSelect");
let resultDiv = document.getElementById("result");

// კოდი, რომელიც ამოქმედდება ღილაკზე დაჭერისას
calcButton.addEventListener("click", function() {
    let chosenSize = sizeSelect.value; // ვიგებთ რომელი ზომა აირჩია
    
    // ცვლადები ინფორმაციის შესანახად
    let area = 0;
    let price = "";
    let description = "";

    // ლოგიკური შემოწმება (if / else)
    if (chosenSize === "20") {
        area = 15; // კვადრატული მეტრი
        price = "$2,000 - $3,500";
        description = "✔️ იდეალურია: მცირე აგარაკისთვის, კოტეჯისთვის, ოფისისთვის ან კაფესთვის.";
    } else if (chosenSize === "40") {
        area = 30; // კვადრატული მეტრი
        price = "$4,000 - $6,000";
        description = "✔️ იდეალურია: სრულფასოვანი საცხოვრებელი სახლისთვის (საძინებლით, მისაღებით და სველი წერტილით).";
    }

    // პასუხის გამოტანა ვებგვერდზე
    resultDiv.style.display = "block"; // ვაჩენთ დამალულ ბლოკს
    resultDiv.innerHTML = `
        <strong>📐 ფართობი:</strong> დაახლოებით ${area} კვ.მ.<br>
        <strong>💰 კონტეინერის ფასი:</strong> ${price}<br><br>
        <strong>🏡 შესაძლებლობა:</strong><br> ${description}
    `;
});
