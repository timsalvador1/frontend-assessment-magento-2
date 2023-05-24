# Design
1- Implemented Pixel Perfect Design For Desktop & Mobile Using Your Provided Assets.
2- Used Less For CSS (As Magento 2 Use LESS for CSS)
3- Installed and Configured Grunt (JS Compiler for LESS/SCSS) to Compile Less Files Into CSS.
4- Configured Grunt Watch Task So LESS files immidately Compiled to CSS.
5- If You Want to See How Grunt is Actually Woring, You may Install this on Your Local Server/Machine.
6- Use Command - grunt watch / grunt to Run Compiler.
7- Used JQuery For JS Side.

# Followed These Coding Practices
1- Casing: kebab-case
2- Use BEM syntax for custom CSS classes.
3- Use Bootstrap utility classes mainly for layout and spacing, (see the Layout and Utilities sections of the documentation).
4- Do not create custom utility classes (see custom Bootstrap variables and what can be overwritten from Bootstrap defaults for other options).
5- Use CSS instead of utility classes for reused components. But this doesn't mean you can't use both, consider what will always be the same (CSS) and what may change e.6- spacing around the element (utility classes).

# Note:

Kindly note that, I have directly used your json data onject in the JS File. The Reason is, If you are gonna review this locally (Without a Local Server i.e http://localhost/) it will throgh a CORS Origin Error. Because these Files Server Were Not Served Over an HTTP Request. So in that case, you can Directly Open Index.html in Your Browser and Preview.
If You Really Wish to this Using data.json file, Here is the Approach that Would be Used,

<script>
	$(document).ready(function() {
		$.getJSON('data.json', function(data) {
			let tabTitles = "",
				tabContents = "";
			$.each(users, function(index, item) {
				let title = item.title,
					content = item.content,
					activeClass = (index === 0) ? ' active' : '',
					isTabItemActive = (index === 0) ? ' active' : '',
					tabClass = "tab-" + (index + 1),
					tabContentClass = "tab-" + (index + 1) + activeClass,
					inputId = "tab-" + (index + 1);

					tabTitles += `<div class="tab__item ${isTabItemActive}">
									<input type="radio" id="${inputId}" name="tab-group" data-tab="${tabClass}">
									<label class="tab" for="${inputId}"> ${title}</label>
								</div>`;

					tabContents += `<div class="tabs__content ${tabContentClass}">
										<h2 class="tabs__content-title"> ${title}</h2>
										<p>${content}</p>
									</div>`;
			});
			$(options.tabItems).html(tabTitles);
			$(options.tabsContentArea).html(tabContents);
		});
	});
</script>

