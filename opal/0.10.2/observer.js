/* Generated by Opal 0.10.2 */
Opal.modules["observer"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $hash2 = Opal.hash2;

  Opal.add_stubs(['$respond_to?', '$raise', '$new', '$to_s', '$[]=', '$delete', '$clear', '$size', '$each', '$send']);
  return (function($base) {
    var $Observable, self = $Observable = $module($base, 'Observable');

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_6, TMP_8;

    Opal.defn(self, '$add_observer', TMP_1 = function ːadd_observer(observer, func) {
      var $a, $b, self = this;
      if (self.observer_peers == null) self.observer_peers = nil;

      if (func == null) {
        func = "update";
      }
      if ((($a = (($b = self['observer_peers'], $b != null && $b !== nil) ? 'instance-variable' : nil)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.observer_peers = $hash2([], {})
      };
      if ((($a = observer['$respond_to?'](func)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise($scope.get('NoMethodError').$new("observer does not respond to `" + (func.$to_s()) + "'", func.$to_s()))
      };
      return self.observer_peers['$[]='](observer, func);
    }, TMP_1.$$arity = -2);

    Opal.defn(self, '$delete_observer', TMP_2 = function ːdelete_observer(observer) {
      var $a, $b, self = this;
      if (self.observer_peers == null) self.observer_peers = nil;

      if ((($a = (($b = self['observer_peers'], $b != null && $b !== nil) ? 'instance-variable' : nil)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self.observer_peers.$delete(observer)
        } else {
        return nil
      };
    }, TMP_2.$$arity = 1);

    Opal.defn(self, '$delete_observers', TMP_3 = function ːdelete_observers() {
      var $a, $b, self = this;
      if (self.observer_peers == null) self.observer_peers = nil;

      if ((($a = (($b = self['observer_peers'], $b != null && $b !== nil) ? 'instance-variable' : nil)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self.observer_peers.$clear()
        } else {
        return nil
      };
    }, TMP_3.$$arity = 0);

    Opal.defn(self, '$count_observers', TMP_4 = function ːcount_observers() {
      var $a, $b, self = this;
      if (self.observer_peers == null) self.observer_peers = nil;

      if ((($a = (($b = self['observer_peers'], $b != null && $b !== nil) ? 'instance-variable' : nil)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self.observer_peers.$size()
        } else {
        return 0
      };
    }, TMP_4.$$arity = 0);

    Opal.defn(self, '$changed', TMP_5 = function ːchanged(state) {
      var self = this;

      if (state == null) {
        state = true;
      }
      return self.observer_state = state;
    }, TMP_5.$$arity = -1);

    Opal.defn(self, '$changed?', TMP_6 = function() {
      var $a, $b, $c, self = this;
      if (self.observer_state == null) self.observer_state = nil;

      if ((($a = ($b = (($c = self['observer_state'], $c != null && $c !== nil) ? 'instance-variable' : nil), $b !== false && $b !== nil && $b != null ?self.observer_state : $b)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return true
        } else {
        return false
      };
    }, TMP_6.$$arity = 0);

    Opal.defn(self, '$notify_observers', TMP_8 = function ːnotify_observers($a_rest) {
      var $b, $c, $d, TMP_7, self = this, arg;
      if (self.observer_state == null) self.observer_state = nil;
      if (self.observer_peers == null) self.observer_peers = nil;

      var $args_len = arguments.length, $rest_len = $args_len - 0;
      if ($rest_len < 0) { $rest_len = 0; }
      arg = new Array($rest_len);
      for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
        arg[$arg_idx - 0] = arguments[$arg_idx];
      }
      if ((($b = ($c = (($d = self['observer_state'], $d != null && $d !== nil) ? 'instance-variable' : nil), $c !== false && $c !== nil && $c != null ?self.observer_state : $c)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        if ((($b = (($c = self['observer_peers'], $c != null && $c !== nil) ? 'instance-variable' : nil)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
          ($b = ($c = self.observer_peers).$each, $b.$$p = (TMP_7 = function(k, v){var self = TMP_7.$$s || this, $a;
if (k == null) k = nil;if (v == null) v = nil;
          return ($a = k).$send.apply($a, [v].concat(Opal.to_a(arg)))}, TMP_7.$$s = self, TMP_7.$$arity = 2, TMP_7), $b).call($c)};
        return self.observer_state = false;
        } else {
        return nil
      };
    }, TMP_8.$$arity = -1);
  })($scope.base)
};
