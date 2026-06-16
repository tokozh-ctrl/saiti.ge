let calcButton = document.getElementById("calcBtn");
let sizeSelect = document.getElementById("sizeSelect");
let colorSelect = document.getElementById("colorSelect");

// ჩეკბოქსები
let insulationCheck = document.getElementById("insulationCheck");
let windowsCheck = document.getElementById("windowsCheck");
let foundationCheck = document.getElementById("foundationCheck");
let interiorCheck = document.getElementById("interiorCheck");
let climatCheck = document.getElementById("climatCheck");
let bathroomCheck = document.getElementById("bathroomCheck");

let resultDiv = document.getElementById("result");

if (calcButton) {
    calcButton.addEventListener("click", function() {
        let chosenSize = sizeSelect.value;
        let chosenColor = colorSelect.value;
        
        let area = 0;
        let basePrice = 0;
        let description = "";

        if (chosenSize === "10") {
            area = 7.5; basePrice = 1200;
            description = "✔️ იდეალურია: მცირე დაცვის ჯიხურისთვის, მინი-ოფისისთვის ან იარაღების საცავისთვის.";
        } else if (chosenSize === "20") {
            area = 15; basePrice = 2500;
            description = "✔️ იდეალურია: მცირე აგარაკისთვის, კოტეჯისთვის, საოფისე სივრცისთვის ან კაფესთვის.";
        } else if (chosenSize === "40") {
            area = 30; basePrice = 5000;
            description = "✔️ იდეალურია: სრულფასოვანი საცხოვრებელი სახლისთვის (საძინებლით, მისაღებით და სველი წერტილით).";
        } else if (chosenSize === "40hc") {
            area = 30; basePrice = 5700;
            description = "✔️ იდეალურია: მაღალჭერიანი პრემიუმ საცხოვრებლისთვის, სადაც მეტი სივრცისა და კომფორტის შეგრძნებაა.";
        }

        let colorName = "";
        if (chosenColor === "anthracite") colorName = "ანტრაციტი (მუქი ნაცრისფერი)";
        else if (chosenColor === "black") colorName = "შავი მქრქალი";
        else if (chosenColor === "white") colorName = "თეთრი კლასიკური";
        else if (chosenColor === "wood") { basePrice += 400; colorName = "ხისფერი ეფექტი (პრემიუმი, +$400)"; }

        // ფასების მიმატება
        if (insulationCheck.checked) basePrice += 500;
        if (windowsCheck.checked) basePrice += 1200;
        if (foundationCheck.checked) basePrice += 800;
        if (interiorCheck.checked) basePrice += 1500;
        if (climatCheck.checked) basePrice += 600;
        if (bathroomCheck.checked) basePrice += 1100;

        // გამოსატანი ნეონური ტექსტი
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <span class="result-title">📊 გამოთვლის შედეგები:</span>
            <strong>📐 ფართობი:</strong> დაახლოებით ${area} კვ.მ.<br>
            <strong>🎨 არჩეული ფერი:</strong> ${colorName}<br>
            <strong>💰 ჯამური ფასი:</strong> <span class="result-price">$${basePrice.toLocaleString()}</span><br><br>
            <strong>🏡 შესაძლებლობა და დანიშნულება:</strong><br> ${description}
        `;
        
        setTimeout(() => {
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
    });
}
