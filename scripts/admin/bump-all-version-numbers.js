var fs = require("fs");
var _ = require("../../packages/underscore/underscore.js")._;

var filenames = _.rest(process.argv, 2);

_.each(filenames, function (name) {
  var content = fs.readFileSync(name, {encoding: "utf-8"});

  match = content.match(/\d+\.\d+\.\d+-pre\.\d+/);
  if (match) {
    var versionNumber = match[0];
    var s = versionNumber.split(".");
    s[3] = (parseInt(s[3], 10) + 1) + "";
    var incremented = s.join(".");

    content = content.replace(versionNumber, incremented);
    //console.log(incremented);
    fs.writeFileSync(name, content);
  }
});
