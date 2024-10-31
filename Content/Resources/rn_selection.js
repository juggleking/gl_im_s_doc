var currentlySelected;


			function selectItem(element) {
			if(currentlySelected && currentlySelected != element) {
			currentlySelected.className = currentlySelected.className.replace(/\bselected\b/g, "");
			}
			if (element.className != "") {
			element.className += ' selected';
			}
			else {
			element.className = 'selected';
			}

			currentlySelected = element;
			}



			function dehighlightItem(element) {

			element.className = element.className.replace(/ ?highlight/, "");

			}

			function highlightItem(element) {

			if (element.className != "selected") {
			element.className += " highlight";
			}

			}