const wrapper = document.getElementById('scroll-wrapper');
const containerWidth = 600;
const iconNormalSize = 50;
const iconLargeSize = 65;
const gap = 20;

// Duplicate icons for smooth infinite scroll
wrapper.innerHTML += wrapper.innerHTML;

let posX = 0;
const speed = 1; // pixels per frame

function animate() {
  posX -= speed;
  if (posX <= -wrapper.scrollWidth / 2) {
    posX = 0;
  }
  wrapper.style.transform = `translateX(${posX}px) translateY(-50%)`;

  // Calculate center position of container
  const containerCenter = containerWidth / 2;

  // For each icon, check distance from container center and scale accordingly
  const icons = wrapper.querySelectorAll('img');
  icons.forEach(icon => {
    const iconRect = icon.getBoundingClientRect();
    const iconCenter = iconRect.left + iconRect.width / 2;
    const dist = Math.abs(containerCenter - iconCenter);

    // Scale based on distance: if within 50px of center, scale up
    if (dist < 50) {
      icon.style.width = `${iconLargeSize}px`;
      icon.style.height = `${iconLargeSize}px`;
    } else {
      icon.style.width = `${iconNormalSize}px`;
      icon.style.height = `${iconNormalSize}px`;
    }
  });

  requestAnimationFrame(animate);
}

animate();
