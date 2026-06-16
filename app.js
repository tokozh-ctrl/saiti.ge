// გლობალური ცვლადები შერჩეული კონტეინერის მონაცემების შესანახად
let currentSize = '10';
let currentBasePrice = 1200;
let currentColorCode = '#b03a2e';
let currentColorName = 'წითელი კლასიკური';

// ფუნქცია, რომელიც იხსნება კონტეინერზე კლიკისას
function openConfigurator(size, defaultColorName, defaultColorCode) {
    currentSize = size;
    currentColorCode = defaultColorCode;
    currentColorName = defaultColorName;

    // განვსაზღვროთ საბაზისო ფასი ზომის მიხედვით
    if (size === "10") { currentBasePrice = 1200; document.getElementById('preview-title').innerText = "10 ფუტიანი კონტეინერი"; }
    else if (size === "20") { currentBasePrice = 2500; document.getElementById('preview-title').innerText = "20 ფუტიანი კონტეინერი"; }
    else if (size === "40") { currentBasePrice = 5000; document.getElementById('preview-title').innerText = "40 ფუტიანი კონტეინერი"; }
    else if (size === "40hc") { currentBasePrice = 5700; document.getElementById('preview-title').innerText = "40 HC კონტეინერი"; }

    // ჩავრთოთ გვერდების გადართვის იმიტაცია (ჰაიდ/შოუ)
    document.getElementById('main-view').style.display = 'none';
    document.getElementById('configurator-view').style.display = 'block';

    // ჩავტვირთოთ საწყისი ვიზუალი და ფასი
    changeLiveColor(currentColorCode, currentColorName);
    resetCheckboxes();
    updateLivePrice();
}

// უკან დაბრუნება მთავარ გვერდზე
function backToMain() {
    document.getElementById('configurator-view').style.display = 'none';
    document.getElementById('main-view').style.display = 'block';
}

// ფერის ლაივ შეცვლა პრევიუ ბლოკში
function changeLiveColor(colorCode, colorName) {
    currentColorCode = colorCode;
    currentColorName = colorName;
    
    // ვცვლით ბლოკის ფონს რეალურ დროში
    const previewBox = document.getElementById('preview-box');
    if (previewBox) {
        previewBox.style.backgroundColor = colorCode;
    }
    
    // ვცვლით ტექსტს
    document.getElementById('current-color-name').innerText = colorName;
}

// ჩეკბოქსების განულება ახალი კონტეინერის არჩევისას
function resetCheckboxes() {
    document.getElementById('insulation').checked = false;
    document.getElementById('windows').checked = false;
    document.getElementById('foundation').checked = false;
    document.getElementById('roofing').checked = false;
    document.getElementById('electrical').checked = false;
}

// ფასის ლაივ კალკულაცია კომპონენტების მიხედვით
function updateLivePrice() {
    let totalPrice = currentBasePrice;

    if (document.getElementById('insulation').checked) totalPrice += 500;
    if (document.getElementById('windows').checked) totalPrice += 1200;
    if (document.getElementById('foundation').checked) totalPrice += 800;
    if (document.getElementById('roofing').checked) totalPrice += 950;
    if (document.getElementById('electrical').checked) totalPrice += 450;

    // გამოვსახოთ ფასი
    document.getElementById('live-total-price').innerText = `$${totalPrice.toLocaleString()}`;
}

// შეკვეთის ღილაკი
function orderContainer() {
    alert(`მადლობა! თქვენ აირჩიეთ ${currentSize} ფუტიანი კონტეინერი ფერით: "${currentColorName}". დეტალების დასაზუსტებლად დაგვიკავშირდით ნომერზე: 557 666 211`);
}
