/* Generated by Opal 0.10.1 */
Opal.modules["nashorn/io"] = function(Opal) {
  var $a, $b, self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $gvars = Opal.gvars;
  if ($gvars.stdout == null) $gvars.stdout = nil;
  if ($gvars.stderr == null) $gvars.stderr = nil;

  Opal.add_stubs(['$write_proc=']);
  (($a = [function(s){print(s)}]), $b = $gvars.stdout, $b['$write_proc='].apply($b, $a), $a[$a.length-1]);
  return (($a = [function(s){print(s)}]), $b = $gvars.stderr, $b['$write_proc='].apply($b, $a), $a[$a.length-1]);
};
/* Generated by Opal 0.10.1 */
Opal.modules["nashorn/file"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  return (function($base, $super) {
    function $File(){};
    var self = $File = $klass($base, $super, 'File', $File);

    var def = self.$$proto, $scope = self.$$scope, TMP_1;

    return (Opal.defs(self, '$read', TMP_1 = function ːread(path) {
      var self = this;

      
        var Paths = Java.type('java.nio.file.Paths');
        var Files = Java.type('java.nio.file.Files');
        var lines = Files.readAllLines(Paths.get(path), Java.type('java.nio.charset.StandardCharsets').UTF_8);
        var data = [];
        lines.forEach(function(line) { data.push(line); });
        return data.join("\n");
      
    }, TMP_1.$$arity = 1), nil) && 'read'
  })($scope.base, null)
};
/* Generated by Opal 0.10.1 */
Opal.modules["nashorn"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$require']);
  (function($base) {
    var $Nashorn, self = $Nashorn = $module($base, 'Nashorn');

    var def = self.$$proto, $scope = self.$$scope;

    nil
  })($scope.base);
  self.$require("nashorn/io");
  return self.$require("nashorn/file");
};
