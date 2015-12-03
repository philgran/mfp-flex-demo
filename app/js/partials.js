Handlebars.registerPartial("logo", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"logo\"></div>\n";
},"useData":true}));
Handlebars.registerPartial("lorem-long", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<p>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet vehicula neque. Ut nec augue quis tellus sollicitudin mollis et vel quam. Nullam vel pulvinar nibh. Sed ornare tellus vel urna porta, at viverra elit iaculis. In nisl ipsum, maximus et risus a, suscipit tincidunt justo. Ut metus nisl, euismod vel volutpat nec, dignissim vitae ante. Sed in elit vestibulum, sagittis velit quis, consectetur odio.\n</p>\n\n<p>\n  Nulla non sem ornare, congue dolor non, imperdiet mi. Phasellus laoreet tincidunt erat sed congue. Donec eu ligula sed felis mollis varius vitae quis ipsum. Nulla odio sapien, pellentesque sit amet massa sit amet, suscipit mollis odio. In tellus nisi, porta aliquam tempus sit amet, aliquet vitae odio. Sed vulputate risus vitae lorem rhoncus, ac finibus purus pulvinar. Nulla congue auctor nisi at imperdiet.\n</p>\n\n<p>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet vehicula neque. Ut nec augue quis tellus sollicitudin mollis et vel quam. Nullam vel pulvinar nibh. Sed ornare tellus vel urna porta, at viverra elit iaculis. In nisl ipsum, maximus et risus a, suscipit tincidunt justo. Ut metus nisl, euismod vel volutpat nec, dignissim vitae ante. Sed in elit vestibulum, sagittis velit quis, consectetur odio.\n</p>\n\n<p>\n  Nulla non sem ornare, congue dolor non, imperdiet mi. Phasellus laoreet tincidunt erat sed congue. Donec eu ligula sed felis mollis varius vitae quis ipsum. Nulla odio sapien, pellentesque sit amet massa sit amet, suscipit mollis odio. In tellus nisi, porta aliquam tempus sit amet, aliquet vitae odio. Sed vulputate risus vitae lorem rhoncus, ac finibus purus pulvinar. Nulla congue auctor nisi at imperdiet.\n</p>\n";
},"useData":true}));
Handlebars.registerPartial("lorem-short", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<p>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet vehicula neque. Ut nec augue quis tellus sollicitudin mollis et vel quam. \n</p>\n";
},"useData":true}));
Handlebars.registerPartial("lorem", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<p>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet vehicula neque. Ut nec augue quis tellus sollicitudin mollis et vel quam. Nullam vel pulvinar nibh. Sed ornare tellus vel urna porta, at viverra elit iaculis. In nisl ipsum, maximus et risus a, suscipit tincidunt justo. Ut metus nisl, euismod vel volutpat nec, dignissim vitae ante. Sed in elit vestibulum, sagittis velit quis, consectetur odio.\n</p>\n\n<p>\n  Nulla non sem ornare, congue dolor non, imperdiet mi. Phasellus laoreet tincidunt erat sed congue. Donec eu ligula sed felis mollis varius vitae quis ipsum. Nulla odio sapien, pellentesque sit amet massa sit amet, suscipit mollis odio. In tellus nisi, porta aliquam tempus sit amet, aliquet vitae odio. Sed vulputate risus vitae lorem rhoncus, ac finibus purus pulvinar. Nulla congue auctor nisi at imperdiet.\n</p>\n";
},"useData":true}));
Handlebars.registerPartial("solution-1", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"flex-container solution-1\">\n  <div class=\"flex flex-center media\">\n"
    + ((stack1 = this.invokePartial(partials.square,depth0,{"name":"square","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"flex-1\">\n"
    + ((stack1 = this.invokePartial(partials.lorem,depth0,{"name":"lorem","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"usePartial":true,"useData":true}));
Handlebars.registerPartial("solution-2", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"flex-container solution-2 text-center\">\n  <div class=\"flex-1\">\n"
    + ((stack1 = this.invokePartial(partials.square,depth0,{"name":"square","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"flex-2\">\n"
    + ((stack1 = this.invokePartial(partials.square,depth0,{"name":"square","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.square,depth0,{"name":"square","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.square,depth0,{"name":"square","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.square,depth0,{"name":"square","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"flex-1\">\n"
    + ((stack1 = this.invokePartial(partials.square,depth0,{"name":"square","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"usePartial":true,"useData":true}));
Handlebars.registerPartial("solution-3", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"flex-container solution-3 text-center\">\n  <div class=\"flex-1 item-two\">\n    <p>\n      two\n    </p>\n  </div>\n  <div class=\"flex-1 item-three\">\n    <p>\n      three\n    </p>\n  </div>\n  <div class=\"flex-1 item-one\">\n    <p>\n      one\n    </p>\n  </div>\n</div>\n";
},"useData":true}));
Handlebars.registerPartial("square", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"square\"></div>\n";
},"useData":true}));