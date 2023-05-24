# Note: Install Node modules by running
- npm install

# Design
- Implemented pixel perfect design for desktop & mobile using your provided assets.
- Utilized LESS for CSS in accordance with Magento 2's usage of LESS for CSS
- Installed and configured Grunt, a JavaScript compiler for LESS/SCSS, to compile LESS files into CSS
- Set up a Grunt watch task for immediate compilation of LESS files into CSS
- If you're interested in observing Grunt's operation, you might consider installing it on your local server/machine
- Use the command 'grunt watch' or 'grunt' to run the compiler
- Employed jQuery on the JavaScript side

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

