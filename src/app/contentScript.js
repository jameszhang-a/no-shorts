(() => {
  const observer = new MutationObserver(mutations => {
    // fired when a mutation occurs
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length > 0 && mutation?.target?.id === 'items') {
        // if a new video is added to the page, check if it is a short video
        mutation.addedNodes.forEach(node => {
          if (node.nodeName === 'YTD-GRID-VIDEO-RENDERER') {
            const videoLink = node.querySelector('#thumbnail').getAttribute('href');
            if (videoLink.includes('short')) {
              // hides the short video from the page
              node.style.display = 'none';
            }
          }
        });
      }
    });
  });

  // define what element should be observed by the observer
  // and what types of mutations trigger the callback
  observer.observe(document, {
    subtree: true,
    attributes: true,
    childList: true,
  });
})();
