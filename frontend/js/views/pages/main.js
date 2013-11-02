// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('views/pages/main', ['views/pages/PageView', 'views/IconSelectView', 'models/IconSelectModel'], function(PageView, IconSelectView, IconSelectModel) {
    var Main, _ref;

    Main = (function(_super) {
      __extends(Main, _super);

      function Main() {
        _ref = Main.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Main.prototype.template = '#main-template';

      Main.prototype.className = "cf";

      Main.prototype.initialize = function() {
        this.loadSvg();
        Main.__super__.initialize.apply(this, arguments);
        return this;
      };

      Main.prototype.loadSvg = function() {
        return App.$svgWrap.load('css/icons-main-page.svg');
      };

      Main.prototype.render = function() {
        Main.__super__.render.apply(this, arguments);
        this.iconSelectView = new IconSelectView({
          model: new IconSelectModel,
          $el: this.$('#js-icons-select-view-place'),
          isRender: true
        });
        this.$mainLogo = this.$('.main-logo-b');
        this.$melon = this.$('.logo-large-e');
        this.$mainSection = this.$('#js-icons-select-view-place');
        !App.mainAnimated && this.animate();
        App.mainAnimated && this.show();
        return this;
      };

      Main.prototype.animate = function() {
        var _this = this;

        this.$mainLogo.addClass('animated fadeInRightBig');
        setTimeout((function() {
          return _this.$melon.addClass('animated swing').removeClass('is-rotated');
        }), 450);
        return setTimeout((function() {
          _this.$mainSection.addClass('animated fadeInDown');
          return App.mainAnimated = true;
        }), 1000);
      };

      Main.prototype.show = function() {
        this.$mainLogo.addClass('is-no-translateX');
        this.$melon.removeClass('is-rotated');
        this.$mainSection.addClass('animated fadeInDown');
        return this.$mainLogo.addClass('animated fadeInDown');
      };

      return Main;

    })(PageView);
    return Main;
  });

}).call(this);
