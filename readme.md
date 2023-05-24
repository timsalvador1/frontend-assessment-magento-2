# Note: Install Node Modules By Running
- npm install

# Design
- Implemented Pixel Perfect Design For Desktop & Mobile Using Your Provided Assets.
- Used Less For CSS (As Magento 2 Use LESS for CSS)
- Installed and Configured Grunt (JS Compiler for LESS/SCSS) to Compile Less Files Into CSS.
- Configured Grunt Watch Task So LESS files immidately Compiled to CSS.
- If You Want to See How Grunt is Actually Woring, You may Install this on Your Local Server/Machine.
- Use Command - grunt watch / grunt to Run Compiler.
- Used JQuery For JS Side.

# Followed These Coding Practices
- Casing: kebab-case
- Use BEM syntax for custom CSS classes.
- Use Bootstrap utility classes mainly for layout and spacing, (see the Layout and Utilities sections of the documentation).
- Do not create custom utility classes (see custom Bootstrap variables and what can be overwritten from Bootstrap defaults for other options).
- Use CSS instead of utility classes for reused components. But this doesn't mean you can't use both, consider what will always be the same (CSS) and what may change e.6- spacing around the element (utility classes).

# Note:

I would like to bring your attention to the utilization of your JSON data object directly in the JavaScript file. This decision was based on a consideration for local reviews. If you wish to review the code in a local environment without a local server (i.e., http://localhost/), a Cross-Origin Resource Sharing (CORS) error might be encountered. This issue arises due to the lack of serving files over an HTTP request.
Therefore, as a workaround, you can directly open the Index.html file in your browser to preview it.
However, if your preference lies in employing the 'data.json' file, I present below the approach that can be adopted:

```<script>
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
</script>```

