// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function(){
	var hamburger = document.querySelector('.hamburger');
	var navHamburger = document.querySelector('.nav-hamburger');
	var side = document.getElementById('side-nav');
	var overlay = document.querySelector('.side-overlay');

	function openSide(){
		side.classList.add('open');
		overlay.classList.add('show');
		side.setAttribute('aria-hidden','false');
		hamburger.setAttribute('aria-expanded','true');
		hamburger.classList.add('open');
		overlay.focus();
	}
	function closeSide(){
		side.classList.remove('open');
		overlay.classList.remove('show');
		side.setAttribute('aria-hidden','true');
		hamburger.setAttribute('aria-expanded','false');
		hamburger.classList.remove('open');
		hamburger.focus();
	}

	function toggleSide(){
		if(side.classList.contains('open')) closeSide(); else openSide();
	}

	if(hamburger){ hamburger.addEventListener('click', toggleSide); }
	if(navHamburger){ navHamburger.addEventListener('click', toggleSide); }

	if(overlay){ overlay.addEventListener('click', closeSide); }

	// close on Escape
	document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && side.classList.contains('open')) closeSide(); });

	// close side panel when clicking any nav link inside it
	var sideLinks = side.querySelectorAll('.side-links .nav-item');
	sideLinks.forEach(function(link){
		link.addEventListener('click', closeSide);
	});
});

// Random tilt for photo cleanup polaroid cards
(function(){
	var cleanupCards = document.querySelectorAll('.cleanup-side .polaroid-card');
	cleanupCards.forEach(function(card){
		var deg = (Math.random() * 8 - 2).toFixed(1); // random between -3 and 3
		card.style.setProperty('--rot', deg);
	});
})();
