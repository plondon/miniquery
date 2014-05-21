/*!
 * miniQuery
 */

var SweetSelector = {
  select: function(item) {
    var item_attr = item.split("")[0]
    var item_word = item.split("").splice(1,item.length).join("")
    if (item_attr === "#") {
      return document.getElementById(item_word)
    }
    else if (item_attr === ".") {
      var elements = document.getElementsByClassName(item_word)
      var elements_of_class = []

      for (var i=0; i<elements.length; i++) {
        elements_of_class.push(elements[i])
      }
      return elements_of_class
    }
    else {
      var elements = document.getElementsByTagName(item)
      var elements_of_links = []

      for (var i=0; i < elements.length; i++) {
        elements_of_links.push(elements[i])
      }
      return elements_of_links
    }
  }
}

var Dom = {
  hide: function(element) {
    elements = SweetSelector.select(element)
    for (var i=0; i<elements.length;i++) {
      elements[i].style.display = "none";
    }
  },
  show: function(element) {
    elements = SweetSelector.select(element)
    for (var i=0; i<elements.length;i++) {
      elements[i].style.display = "block";
    }
  },
  addClass: function(element, class_name) {
    elements = SweetSelector.select(element)
    for (var i=0; i<elements.length; i++) {
      elements[i].className = elements[i].className + " " + class_name
    }
  },
  removeClass: function(element, class_name) {
    elements = SweetSelector.select(element)

    elements.forEach(function(element) {
      element.className = element.className.replace(class_name, "")
    });
  }
}

var EventDispatcher = {
  on: function(selector, action, func) {
    var selector = SweetSelector.select(selector)

    // add an event called whatever action is here
    selector.forEach(function(select) {
      select.addEventListener(action, func)
    });
  },

  trigger: function(selector, action) {
    // create a new event here from action variable
    var event = new Event(action)
    var selector = SweetSelector.select(selector)

    selector.forEach(function(select) {
      select.dispatchEvent(event)
    });
  }
}
