﻿var content_with_table = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"page-content\" title=\""
    + escapeExpression(((helper = (helper = helpers.Component || (depth0 != null ? depth0.Component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Component","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = helpers.UserStoryForPresentation || (depth0 != null ? depth0.UserStoryForPresentation : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"UserStoryForPresentation","hash":{},"data":data}) : helper)))
    + "\">\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Username</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <th scope=\"row\">1</th>\r\n                <td>Mark</td>\r\n                <td>Otto</td>\r\n                <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n                <th scope=\"row\">2</th>\r\n                <td>Jacob</td>\r\n                <td>Thornton</td>\r\n                <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n                <th scope=\"row\">3</th>\r\n                <td>Larry</td>\r\n                <td>the Bird</td>\r\n                <td>@twitter</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";
},"useData":true});