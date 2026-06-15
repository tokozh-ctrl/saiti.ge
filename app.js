// ვიპოვოთ ღილაკი, სელექტორები, ჩეკბოქსები და შედეგის ადგილი
let calcButton = document.getElementById("calcBtn");
let sizeSelect = document.getElementById("sizeSelect");
let colorSelect = document.getElementById("colorSelect");
let insulationCheck = document.getElementById("insulationCheck");
let windowsCheck = document.getElementById("windowsCheck");
let foundationCheck = document.getElementById("foundationCheck");
let resultDiv = document.getElementById("result");

// კოდი, რომელიც ამოქმედდება ღილაკზე დაჭერისას
calcButton.addEventListener("click", function() {
    let chosenSize = sizeSelect.value;
    let chosenColor = colorSelect.value;
    
    // ცვლადები ინფორმაციის შესანახად
    let area = 0;
    let basePrice = 0;
    let description = "";

    // 1. ფართობის და ბაზისური ფასის გამოთვლა ზომის მიხედვით
    if (chosenSize === "10") {
        area = 7.5;
        basePrice = 1200;
        description = "✔️ იდეალურია: მცირე დაცვის ჯიხურისთვის, მინი-ოფისისთვის ან იარაღების საცავისთვის.";
    } else if (chosenSize === "20") {
        area = 15;
        basePrice = 2500;
        description = "✔️ იდეალურია: მცირე აგარაკისთვის, კოტეჯისთვის, საოფისე სივრცისთვის ან კაფესთვის.";
    } else if (chosenSize === "40") {
        area = 30;
        basePrice = 5000;
        description = "✔️ იდეალურია: სრულფასოვანი საცხოვრებელი სახლისთვის (საძინებლით, მისაღებით და სველი წერტილით).";
    } else if (chosenSize === "40hc") {
        area = 30;
        basePrice = 5700;
        description = "✔️ იდეალურია: მაღალჭერიანი პრემიუმ საცხოვრებლისთვის, სადაც მეტი სივრცისა და კომფორტის შეგრძნებაა.";
    }

    // 2. ფერის დასახელება და ფასის მიმატება (ხისფერი ეფექტი პრემიუმია და ემატება $400)
    let colorName = "";
    if (chosenColor === "anthracite") {
        colorName = "ანტრაციტი (მუქი ნაცრისფერი)";
    } else if (chosenColor === "black") {
        colorName = "შავი მქრქალი";
    } else if (chosenColor === "white") {
        colorName = "თეთრი კლასიკური";
    } else if (chosenColor === "wood") {
        basePrice += 400;
        colorName = "ხისფერი ეფექტი (პრემიუმი, +$400)";
    }

    // 3. ჩეკბოქსების შემოწმება და ფასის მიმატება
    if (insulationCheck.checked) {
        basePrice += 500;
    }
    if (windowsCheck.checked) {
        basePrice += 1200;
    }
    if (foundationCheck.checked) {
        basePrice += 800;
    }

    // პასუხის გამოტანა ვებგვერდზე
    resultDiv.style.display = "block"; // ვაჩენთ დამალულ ბლოკს
    resultDiv.innerHTML = `
        <strong style="color:#17252a; font-size:18px;">📊 გამოთვლის შედეგები:</strong><br><br>
        <strong>📐 ფართობი:</strong> დაახლოებით ${area} კვ.მ.<br>
        <strong>🎨 არჩეული ფერი:</strong> ${colorName}<br>
        <strong>💰 სავარაუდო ჯამური ფასი:</strong> $${basePrice.toLocaleString()}<br><br>
        <strong>🏡 შესაძლებლობა და დანიშნულება:</strong><br> ${description}
    `;

    // ეკრანის ავტომატური ჩამოწევა შედეგზე
    resultDiv.scrollIntoView({ behavior: 'smooth' });
});
