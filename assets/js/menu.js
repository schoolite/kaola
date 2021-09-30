/*
!!!!!
This code is created to display element's behavior. I'm not a JS expert so don't use it
!!!!!
*/


(function(){
  'use strict';

  class menr {
    constructor(settings) {
      this.menrRootNode = settings.menrRootNode;
      this.isOpened = false;
    }
    
    changemenrState(menrState) {
      return this.isOpened = !menrState;
    }
    
    changeToggleHint(toggleHint, toggleNode) {
      toggleNode.textContent = toggleHint;
      return toggleHint; 
    }
  }

  const menrClassesNames = {
    rootClass: 'menr',
    activeClass: 'menr_activated',
    toggleClass: 'menr__toggle',
    toggleHintClass: 'menr__toggle-hint'
  }
  
  const jsmenrNode = document.querySelector(`.${menrClassesNames.rootClass}`);
  const demomenr = new menr ({
    menrRootNode: jsmenrNode
  });
  
  function getCurrentToggleHint(currentmenrState) {
    return (currentmenrState !== true) ? 'Open menu' : 'Close menu';
  }
  
  function togglemenr(event) {
    
      let currentmenrState = demomenr.changemenrState(demomenr.isOpened);
      let toggleHint = getCurrentToggleHint(currentmenrState);
      
      demomenr.changeToggleHint(
        toggleHint, 
        demomenr.menrRootNode.querySelector(`.${menrClassesNames.toggleHintClass}`)
      );
      demomenr.menrRootNode.classList.toggle(`${menrClassesNames.activeClass}`);
      
      return currentmenrState;  
  }
  
  jsmenrNode.querySelector(`.${menrClassesNames.toggleClass}`).addEventListener('click', togglemenr);
})();