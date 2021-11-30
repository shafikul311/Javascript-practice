
  var userName = "Shafikul ";

  (function (name) {
  
      function display(name)
      {
          console.log("Is iife is very interesting ?" + name);
      }
  
      display(name);
  })(userName);