var tabs = {
    init: function() {
        this.bindUIfunctions();
        this.pageLoadCorrectTab();
    },

    bindUIfunctions: function() {
        $(document)
        // ...first click handler, chaining for efficiency
        .on("click", ".faq-categories a[href^='#']:not('.activeTab')", function(event){
            Tabs.changeTab(this.hash);
            event.preventDefault();
        });
    },

    changeTab: function(hash) {

        //find the link based on that hash
        var anchor = $("[href=" + hash + "]");

        //find the related content panel
        var div = $(hash);

        //activate correct anchor (visully)
        anchor.addClass("activeTab").parent().siblings().find("a").removeClass("activeTab");

        //activate correct div (visually)
        div.addClass("activeTab").siblings().removeClass("activeTab");

        //update URL, no history addition
        window.history.replaceState("", "", hash);

    },

    pageLoadCorrectTab: function(){
        this.changeTab(document.location.hash);
    }
}
