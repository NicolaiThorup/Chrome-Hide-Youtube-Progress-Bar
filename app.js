chrome.storage.sync.get("active", function(data) {
  if(typeof data.active == 'undefined' || data.active=='on'){
    removeElementsByClass('video-time');
    removeElementsByClass('ytp-progress-bar-container')
    removeElementsByClass('ytp-time-duration')
    removeElementsByClass('ytp-time-separator')
}
});


function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
