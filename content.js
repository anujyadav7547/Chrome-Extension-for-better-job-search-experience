

this.readHTML();

function readHTML(){
	var word1 = "Citizen",
	queue = [document.body],
	curr
	;

	while (curr = queue.pop()) {

		if (!this.checkforCitizenShip(curr.textContent)) continue;
		//if (curr.textContent.match("citizen")) alert(curr.textContent);
		for (var i = 0; i < curr.childNodes.length; ++i) {

			switch (curr.childNodes[i].nodeType) {
				case Node.TEXT_NODE :
					if (this.checkforCitizenShip(curr.childNodes[i].textContent)) {
						alert("As per your settings, this page is not for you");
						return;
					}
					break;
				case Node.ELEMENT_NODE :
					queue.push(curr.childNodes[i]);
					break;
			}
		}
	}
}

function demoMatchClick(word ,pattern) {
	//word = "must be US Citizen";
  var re = new RegExp(pattern,'i');
  if (word.match(re)) {
	return true;
  } else {

	return false;
  }
}

function checkforCitizenShip(word){
	if (!this.demoMatchClick(word, /(must.+U[\.]?S[\.]?.?.?.?(citizen|candidate).*[\.|\,]?)/) &&
	   !this.demoMatchClick(word, /(only.+u[\.]?S[\.]?[.?][.?][.?](Citizen|candidate))/) && 
	   !this.demoMatchClick(word, /(u[.\]?S[\.]?[.?][.?][.?](Citizen|candidate).*only)/) && 
	   !this.demoMatchClick(word, /(u[.\]?S[\.]?[.?][.?][.?](Citizen|candidate).*required)/) && 
	   !this.demoMatchClick(word, /MUST.*BE.*A.*U\.S\..*CITIZEN/) && 
	   !this.demoMatchClick(word, /Must.*be.*a.*US.*citizen/) && 
	   !this.demoMatchClick(word, /only.*US.*Citizen/) && 	
	   !this.demoMatchClick(word, /US.*Citizen.*or.*GC.*Only.*/) && 
	   !this.demoMatchClick(word, /US Citizens and GC Holders ONLY/) &&
	   !this.demoMatchClick(word, /US.*Citizen.* or GC Holder.*/) &&
	   !this.demoMatchClick(word, /US.*Citizen[ship]?.*only*/) &&
	   !this.demoMatchClick(word, /Must.*be.*a.*United.*States.*citizen/) && 
	   !this.demoMatchClick(word, /Must be authorized to work in the U.S. \(No sponsorship\)/) && 
	   !this.demoMatchClick(word, /Must be authorized to work in the U.S. \(No sponsorship\)/) && 
	   !this.demoMatchClick(word, /(security.*clearances.*[\.]+)/) && 
	   !this.demoMatchClick(word, /No visa sponsorships/) && 
	   !this.demoMatchClick(word, /(not.*sponsor.*visa.*[\.])/) && 	  
		!this.demoMatchClick(word, /No sponsorship available/) && 	
		!this.demoMatchClick(word, /Visa sponsorship is not available for this position/) && 	
		!this.demoMatchClick(word, /US.*WITHOUT.?VISA.?SPONSORSHIP/) && 	
	   !this.demoMatchClick(word, /(not.*visa.*sponsor.*[\.])/) && 	 
	   !this.demoMatchClick(word, /CLEARANCE\: /) && 	 
	   !this.demoMatchClick(word, /(Clearance.?is?.?a?.?(MUST|required)*[\.]?)/) ) {
		return false; 
	   }
	else {
		
		return true;
	}
	
}

