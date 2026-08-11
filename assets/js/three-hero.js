/* ============================================================
   InfoVibe — 3D Hero (Three.js, loaded from CDN)
   Lightweight interactive 3D scene: floating gradient geometry
   that reacts to the mouse. Falls back gracefully if WebGL fails.
   ============================================================ */
(function () {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  let THREE;
  function fail() {
    canvas.style.display = "none";
    const fallback = document.querySelector("[data-hero-fallback]");
    if (fallback) fallback.style.display = "grid";
  }

  // Load Three.js from CDN
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
  script.onload = init;
  script.onerror = fail;
  document.head.appendChild(script);

  function init() {
    THREE = window.THREE;
    if (!THREE) return fail();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    // Icosahedron wireframe core
    const geo = new THREE.IcosahedronGeometry(1.5, 1);
    const mat = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true, transparent: true, opacity: 0.9 });
    const core = new THREE.Mesh(geo, mat);
    group.add(core);

    // Outer points
    const ptsGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const ptsMat = new THREE.PointsMaterial({ color: 0x06b6d4, size: 0.08 });
    const points = new THREE.Points(ptsGeo, ptsMat);
    group.add(points);

    // Torus ring
    const ringGeo = new THREE.TorusGeometry(2.6, 0.03, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xec4899, transparent: true, opacity: 0.7 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    group.add(ring);

    let mx = 0, my = 0;
    window.addEventListener("mousemove", (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 0.6;
      my = (e.clientY / window.innerHeight - 0.5) * 0.6;
    });

    function animate() {
      requestAnimationFrame(animate);
      group.rotation.y += 0.004;
      group.rotation.x += 0.002;
      group.rotation.y += (mx - group.rotation.y * 0) * 0.02;
      group.rotation.x += my * 0.02;
      ring.rotation.z += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }
})();
