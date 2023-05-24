$(function() {
    // Custom Options
    let options = {
        triggerEvent: "change",
        triggerEventClick: "click",
        tab: ".tabs .tab__item .tab",
        tabItems: ".tabs_items",
        tabsContentArea: ".tab__content-area",
        tabsInputSelector: ".tabs .tab__item input",
        tabsContent: ".tabs__content",
        glider: ".glider",
        gliderTemplate: "<span class='glider'></span>"
    };

     // JSON Data Used To Render Tabs
    let jsonData = [
        {
            "title": "Section 1",
            "content": "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
          },
          {
            "title": "Section 2",
            "content": "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
          },
          {
            "title": "Section 3",
            "content": "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
          },
          {
            "title": "Section 4",
            "content": "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
          }	
    ];


    // Render Tabs
    function renderTabs() {
        let tabTitles = "",
            tabContents = "";

        jsonData.forEach(function(item, index) {
            let title = item.title,
                content = item.content,
                activeClass = (index === 0 && $(window).width() > 768) ? ' active' : '',
                isTabItemActive = (index === 0) ? ' active' : '',
                isVisible = (index === 0 && $(window).width() <= 768) ? 'block' : '',
                tabClass = "tab-" + (index + 1),
                tabContentClass = "tab-" + (index + 1) + activeClass,
                inputId = "tab-" + (index + 1);

                tabTitles += `<div class="tab__item ${isTabItemActive}" data-tab-index="${tabClass}">
                                <input type="radio" id="${inputId}" name="tab-group" data-tab="${tabClass}">
                                <label class="tab" for="${inputId}"> ${title}</label>
                            </div>`;

                tabContents += `<div class="tabs__content ${tabContentClass}" data-content-index="${tabClass}" style="display: ${isVisible}">
                                    <h2 class="tabs__content-title"> ${title}</h2>
                                    <p>${content}</p>
                                </div>`;
        });
        
        $(options.tabItems).html(tabTitles);
        $(options.tabItems).append(options.gliderTemplate);
        $(options.tabsContentArea).html(tabContents);
        if ($(window).width() <= 768){
            $(options.tabItems).append(tabContents);
        }
    }

    // Render Tabs
    renderTabs();

    // Render Tabs or Accordians Based Upon Screen Sizes
    if ($(window).width() > 768){
        _handleDesktopTabs();
    }

    if ($(window).width() <= 768){
        _handleMobAccordians();
    }

    // Re-render The Content After Browser Resizing
    $(window).on('resize', function(){
        location.reload();
    });

    // Handle Desktop Tabs
    function _handleDesktopTabs(){
        $(document).on(options.triggerEvent, options.tabsInputSelector, function() {
            let target = $(this).attr("data-tab");
            switch(target) {
                case 'tab-1':
                    $(options.glider).css("transform", "translateX(0)");
                    break;
                case 'tab-2':
                    $(options.glider).css("transform", "translateX(100%)");
                    break;
                case 'tab-3':
                    $(options.glider).css("transform", "translateX(200%)");
                    break;
                case 'tab-4':
                    $(options.glider).css("transform", "translateX(300%)");
                    break;
            }
            $(options.tabsContent).removeClass("active");
            $(".tabs__content." + target).addClass("active");
        });
    }

    // Handle Mobile Accordians
    function _handleMobAccordians(){
        $(document).on(options.triggerEventClick, options.tab, function(){
            let target = $(this).attr('for');
            let tabsTarget = $(this).parent().parent();
            if($(this).parent().hasClass("active")){
                $(".tab__item").removeClass("active");
                $(this).parent().removeClass("active");
            } else {
                $(".tab__item").removeClass("active");
                $(this).parent().addClass("active");
            }

            if(tabsTarget.find(".tabs__content." + target).hasClass("active")){
                $(options.tabsContent).removeClass("active");
                $(tabsTarget.find(".tabs__content." + target)).slideToggle();
                $(tabsTarget.find(".tabs__content")).not('.'+target).slideUp();
            } else {
                $(options.tabsContent).removeClass("active");
                $(tabsTarget.find(".tabs__content." + target)).slideToggle();
                $(tabsTarget.find(".tabs__content")).not('.'+target).slideUp();
            }
        });
    }
});
