/*
	PORTFOLIO TEMPLATE - main.js
	Built on Future Imperfect by HTML5 UP (html5up.net | @ajlkn)
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

	You normally do not need to touch this file. Every setting you MIGHT want to
	change is marked with "EDIT:". Everything marked "KEEP:" is required by the layout.
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$sidebar = $('#sidebar'),
		$main = $('#main');

	// Breakpoints.
	// KEEP: these widths must match the @media queries in main.css. Only change them
	// if you also change the theme's CSS (see assets/sass/libs/_vars.scss).
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
	// Removing "is-preload" from <body> starts the fade-in defined in main.css.
	// EDIT: 100 = delay in milliseconds before the fade-in starts.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu (the slide-out panel opened by the "Menu" button).
	// KEEP: the #menu element must exist in the HTML.
		$menu
			.appendTo($body)
			.panel({
				delay: 500,                       // EDIT: slide animation time in ms (match main.css transition if you change it)
				hideOnClick: true,                // EDIT: true = close the menu when a link is clicked
				hideOnSwipe: true,                // EDIT: true = close the menu on a swipe gesture (touch devices)
				resetScroll: true,                // EDIT: true = scroll the menu back to the top when it closes
				resetForms: true,                 // EDIT: true = clear any form fields inside the menu when it closes
				side: 'right',                    // EDIT: 'right' or 'left' (also adjust the menu CSS if you switch sides)
				target: $body,                    // KEEP
				visibleClass: 'is-menu-visible'   // KEEP: class name used by main.css
			});

	// Search (header).
	// OPTIONAL: only runs if you enable the search <li> in index.html (see the commented block
	// in the header). With no #search element on the page this code does nothing.
		var $search = $('#search'),
			$search_input = $search.find('input');

		$body
			.on('click', '[href="#search"]', function(event) {

				event.preventDefault();

				// Not visible?
					if (!$search.hasClass('visible')) {

						// Reset form.
							$search[0].reset();

						// Show.
							$search.addClass('visible');

						// Focus input.
							$search_input.focus();

					}

			});

		$search_input
			.on('keydown', function(event) {

				// Escape closes the search box.
				if (event.keyCode == 27)
					$search_input.blur();

			})
			.on('blur', function() {
				window.setTimeout(function() {
					$search.removeClass('visible');
				}, 100);
			});

	// Intro.
	// The #intro block (photo, name, tagline) lives in the sidebar on wide screens and moves
	// to the top of the posts column on screens 1280px wide or smaller.
	// EDIT: to keep it in the sidebar at every size, delete the two breakpoints.on(...) calls below.
	// EDIT: to change when it moves, change '<=large' / '>large' (names from the breakpoints list above).
		var $intro = $('#intro');

		// Move to main on <=large, back to sidebar on >large.
			breakpoints.on('<=large', function() {
				$intro.prependTo($main);
			});

			breakpoints.on('>large', function() {
				$intro.prependTo($sidebar);
			});

})(jQuery);
