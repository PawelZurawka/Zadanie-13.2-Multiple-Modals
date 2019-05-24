'use strict';
(function(){ 
	/* W kodzie HTML i CSS dodaliśmy style dla prostego modala, który będzie zawsze wyśrodkowany w oknie. 
	
	Teraz wystarczy napisać funkcję otwierającą modal:
	*/
	var modals = document.querySelectorAll('.modal');//zmienna przeniesiona z dołu
	var overlay = document.querySelector('#modal-overlay');

	var showModal = function(event){
		event.preventDefault();
		for(var i= 0; i < modals.length; i++) {//MÓJ KOD
			modals[i].classList.remove('show');//MÓJ KOD
		}
		document.querySelector(this.getAttribute('href')).classList.add('show');//MÓJ KOD
		overlay.classList.add('show');
	};
	//overlay.addEventListener('click', showModal);//MÓJ KOD (po kliknięciu w overlay usuwa z modala klasę show)

	// Mimo, że obecnie mamy tylko jeden link, stosujemy kod dla wielu linków. W ten sposób nie będzie trzeba go zmieniać, kiedy zechcemy mieć więcej linków lub guzików otwierających modale
	
	var modalLinks = document.querySelectorAll('.show-modal');//LINK DO PRZYCISKÓW
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	
	// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 

	var hideModal = function(event){
		event.preventDefault();
		overlay.classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.close');
	
	for(var e = 0; i < closeButtons.length; e++){
		closeButtons[e].addEventListener('click', hideModal);
	}

	// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
	
	overlay.addEventListener('click', hideModal);
	
	// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
	
	//var modals = document.querySelectorAll('.modal');
	
	for(var f = 0; f < modals.length; f++){
		modals[f].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
})(); 