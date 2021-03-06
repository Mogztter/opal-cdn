/* Generated by Opal 0.6.3 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $module = $opal.module, $hash2 = $opal.hash2, $klass = $opal.klass;

  $opal.add_stubs(['$new', '$push', '$[]=', '$[]', '$create_id', '$json_create', '$attr_accessor', '$create_id=', '$===', '$parse', '$generate', '$from_object', '$to_json', '$responds_to?', '$to_io', '$write', '$to_s', '$strftime']);
  (function($base) {
    var self = $module($base, 'JSON');

    var def = self._proto, $scope = self._scope;

    
    var $parse  = JSON.parse,
        $hasOwn = Opal.hasOwnProperty;

    function to_opal(value, options) {
      switch (typeof value) {
        case 'string':
          return value;

        case 'number':
          return value;

        case 'boolean':
          return !!value;

        case 'null':
          return nil;

        case 'object':
          if (!value) return nil;

          if (value._isArray) {
            var arr = (options.array_class).$new();

            for (var i = 0, ii = value.length; i < ii; i++) {
              (arr).$push(to_opal(value[i], options));
            }

            return arr;
          }
          else {
            var hash = (options.object_class).$new();

            for (var k in value) {
              if ($hasOwn.call(value, k)) {
                (hash)['$[]='](k, to_opal(value[k], options));
              }
            }

            var klass;
            if ((klass = (hash)['$[]']($scope.JSON.$create_id())) != nil) {
              klass = Opal.cget(klass);
              return (klass).$json_create(hash);
            }
            else {
              return hash;
            }
          }
      }
    };
  

    (function(self) {
      var $scope = self._scope, def = self._proto;

      return self.$attr_accessor("create_id")
    })(self.$singleton_class());

    self['$create_id=']("json_class");

    $opal.defs(self, '$[]', function(value, options) {
      var $a, self = this;

      if (options == null) {
        options = $hash2([], {})
      }
      if ((($a = $scope.String['$==='](value)) !== nil && (!$a._isBoolean || $a == true))) {
        return self.$parse(value, options)
        } else {
        return self.$generate(value, options)
      };
    });

    $opal.defs(self, '$parse', function(source, options) {
      var self = this;

      if (options == null) {
        options = $hash2([], {})
      }
      return self.$from_object($parse(source), options);
    });

    $opal.defs(self, '$parse!', function(source, options) {
      var self = this;

      if (options == null) {
        options = $hash2([], {})
      }
      return self.$parse(source, options);
    });

    $opal.defs(self, '$from_object', function(js_object, options) {
      var $a, $b, $c, self = this;

      if (options == null) {
        options = $hash2([], {})
      }
      ($a = "object_class", $b = options, ((($c = $b['$[]']($a)) !== false && $c !== nil) ? $c : $b['$[]=']($a, $scope.Hash)));
      ($a = "array_class", $b = options, ((($c = $b['$[]']($a)) !== false && $c !== nil) ? $c : $b['$[]=']($a, $scope.Array)));
      return to_opal(js_object, options.map);
    });

    $opal.defs(self, '$generate', function(obj, options) {
      var self = this;

      if (options == null) {
        options = $hash2([], {})
      }
      return obj.$to_json(options);
    });

    $opal.defs(self, '$dump', function(obj, io, limit) {
      var $a, self = this, string = nil;

      if (io == null) {
        io = nil
      }
      if (limit == null) {
        limit = nil
      }
      string = self.$generate(obj);
      if (io !== false && io !== nil) {
        if ((($a = io['$responds_to?']("to_io")) !== nil && (!$a._isBoolean || $a == true))) {
          io = io.$to_io()};
        io.$write(string);
        return io;
        } else {
        return string
      };
    });
    
  })(self);
  (function($base, $super) {
    function $Object(){};
    var self = $Object = $klass($base, $super, 'Object', $Object);

    var def = self._proto, $scope = self._scope;

    return ($opal.defn(self, '$to_json', function() {
      var self = this;

      return self.$to_s().$to_json();
    }), nil) && 'to_json'
  })(self, null);
  (function($base, $super) {
    function $Array(){};
    var self = $Array = $klass($base, $super, 'Array', $Array);

    var def = self._proto, $scope = self._scope;

    return (def.$to_json = function() {
      var self = this;

      
      var result = [];

      for (var i = 0, length = self.length; i < length; i++) {
        result.push((self[i]).$to_json());
      }

      return '[' + result.join(', ') + ']';
    
    }, nil) && 'to_json'
  })(self, null);
  (function($base, $super) {
    function $Boolean(){};
    var self = $Boolean = $klass($base, $super, 'Boolean', $Boolean);

    var def = self._proto, $scope = self._scope;

    return (def.$to_json = function() {
      var self = this;

      return (self == true) ? 'true' : 'false';
    }, nil) && 'to_json'
  })(self, null);
  (function($base, $super) {
    function $Hash(){};
    var self = $Hash = $klass($base, $super, 'Hash', $Hash);

    var def = self._proto, $scope = self._scope;

    return (def.$to_json = function() {
      var self = this;

      
      var inspect = [], keys = self.keys, map = self.map;

      for (var i = 0, length = keys.length; i < length; i++) {
        var key = keys[i];
        inspect.push((key).$to_s().$to_json() + ':' + (map[key]).$to_json());
      }

      return '{' + inspect.join(', ') + '}';
    ;
    }, nil) && 'to_json'
  })(self, null);
  (function($base, $super) {
    function $NilClass(){};
    var self = $NilClass = $klass($base, $super, 'NilClass', $NilClass);

    var def = self._proto, $scope = self._scope;

    return (def.$to_json = function() {
      var self = this;

      return "null";
    }, nil) && 'to_json'
  })(self, null);
  (function($base, $super) {
    function $Numeric(){};
    var self = $Numeric = $klass($base, $super, 'Numeric', $Numeric);

    var def = self._proto, $scope = self._scope;

    return (def.$to_json = function() {
      var self = this;

      return self.toString();
    }, nil) && 'to_json'
  })(self, null);
  (function($base, $super) {
    function $String(){};
    var self = $String = $klass($base, $super, 'String', $String);

    var def = self._proto, $scope = self._scope;

    return $opal.defn(self, '$to_json', def.$inspect)
  })(self, null);
  (function($base, $super) {
    function $Time(){};
    var self = $Time = $klass($base, $super, 'Time', $Time);

    var def = self._proto, $scope = self._scope;

    return (def.$to_json = function() {
      var self = this;

      return self.$strftime("%FT%T%z").$to_json();
    }, nil) && 'to_json'
  })(self, null);
  return (function($base, $super) {
    function $Date(){};
    var self = $Date = $klass($base, $super, 'Date', $Date);

    var def = self._proto, $scope = self._scope;

    def.$to_json = function() {
      var self = this;

      return self.$to_s().$to_json();
    };

    return (def.$as_json = function() {
      var self = this;

      return self.$to_s();
    }, nil) && 'as_json';
  })(self, null);
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/json.js.map
;
/* Generated by Opal 0.6.3 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $module = $opal.module, $hash = $opal.hash, $range = $opal.range, $hash2 = $opal.hash2;

  $opal.add_stubs(['$<<', '$-', '$split', '$inject', '$update', '$[]', '$to_vlq_signed', '$>', '$&', '$>>', '$|', '$base64_encode', '$join', '$shift', '$raise', '$base64_decode', '$==', '$+', '$from_vlq_signed', '$!', '$decode', '$protected', '$<', '$-@']);
  return (function($base, $super) {
    function $SourceMap(){};
    var self = $SourceMap = $klass($base, $super, 'SourceMap', $SourceMap);

    var def = self._proto, $scope = self._scope;

    return (function($base) {
      var self = $module($base, 'VLQ');

      var def = self._proto, $scope = self._scope, $a, $b, TMP_1;

      $opal.cdecl($scope, 'VLQ_BASE_SHIFT', 5);

      $opal.cdecl($scope, 'VLQ_BASE', (1)['$<<']($scope.VLQ_BASE_SHIFT));

      $opal.cdecl($scope, 'VLQ_BASE_MASK', $scope.VLQ_BASE['$-'](1));

      $opal.cdecl($scope, 'VLQ_CONTINUATION_BIT', $scope.VLQ_BASE);

      $opal.cdecl($scope, 'BASE64_DIGITS', "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".$split(""));

      $opal.cdecl($scope, 'BASE64_VALUES', ($a = ($b = ($range(0, 64, false))).$inject, $a._p = (TMP_1 = function(h, i){var self = TMP_1._s || this;
if (h == null) h = nil;if (i == null) i = nil;
      return h.$update($hash($scope.BASE64_DIGITS['$[]'](i), i))}, TMP_1._s = self, TMP_1), $a).call($b, $hash2([], {})));

      $opal.defs(self, '$encode', function(int$) {
        var $a, self = this, vlq = nil, encoded = nil, digit = nil;

        vlq = self.$to_vlq_signed(int$);
        encoded = [];
        while (vlq['$>'](0)) {
        digit = vlq['$&']($scope.VLQ_BASE_MASK);
        vlq = vlq['$>>']($scope.VLQ_BASE_SHIFT);
        if (vlq['$>'](0)) {
          digit = digit['$|']($scope.VLQ_CONTINUATION_BIT)};
        encoded['$<<'](self.$base64_encode(digit));};
        return encoded.$join();
      });

      $opal.defs(self, '$decode', function(str) {
        var $a, $b, self = this, vlq = nil, shift = nil, continue$ = nil, chars = nil, char$ = nil, digit = nil;

        vlq = 0;
        shift = 0;
        continue$ = true;
        chars = str.$split("");
        while (continue$ !== false && continue$ !== nil) {
        ((($b = char$ = chars.$shift()) !== false && $b !== nil) ? $b : self.$raise("Expected more digits in base 64 VLQ value."));
        digit = self.$base64_decode(char$);
        if ((digit['$&']($scope.VLQ_CONTINUATION_BIT))['$=='](0)) {
          continue$ = false};
        digit = digit['$&']($scope.VLQ_BASE_MASK);
        vlq = vlq['$+'](digit['$<<'](shift));
        shift = shift['$+']($scope.VLQ_BASE_SHIFT);};
        return [self.$from_vlq_signed(vlq), chars.$join("")];
      });

      $opal.defs(self, '$decode_array', function(str) {
        var $a, $b, self = this, output = nil, int$ = nil;

        output = [];
        while ((($b = str['$==']("")['$!']()) !== nil && (!$b._isBoolean || $b == true))) {
        $b = $opal.to_ary(self.$decode(str)), int$ = ($b[0] == null ? nil : $b[0]), str = ($b[1] == null ? nil : $b[1]);
        output['$<<'](int$);};
        return output;
      });

      self.$protected();

      $opal.defs(self, '$base64_encode', function(int$) {
        var $a, self = this;

        return ((($a = $scope.BASE64_DIGITS['$[]'](int$)) !== false && $a !== nil) ? $a : self.$raise($scope.ArgumentError, "" + (int$) + " is not a valid base64 digit"));
      });

      $opal.defs(self, '$base64_decode', function(char$) {
        var $a, self = this;

        return ((($a = $scope.BASE64_VALUES['$[]'](char$)) !== false && $a !== nil) ? $a : self.$raise($scope.ArgumentError, "" + (char$) + " is not a valid base64 digit"));
      });

      $opal.defs(self, '$to_vlq_signed', function(int$) {
        var self = this;

        if (int$['$<'](0)) {
          return ((int$['$-@']())['$<<'](1))['$+'](1)
          } else {
          return int$['$<<'](1)
        };
      });

      $opal.defs(self, '$from_vlq_signed', function(vlq) {
        var self = this;

        if (vlq['$&'](1)['$=='](1)) {
          return (vlq['$>>'](1))['$-@']()
          } else {
          return vlq['$>>'](1)
        };
      });
      
    })(self)
  })(self, null)
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/source_map/vlq.js.map
;
/* Generated by Opal 0.6.3 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $module = $opal.module, $hash2 = $opal.hash2, $range = $opal.range;

  $opal.add_stubs(['$attr_accessor', '$!', '$[]', '$raise', '$<', '$empty?', '$-', '$keys', '$inspect', '$generated_line', '$generated_line=', '$generated_col', '$generated_col=', '$each', '$==', '$+', '$[]=', '$<<', '$mappings', '$size', '$split', '$serialize_mappings!', '$version', '$file', '$source_root', '$sources', '$names', '$to_json', '$as_json', '$open', '$to_s', '$protected', '$attr_reader', '$source_ids', '$name_ids', '$encode', '$new', '$group_by', '$join', '$map', '$sort_by', '$serialize_mapping', '$max', '$vlq', '$source_id', '$name_id']);
  return (function($base, $super) {
    function $SourceMap(){};
    var self = $SourceMap = $klass($base, $super, 'SourceMap', $SourceMap);

    var def = self._proto, $scope = self._scope;

    return (function($base) {
      var self = $module($base, 'Generator');

      var def = self._proto, $scope = self._scope;

      self.$attr_accessor("generated_output");

      def.$add_generated = function(text, opts) {
        var $a, $b, $c, $d, TMP_1, self = this, remain = nil, source_line = nil, source_col = nil, generated_output = nil;

        if (opts == null) {
          opts = $hash2([], {})
        }
        if ((($a = ($b = opts['$[]']("source")['$!'](), $b !== false && $b !== nil ?(((($c = ((($d = opts['$[]']("name")) !== false && $d !== nil) ? $d : opts['$[]']("source_line"))) !== false && $c !== nil) ? $c : opts['$[]']("source_col"))) : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          self.$raise("mapping must have :source to have :source_line, :source_col or :name")
        } else if ((($a = ($b = opts['$[]']("source_line"), $b !== false && $b !== nil ?opts['$[]']("source_line")['$<'](1) : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          self.$raise("files start on line 1 (got :source_line => " + (opts['$[]']("source_line")) + ")")
        } else if ((($a = ((remain = opts.$keys()['$-'](["source", "source_line", "source_col", "name", "exact_position"])))['$empty?']()['$!']()) !== nil && (!$a._isBoolean || $a == true))) {
          self.$raise("mapping had unexpected keys: " + (remain.$inspect()))};
        source_line = ((($a = opts['$[]']("source_line")) !== false && $a !== nil) ? $a : 1);
        source_col = ((($a = opts['$[]']("source_col")) !== false && $a !== nil) ? $a : 0);
        ($a = self, ((($b = $a.$generated_line()) !== false && $b !== nil) ? $b : $a['$generated_line='](1)));
        ($a = self, ((($b = $a.$generated_col()) !== false && $b !== nil) ? $b : $a['$generated_col='](0)));
        ($a = ($b = text.$split(/(\n)/)).$each, $a._p = (TMP_1 = function(line){var self = TMP_1._s || this, $a, mapping = nil;
if (line == null) line = nil;
        if (line['$==']("\n")) {
            ($a = self, $a['$generated_line=']($a.$generated_line()['$+'](1)));
            self['$generated_col='](0);
            if ((($a = opts['$[]']("exact_position")) !== nil && (!$a._isBoolean || $a == true))) {
              return nil
              } else {
              source_line = source_line['$+'](1);
              return source_col = 0;
            };
          } else if ((($a = line['$==']("")['$!']()) !== nil && (!$a._isBoolean || $a == true))) {
            mapping = $hash2(["generated_line", "generated_col"], {"generated_line": self.$generated_line(), "generated_col": self.$generated_col()});
            if ((($a = opts['$[]']("source")) !== nil && (!$a._isBoolean || $a == true))) {
              mapping['$[]=']("source", opts['$[]']("source"));
              mapping['$[]=']("source_line", source_line);
              mapping['$[]=']("source_col", source_col);
              if ((($a = opts['$[]']("name")) !== nil && (!$a._isBoolean || $a == true))) {
                mapping['$[]=']("name", opts['$[]']("name"))};};
            self.$mappings()['$<<'](mapping);
            ($a = self, $a['$generated_col=']($a.$generated_col()['$+'](line.$size())));
            if ((($a = opts['$[]']("exact_position")) !== nil && (!$a._isBoolean || $a == true))) {
              return nil
              } else {
              return source_col = source_col['$+'](line.$size())
            };
            } else {
            return nil
          }}, TMP_1._s = self, TMP_1), $a).call($b);
        if (generated_output !== false && generated_output !== nil) {
          return generated_output = generated_output['$+'](text)
          } else {
          return nil
        };
      };

      def.$add_mapping = function(map) {
        var $a, $b, $c, self = this, remain = nil;

        if ((($a = ((($b = map['$[]']("generated_line")['$!']()) !== false && $b !== nil) ? $b : map['$[]']("generated_col")['$!']())) !== nil && (!$a._isBoolean || $a == true))) {
          self.$raise("mapping must have :generated_line and :generated_col")
        } else if ((($a = ($b = map['$[]']("source"), $b !== false && $b !== nil ?(($c = map['$[]']("source_line"), $c !== false && $c !== nil ?map['$[]']("source_col") : $c))['$!']() : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          self.$raise("mapping must have :source_line and :source_col if it has :source")
        } else if ((($a = ($b = map['$[]']("source")['$!'](), $b !== false && $b !== nil ?(((($c = map['$[]']("source_line")) !== false && $c !== nil) ? $c : map['$[]']("source_col"))) : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          self.$raise("mapping may not have a :source_line or :source_col without a :source")
        } else if ((($a = ($b = map['$[]']("name"), $b !== false && $b !== nil ?map['$[]']("source")['$!']() : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          self.$raise("mapping may not have a :name without a :source")
        } else if ((($a = ($b = map['$[]']("source_line"), $b !== false && $b !== nil ?map['$[]']("source_line")['$<'](1) : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          self.$raise("files start on line 1 (got :source_line => " + (map['$[]']("source_line")) + ")")
        } else if (map['$[]']("generated_line")['$<'](1)) {
          self.$raise("files start on line 1 (got :generated_line => " + (map['$[]']("generated_line")) + ")")
        } else if ((($a = ((remain = map.$keys()['$-'](["generated_line", "generated_col", "source", "source_line", "source_col", "name"])))['$empty?']()['$!']()) !== nil && (!$a._isBoolean || $a == true))) {
          self.$raise("mapping had unexpected keys: " + (remain.$inspect()))};
        return self.$mappings()['$<<'](map);
      };

      def.$as_json = function() {
        var self = this, serialized_mappings = nil;

        serialized_mappings = self['$serialize_mappings!']();
        return $hash2(["version", "file", "sourceRoot", "sources", "names", "mappings"], {"version": self.$version(), "file": self.$file(), "sourceRoot": self.$source_root(), "sources": self.$sources(), "names": self.$names(), "mappings": serialized_mappings});
      };

      def.$to_s = function() {
        var self = this;

        return self.$as_json().$to_json();
      };

      def.$save = function(file) {
        var $a, $b, TMP_2, self = this;

        return ($a = ($b = $scope.File).$open, $a._p = (TMP_2 = function(f){var self = TMP_2._s || this;
if (f == null) f = nil;
        return f['$<<'](self.$to_s())}, TMP_2._s = self, TMP_2), $a).call($b, file, "w");
      };

      self.$protected();

      self.$attr_reader("source_ids", "name_ids");

      self.$attr_accessor("generated_line", "generated_col");

      def.$source_id = function(file) {
        var $a, self = this, cached = nil;

        if ((($a = (cached = self.$source_ids()['$[]'](file))) !== nil && (!$a._isBoolean || $a == true))) {
          return cached
          } else {
          self.$sources()['$<<'](file);
          return self.$source_ids()['$[]='](file, self.$sources().$size()['$-'](1));
        };
      };

      def.$name_id = function(name) {
        var $a, self = this, cached = nil;

        if ((($a = (cached = self.$name_ids()['$[]'](self.$file()))) !== nil && (!$a._isBoolean || $a == true))) {
          return cached
          } else {
          self.$names()['$<<'](name);
          return self.$name_ids()['$[]='](self.$file(), self.$names().$size()['$-'](1));
        };
      };

      def.$vlq = function(num, type) {
        var self = this, ret = nil;
        if (self.previous_vlq == null) self.previous_vlq = nil;

        ret = num['$-'](self.previous_vlq['$[]'](type));
        self.previous_vlq['$[]='](type, num);
        return $scope.VLQ.$encode(ret);
      };

      def['$serialize_mappings!'] = function() {
        var $a, $b, TMP_3, $c, TMP_4, $d, TMP_5, self = this, by_lines = nil;

        self.sources = [];
        self.source_ids = $hash2([], {});
        self.names = [];
        self.name_ids = $hash2([], {});
        self.previous_vlq = ($a = ($b = $scope.Hash).$new, $a._p = (TMP_3 = function(){var self = TMP_3._s || this;

        return 0}, TMP_3._s = self, TMP_3), $a).call($b);
        if ((($a = self.$mappings()['$empty?']()) !== nil && (!$a._isBoolean || $a == true))) {
          return ""};
        by_lines = ($a = ($c = self.$mappings()).$group_by, $a._p = (TMP_4 = function(x){var self = TMP_4._s || this;
if (x == null) x = nil;
        return x['$[]']("generated_line")}, TMP_4._s = self, TMP_4), $a).call($c);
        return ($a = ($d = ($range(1, by_lines.$keys().$max(), false))).$map, $a._p = (TMP_5 = function(line){var self = TMP_5._s || this, $a, $b, TMP_6, $c, TMP_7, fragments = nil;
          if (self.previous_vlq == null) self.previous_vlq = nil;
if (line == null) line = nil;
        self.previous_vlq['$[]=']("generated_col", 0);
          fragments = ($a = ($b = (((($c = by_lines['$[]'](line)) !== false && $c !== nil) ? $c : []))).$sort_by, $a._p = (TMP_6 = function(x){var self = TMP_6._s || this;
if (x == null) x = nil;
          return x['$[]']("generated_col")}, TMP_6._s = self, TMP_6), $a).call($b);
          return ($a = ($c = fragments).$map, $a._p = (TMP_7 = function(map){var self = TMP_7._s || this;
if (map == null) map = nil;
          return self.$serialize_mapping(map)}, TMP_7._s = self, TMP_7), $a).call($c).$join(",");}, TMP_5._s = self, TMP_5), $a).call($d).$join(";");
      };

      def.$serialize_mapping = function(map) {
        var $a, self = this, item = nil;

        item = self.$vlq(map['$[]']("generated_col"), "generated_col");
        if ((($a = map['$[]']("source")) !== nil && (!$a._isBoolean || $a == true))) {
          item = item['$+'](self.$vlq(self.$source_id(map['$[]']("source")), "source"));
          item = item['$+'](self.$vlq(map['$[]']("source_line")['$-'](1), "source_line"));
          item = item['$+'](self.$vlq(map['$[]']("source_col"), "source_col"));
          if ((($a = map['$[]']("name")) !== nil && (!$a._isBoolean || $a == true))) {
            item = item['$+'](self.$vlq(self.$name_id(map['$[]']("name")), "name"))};};
        return item;
      };
            ;$opal.donate(self, ["$add_generated", "$add_mapping", "$as_json", "$to_s", "$save", "$source_id", "$name_id", "$vlq", "$serialize_mappings!", "$serialize_mapping"]);
    })(self)
  })(self, null)
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/source_map/generator.js.map
;
/* Generated by Opal 0.6.3 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2, $module = $opal.module;

  $opal.add_stubs(['$==', '$[]', '$raise', '$new', '$parse_mappings', '$from_json', '$parse', '$from_s', '$read', '$each_with_index', '$[]=', '$each', '$<<', '$mappings', '$parse_mapping', '$+', '$split', '$mappings=', '$sort_by', '$decode_array', '$include?', '$size', '$file', '$undiff', '$>=', '$sources', '$names', '$<', '$key?', '$nil?']);
  return (function($base, $super) {
    function $SourceMap(){};
    var self = $SourceMap = $klass($base, $super, 'SourceMap', $SourceMap);

    var def = self._proto, $scope = self._scope;

    (function($base, $super) {
      function $ParserError(){};
      var self = $ParserError = $klass($base, $super, 'ParserError', $ParserError);

      var def = self._proto, $scope = self._scope;

      return nil;
    })(self, $scope.RuntimeError);

    $opal.defs(self, '$from_json', function(json) {
      var $a, self = this, map = nil;

      if (json['$[]']("version")['$=='](3)) {
        } else {
        self.$raise($scope.ParserError, "Cannot parse version: " + (json['$[]']("version")) + " of SourceMap")
      };
      map = self.$new($hash2(["file", "source_root", "sources", "names"], {"file": json['$[]']("file"), "source_root": json['$[]']("sourceRoot"), "sources": json['$[]']("sources"), "names": json['$[]']("names")}));
      map.$parse_mappings(((($a = json['$[]']("mappings")) !== false && $a !== nil) ? $a : ""));
      return map;
    });

    $opal.defs(self, '$from_s', function(str) {
      var self = this;

      return self.$from_json($scope.JSON.$parse(str));
    });

    $opal.defs(self, '$load', function(filename) {
      var self = this;

      return self.$from_s($scope.File.$read(filename));
    });

    return (function($base) {
      var self = $module($base, 'Parser');

      var def = self._proto, $scope = self._scope;

      def.$parse_mappings = function(string) {
        var $a, $b, TMP_1, $c, TMP_2, $d, TMP_4, self = this;

        self.previous = ($a = ($b = $scope.Hash).$new, $a._p = (TMP_1 = function(){var self = TMP_1._s || this;

        return 0}, TMP_1._s = self, TMP_1), $a).call($b);
        ($a = ($c = string.$split(";")).$each_with_index, $a._p = (TMP_2 = function(line, line_idx){var self = TMP_2._s || this, $a, $b, TMP_3;
          if (self.previous == null) self.previous = nil;
if (line == null) line = nil;if (line_idx == null) line_idx = nil;
        self.previous['$[]=']("generated_col", 0);
          return ($a = ($b = line.$split(",")).$each, $a._p = (TMP_3 = function(segment){var self = TMP_3._s || this;
if (segment == null) segment = nil;
          return self.$mappings()['$<<'](self.$parse_mapping(segment, line_idx['$+'](1)))}, TMP_3._s = self, TMP_3), $a).call($b);}, TMP_2._s = self, TMP_2), $a).call($c);
        return self['$mappings='](($a = ($d = self.$mappings()).$sort_by, $a._p = (TMP_4 = function(x){var self = TMP_4._s || this;
if (x == null) x = nil;
        return [x['$[]']("generated_line"), x['$[]']("generated_col")]}, TMP_4._s = self, TMP_4), $a).call($d));
      };

      def.$undiff = function(int$, type) {
        var $a, $b, self = this;
        if (self.previous == null) self.previous = nil;

        return ($a = type, $b = self.previous, $b['$[]=']($a, $b['$[]']($a)['$+'](int$)));
      };

      def.$parse_mapping = function(segment, line_num) {
        var $a, $b, $c, self = this, item = nil, map = nil;
        if (self.previous == null) self.previous = nil;

        item = $scope.VLQ.$decode_array(segment);
        if ((($a = [1, 4, 5]['$include?'](item.$size())) !== nil && (!$a._isBoolean || $a == true))) {
          } else {
          self.$raise($scope.ParserError, "In map for " + (self.$file()) + ":" + (line_num) + ": unparseable item: " + (segment))
        };
        map = $hash2(["generated_line", "generated_col"], {"generated_line": line_num, "generated_col": self.$undiff(item['$[]'](0), "generated_col")});
        if (item.$size()['$>='](4)) {
          map['$[]=']("source", self.$sources()['$[]'](self.$undiff(item['$[]'](1), "source_id")));
          map['$[]=']("source_line", self.$undiff(item['$[]'](2), "source_line")['$+'](1));
          map['$[]=']("source_col", self.$undiff(item['$[]'](3), "source_col"));
          if ((($a = item['$[]'](4)) !== nil && (!$a._isBoolean || $a == true))) {
            map['$[]=']("name", self.$names()['$[]'](self.$undiff(item['$[]'](4), "name_id")))};};
        if (map['$[]']("generated_col")['$<'](0)) {
          return self.$raise($scope.ParserError, "In map for " + (self.$file()) + ":" + (line_num) + ": unexpected generated_col: " + (map['$[]']("generated_col")))
        } else if ((($a = ($b = map['$key?']("source"), $b !== false && $b !== nil ?(((($c = map['$[]']("source")['$nil?']()) !== false && $c !== nil) ? $c : self.previous['$[]']("source_id")['$<'](0))) : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          return self.$raise($scope.ParserError, "In map for " + (self.$file()) + ":" + (line_num) + ": unknown source id: " + (self.previous['$[]']("source_id")))
        } else if ((($a = ($b = map['$key?']("source_line"), $b !== false && $b !== nil ?map['$[]']("source_line")['$<'](1) : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          return self.$raise($scope.ParserError, "In map for " + (self.$file()) + ":" + (line_num) + ": unexpected source_line: " + (map['$[]']("source_line")))
        } else if ((($a = ($b = map['$key?']("source_col"), $b !== false && $b !== nil ?map['$[]']("source_col")['$<'](0) : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          return self.$raise($scope.ParserError, "In map for " + (self.$file()) + ":" + (line_num) + ": unexpected source_col: " + (map['$[]']("source_col")))
        } else if ((($a = ($b = map['$key?']("name"), $b !== false && $b !== nil ?(((($c = map['$[]']("name")['$nil?']()) !== false && $c !== nil) ? $c : self.previous['$[]']("name_id")['$<'](0))) : $b)) !== nil && (!$a._isBoolean || $a == true))) {
          return self.$raise($scope.ParserError, "In map for " + (self.$file()) + ":" + (line_num) + ": unknown name id: " + (self.previous['$[]']("name_id")))
          } else {
          return map
        };
      };
            ;$opal.donate(self, ["$parse_mappings", "$undiff", "$parse_mapping"]);
    })(self);
  })(self, null)
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/source_map/parser.js.map
;
/* Generated by Opal 0.6.3 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2;

  $opal.add_stubs(['$include', '$empty?', '$-', '$keys', '$raise', '$inspect', '$generated_output=', '$[]', '$file=', '$source_root=', '$version=', '$sources=', '$names=', '$mappings=', '$!', '$==', '$version', '$attr_accessor']);
  ;
  ;
  ;
  ;
  return (function($base, $super) {
    function $SourceMap(){};
    var self = $SourceMap = $klass($base, $super, 'SourceMap', $SourceMap);

    var def = self._proto, $scope = self._scope;

    self.$include(($scope.SourceMap)._scope.Generator);

    self.$include(($scope.SourceMap)._scope.Parser);

    def.$initialize = function(opts) {
      var $a, self = this, remain = nil;

      if (opts == null) {
        opts = $hash2([], {})
      }
      if ((($a = ((remain = opts.$keys()['$-'](["generated_output", "file", "source_root", "sources", "names", "version"])))['$empty?']()) !== nil && (!$a._isBoolean || $a == true))) {
        } else {
        self.$raise($scope.ArgumentError, "Unsupported options to SourceMap.new: " + (remain.$inspect()))
      };
      self['$generated_output='](opts['$[]']("generated_output"));
      self['$file='](((($a = opts['$[]']("file")) !== false && $a !== nil) ? $a : ""));
      self['$source_root='](((($a = opts['$[]']("source_root")) !== false && $a !== nil) ? $a : ""));
      self['$version='](((($a = opts['$[]']("version")) !== false && $a !== nil) ? $a : 3));
      self['$sources='](((($a = opts['$[]']("sources")) !== false && $a !== nil) ? $a : []));
      self['$names='](((($a = opts['$[]']("names")) !== false && $a !== nil) ? $a : []));
      self['$mappings=']([]);
      if ((($a = self.$version()['$=='](3)['$!']()) !== nil && (!$a._isBoolean || $a == true))) {
        return self.$raise("version " + (opts['$[]']("version")) + " not supported")
        } else {
        return nil
      };
    };

    self.$attr_accessor("file");

    self.$attr_accessor("source_root");

    self.$attr_accessor("version");

    self.$attr_accessor("sources");

    self.$attr_accessor("names");

    return self.$attr_accessor("mappings");
  })(self, null);
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/source_map.js.map
;
