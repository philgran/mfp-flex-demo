this["MFP"] = this["MFP"] || {};
this["MFP"]["templates"] = this["MFP"]["templates"] || {};
this["MFP"]["templates"]["scenario-1"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"scenario-1\">\n  <h1>Scenario 1</h1>\n  <p>Create a \"media object\" whose media is centered</p>\n\n  <h2>Example</h2>\n"
    + ((stack1 = this.invokePartial(partials['solution-1'],depth0,{"name":"solution-1","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <h2>Result</h2>\n</div>\n";
},"usePartial":true,"useData":true});
this["MFP"]["templates"]["scenario-2"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"scenario-2\">\n  <h1>Scenario 2</h1>\n  <p>Part 1: Create a 1-2-1 (4 column) layout. Center the content.</p>\n  <p>\n    Part 2: vertically stack your content.\n  </p>\n\n  <h2>Example</h2>\n"
    + ((stack1 = this.invokePartial(partials['solution-2'],depth0,{"name":"solution-2","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <h2>Result</h2>\n</div>\n";
},"usePartial":true,"useData":true});
this["MFP"]["templates"]["scenario-3"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"scenario-3\">\n  <h1>Scenario 3</h1>\n  <p>Re-order the items without touching the HTML.</p>\n\n  <h2>Example</h2>\n"
    + ((stack1 = this.invokePartial(partials['solution-3'],depth0,{"name":"solution-3","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n  <h2>Result</h2>\n  <div class=\"flex-container text-center\">\n    <div class=\"flex-1 item-two\">\n      <p>\n        two\n      </p>\n    </div>\n    <div class=\"flex-1 item-three\">\n      <p>\n        three\n      </p>\n    </div>\n    <div class=\"flex-1 item-one\">\n      <p>\n        one\n      </p>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});