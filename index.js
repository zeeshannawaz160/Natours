/*// CODELAB: Register service worker.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
          .then((reg) => {
            console.log('Service worker registered.', reg);
          });
    });
  } */


/******************************************************************************/

window.addEventListener('load', () => {
     registerSW();
});

async function registerSW() {
    if('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./service-worker.js');
        } catch (e) {
            console.log('Service Worker registration failed');
        }

    }
}