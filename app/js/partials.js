Handlebars.registerPartial("solution-1", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container\">\n  <div class=\"flex\">\n    <div class=\"flex-1\">\n"
    + ((stack1 = this.invokePartial(partials.square,depth0,{"name":"square","data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div>\n"
    + ((stack1 = this.invokePartial(partials.square,depth0,{"name":"square","data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true}));
Handlebars.registerPartial("solution-2", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true}));
Handlebars.registerPartial("solution-3", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true}));
Handlebars.registerPartial("solution-4", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true}));
Handlebars.registerPartial("square", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"square\"></div>\n";
},"useData":true}));