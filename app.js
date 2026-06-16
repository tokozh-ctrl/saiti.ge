// ========================================================
// 1. 3D ბიბლიოთეკის (Three.js) და ფონის ავტომატური ჩატვირთვა
// ========================================================
const canvasContainer = document.createElement('div');
canvasContainer.id = 'canvas-container';
document.body.insertBefore(canvasContainer, document.body.firstChild);

const threeScript = document.createElement('script');
threeScript.src = "https://cloudflare.com";
document.head.appendChild(threeScript);

threeScript.onload = function() {
    init3DSpace();
};

// ========================================================
// 2. თქვენი კალკულატორის ფუნქციონალი
// ========================================================
let calcButton = document.getElementById("calcBtn");
let sizeSelect = document.getElementById("sizeSelect");
let colorSelect = document.getElementById("colorSelect");
let insulationCheck = document.getElementById("insulationCheck");
let windowsCheck = document.getElementById("windowsCheck");
let foundationCheck = document.getElementById("foundationCheck");
let resultDiv = document.getElementById("result");

if (calcButton) {
    calcButton.addEventListener("click", function() {
        let chosenSize = sizeSelect.value;
        let chosenColor = colorSelect.value;
        
        let area = 0;
        let basePrice = 0;
        let description = "";

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

        if (insulationCheck.checked) basePrice += 500;
        if (windowsCheck.checked) basePrice += 1200;
        if (foundationCheck.checked) basePrice += 800;

        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <strong style="color:#17252a; font-size:18px;">📊 გამოთვლის შედეგები:</strong><br><br>
            <strong>📐 ფართობი:</strong> დაახლოებით ${area} კვ.მ.<br>
            <strong>🎨 არჩეული ფერი:</strong> ${colorName}<br>
            <strong>💰 სავარაუდო ჯამური ფასი:</strong> $${basePrice.toLocaleString()}<br><br>
            <strong>🏡 შესაძლებლობა და დანიშნულება:</strong><br> ${description}
        `;

        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
}

// ========================================================
// 3. 3D კოსმოსური კონტეინერების ანიმაცია
// ========================================================
function init3DSpace() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050512); 

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // განათება
    const ambientLight = new THREE.AmbientLight(0x444466, 1.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(10, 15, 10);
    scene.add(directionalLight);

    // ვარსკვლავები
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 1200;
    const starPositions = new Float32Array(starsCount * 3);
    for(let i = 0; i < starsCount * 3; i++) {
        starPositions[i] = (Math.random() - 0.5) * 120;
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.12 });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // კონტეინერების ბლოკები
    const geometry = new THREE.BoxGeometry(3.2, 1.3, 1.3);
    const containers = [];
    const colors = [0x1a5276, 0xb03a2e, 0x1e8449, 0xd35400, 0xf1c40f, 0x7d3c98]; // მკვეთრი ფერები

    for (let i = 0; i < 18; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const material = new THREE.MeshStandardMaterial({ 
            color: randomColor,
            roughness: 0.3,
            metalness: 0.4
        });
        
        const containerMesh = new THREE.Mesh(geometry, material);
        containerMesh.position.x = (Math.random() - 0.5) * 35;
        containerMesh.position.y = (Math.random() - 0.5) * 15;
        containerMesh.position.z = (Math.random() - 0.5) * 20 - 5;
        containerMesh.rotation.set(Math.random() * 5, Math.random() * 5, 0);

        containerMesh.userData = {
            rotSpeedX: (Math.random() - 0.5) * 0.006,
            rotSpeedY: (Math.random() - 0.5) * 0.009,
            waveSeed: Math.random() * 100
        };
        
        scene.add(containerMesh);
        containers.push(containerMesh);
    }

    camera.position.z = 16;
    let clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime();
        
        starField.rotation.y = time * 0.015;

        containers.forEach((box) => {
            box.rotation.x += box.userData.rotSpeedX;
            box.rotation.y += box.userData.rotSpeedY;
            
            // ტალღოვანი მოძრაობა (სინუსოიდური)
            box.position.y += Math.sin(time + box.userData.waveSeed) * 0.012;
            box.position.x += Math.cos(time * 0.4 + box.userData.waveSeed) * 0.008;
            
            if (box.position.x > 28) box.position.x = -28;
            if (box.position.x < -28) box.position.x = 28;
        });

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

