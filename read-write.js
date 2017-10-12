// collect your text (from divs, textarea..etc) into variable and stringify it
          var myText;
          var myStrText=JSON.stringify(myText);



// then call a function with arguments (name, data)
         saveText("default_name.txt", myStrText);



// function to save it to HDD (default download folder or with prompt) is like this
         function saveText(filename, text) {
            var tempElem = document.createElement('a');
            tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            tempElem.setAttribute('download', filename);
            tempElem.click();
         }