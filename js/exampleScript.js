var Example_class = function () {
	this.field = "something";
};

Example_class.prototype.Init = function () {
	this.DoSomething();
};

Example_class.prototype.DoSomething = function (module, data) {
    $("h2").jQueryPluignTemplate({
        text        : 'jQuery Plugin Template',
        color       : '#005dff',
        fontStyle   : 'italic'

    });

    $(".some-content").jQueryPluignTemplate({
        text        : 'These text was created by the jQuery Plugin Template',
        onComplete: function(){
            alert("Text has been updated!");
        }
    });
};

var ExampleApp =  new Example_class();
ExampleApp.Init();
