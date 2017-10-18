class SweetSelector {
  static select(el){
    return document.querySelector(el)
  }
}

class DOM {
  static hide(el){
    return document.querySelector(el).style="display:none";
  }
  static show(el){
    return document.querySelector(el).style="display:show";;
  }
  static removeClass(el,va){
    var elem = document.querySelector(el);
    return elem.classList.remove(va);
  }
  static addClass(el,va){
    var elem = document.querySelector(el);
    return elem.classList.add(va);
  }
}

class EventDispatcher {
  static on(el,ev,fa){
    var elem = document.querySelector(el);
    return elem.addEventListener(ev,fa);
  }
}

class AjaxWrapper {
  static request(params){
    var httpRequest;
    // document.getElementById("ajaxButton").addEventListener('click', makeRequest);

    // function makeRequest() {
      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        console.log('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open(params.type, params.url);
      httpRequest.send();
    // }

    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
        } else {
          console.log('There was a problem with the request.');
        }
      }
    }
  }
}

class miniquery {
  static select(el){
    return document.querySelector(el)
  }
  static hide(el){
    return document.querySelector(el).style="display:none";
  }
  static show(el){
    return document.querySelector(el).style="display:show";;
  }
  static removeClass(el,va){
    var elem = document.querySelector(el);
    return elem.classList.remove(va);
  }
  static addClass(el,va){
    var elem = document.querySelector(el);
    return elem.classList.add(va);
  }
}
