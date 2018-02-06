/* Generated by Opal 0.10.2 */
Opal.modules["singleton"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$raise', '$class', '$__init__', '$instance_eval', '$new', '$extend']);
  return (function($base) {
    var $Singleton, self = $Singleton = $module($base, 'Singleton');

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2;

    Opal.defn(self, '$clone', TMP_1 = function ːclone() {
      var self = this;

      return self.$raise($scope.get('TypeError'), "can't clone instance of singleton " + (self.$class()));
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$dup', TMP_2 = function ːdup() {
      var self = this;

      return self.$raise($scope.get('TypeError'), "can't dup instance of singleton " + (self.$class()));
    }, TMP_2.$$arity = 0);

    (function($base) {
      var $SingletonClassMethods, self = $SingletonClassMethods = $module($base, 'SingletonClassMethods');

      var def = self.$$proto, $scope = self.$$scope, TMP_3, TMP_4;

      Opal.defn(self, '$clone', TMP_3 = function ːclone() {
        var $a, $b, self = this, $iter = TMP_3.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

        TMP_3.$$p = null;
        $zuper = [];
        
        for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
          $zuper[$zuper_index] = arguments[$zuper_index];
        }
        return $scope.get('Singleton').$__init__(($a = ($b = self, Opal.find_super_dispatcher(self, 'clone', TMP_3, false)), $a.$$p = $iter, $a).apply($b, $zuper));
      }, TMP_3.$$arity = 0);

      Opal.defn(self, '$inherited', TMP_4 = function ːinherited(sub_klass) {
        var $a, $b, self = this, $iter = TMP_4.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

        TMP_4.$$p = null;
        $zuper = [];
        
        for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
          $zuper[$zuper_index] = arguments[$zuper_index];
        }
        ($a = ($b = self, Opal.find_super_dispatcher(self, 'inherited', TMP_4, false)), $a.$$p = $iter, $a).apply($b, $zuper);
        return $scope.get('Singleton').$__init__(sub_klass);
      }, TMP_4.$$arity = 1);
    })($scope.base);

    (function(self) {
      var $scope = self.$$scope, def = self.$$proto, TMP_7, TMP_8;

      Opal.defn(self, '$__init__', TMP_7 = function ː__init__(klass) {
        var $a, $b, TMP_5, TMP_6, self = this;

        ($a = ($b = klass).$instance_eval, $a.$$p = (TMP_5 = function(){var self = TMP_5.$$s || this;

        return self.singleton__instance__ = nil}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5), $a).call($b);
        Opal.defs(klass, '$instance', TMP_6 = function ːinstance() {
          var $a, self = this;
          if (self.singleton__instance__ == null) self.singleton__instance__ = nil;

          if ((($a = self.singleton__instance__) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
            return self.singleton__instance__};
          return self.singleton__instance__ = self.$new();
        }, TMP_6.$$arity = 0);
        return klass;
      }, TMP_7.$$arity = 1);
      return (Opal.defn(self, '$included', TMP_8 = function ːincluded(klass) {
        var $a, $b, self = this, $iter = TMP_8.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

        TMP_8.$$p = null;
        $zuper = [];
        
        for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
          $zuper[$zuper_index] = arguments[$zuper_index];
        }
        ($a = ($b = self, Opal.find_super_dispatcher(self, 'included', TMP_8, false)), $a.$$p = $iter, $a).apply($b, $zuper);
        klass.$extend($scope.get('SingletonClassMethods'));
        return $scope.get('Singleton').$__init__(klass);
      }, TMP_8.$$arity = 1), nil) && 'included';
    })(Opal.get_singleton_class($scope.get('Singleton')));
  })($scope.base)
};
