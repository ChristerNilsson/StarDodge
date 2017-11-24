// Generated by CoffeeScript 1.12.7
var StarDodge, draw, mousePressed, mouseReleased, pressed, setup, stardodge, touchEnded, touchStarted;

stardodge = null;

pressed = false;

StarDodge = (function() {
  function StarDodge(level, d1) {
    this.level = level != null ? level : 0;
    this.d = d1 != null ? d1 : 50;
    this.startNewGame(1);
  }

  StarDodge.prototype.startNewGame = function(dlevel) {
    var d, i, j, k, l, len, len1, len2, m, ref, ref1, ref2, ref3, ref4, x, y;
    if (dlevel === 1) {
      this.stars = [];
      d = this.d / 2;
      ref = range(1, height / this.d);
      for (k = 0, len = ref.length; k < len; k++) {
        j = ref[k];
        ref1 = range(1, width / this.d);
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          i = ref1[l];
          this.stars.push([this.d * i + int(random(-d, d)), this.d * j + int(random(-d, d))]);
        }
      }
    }
    this.level += dlevel;
    ref2 = [0, height / 2], this.x = ref2[0], this.y = ref2[1];
    bg(0.5);
    sc(0);
    ref3 = this.stars;
    for (m = 0, len2 = ref3.length; m < len2; m++) {
      ref4 = ref3[m], x = ref4[0], y = ref4[1];
      circle(x, y, this.level);
    }
    return rect(width - 3, 0.4 * height, 2, 0.2 * height);
  };

  StarDodge.prototype.draw = function() {
    var k, len, ref, ref1, ref2, ref3, x, y;
    ref = [this.x + 1, this.y + (pressed || keyIsDown(32) ? 1 : -1)], this.x = ref[0], this.y = ref[1];
    sc(1);
    point(this.x, this.y);
    if (this.x > width && (0.4 * height < (ref1 = this.y) && ref1 < 0.6 * height)) {
      return this.startNewGame(1);
    }
    if (this.y < 0 || this.y > height || this.x > width) {
      return this.startNewGame(0);
    }
    ref2 = this.stars;
    for (k = 0, len = ref2.length; k < len; k++) {
      ref3 = ref2[k], x = ref3[0], y = ref3[1];
      if (dist(this.x, this.y, x, y) < this.level) {
        return this.startNewGame(0);
      }
    }
  };

  return StarDodge;

})();

setup = function() {
  createCanvas(windowWidth, windowHeight);
  return stardodge = new StarDodge;
};

draw = function() {
  return stardodge.draw();
};

mousePressed = function() {
  pressed = true;
  return false;
};

mouseReleased = function() {
  pressed = false;
  return false;
};

touchStarted = function() {
  pressed = true;
  return false;
};

touchEnded = function() {
  pressed = false;
  return false;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsU0FBQSxHQUFZOztBQUNaLE9BQUEsR0FBVTs7QUFFSjtFQUNTLG1CQUFDLEtBQUQsRUFBVyxFQUFYO0lBQUMsSUFBQyxDQUFBLHdCQUFELFFBQU87SUFBRyxJQUFDLENBQUEsaUJBQUQsS0FBRztJQUFPLElBQUMsQ0FBQSxZQUFELENBQWMsQ0FBZDtFQUFyQjs7c0JBQ2QsWUFBQSxHQUFlLFNBQUMsTUFBRDtBQUNkLFFBQUE7SUFBQSxJQUFHLE1BQUEsS0FBUSxDQUFYO01BQ0MsSUFBQyxDQUFBLEtBQUQsR0FBUztNQUNULENBQUEsR0FBSSxJQUFDLENBQUEsQ0FBRCxHQUFHO0FBQ1A7QUFBQSxXQUFBLHFDQUFBOztBQUFBO0FBQUEsYUFBQSx3Q0FBQTs7VUFBQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxDQUFDLElBQUMsQ0FBQSxDQUFELEdBQUcsQ0FBSCxHQUFLLEdBQUEsQ0FBSSxNQUFBLENBQU8sQ0FBQyxDQUFSLEVBQVUsQ0FBVixDQUFKLENBQU4sRUFBd0IsSUFBQyxDQUFBLENBQUQsR0FBRyxDQUFILEdBQUssR0FBQSxDQUFJLE1BQUEsQ0FBTyxDQUFDLENBQVIsRUFBVSxDQUFWLENBQUosQ0FBN0IsQ0FBWjtBQUFBO0FBQUEsT0FIRDs7SUFJQSxJQUFDLENBQUEsS0FBRCxJQUFVO0lBQ1YsT0FBVSxDQUFDLENBQUQsRUFBRyxNQUFBLEdBQU8sQ0FBVixDQUFWLEVBQUMsSUFBQyxDQUFBLFdBQUYsRUFBSSxJQUFDLENBQUE7SUFDTCxFQUFBLENBQUcsR0FBSDtJQUNBLEVBQUEsQ0FBRyxDQUFIO0FBQ0E7QUFBQSxTQUFBLHdDQUFBO3NCQUFLLGFBQUU7TUFDTixNQUFBLENBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxJQUFDLENBQUEsS0FBWjtBQUREO1dBRUEsSUFBQSxDQUFLLEtBQUEsR0FBTSxDQUFYLEVBQWEsR0FBQSxHQUFJLE1BQWpCLEVBQXdCLENBQXhCLEVBQTBCLEdBQUEsR0FBSSxNQUE5QjtFQVhjOztzQkFZZixJQUFBLEdBQU8sU0FBQTtBQUNOLFFBQUE7SUFBQSxNQUFVLENBQUMsSUFBQyxDQUFBLENBQUQsR0FBRyxDQUFKLEVBQU8sSUFBQyxDQUFBLENBQUQsR0FBSyxDQUFHLE9BQUEsSUFBVyxTQUFBLENBQVUsRUFBVixDQUFkLEdBQWdDLENBQWhDLEdBQXVDLENBQUMsQ0FBeEMsQ0FBWixDQUFWLEVBQUMsSUFBQyxDQUFBLFVBQUYsRUFBSSxJQUFDLENBQUE7SUFDTCxFQUFBLENBQUcsQ0FBSDtJQUNBLEtBQUEsQ0FBTSxJQUFDLENBQUEsQ0FBUCxFQUFTLElBQUMsQ0FBQSxDQUFWO0lBQ0EsSUFBRyxJQUFDLENBQUEsQ0FBRCxHQUFLLEtBQUwsSUFBZSxDQUFBLEdBQUEsR0FBSSxNQUFKLFdBQWEsSUFBQyxDQUFBLEVBQWQsUUFBQSxHQUFrQixHQUFBLEdBQUksTUFBdEIsQ0FBbEI7QUFBb0QsYUFBTyxJQUFDLENBQUEsWUFBRCxDQUFjLENBQWQsRUFBM0Q7O0lBQ0EsSUFBRyxJQUFDLENBQUEsQ0FBRCxHQUFHLENBQUgsSUFBUSxJQUFDLENBQUEsQ0FBRCxHQUFHLE1BQVgsSUFBcUIsSUFBQyxDQUFBLENBQUQsR0FBRyxLQUEzQjtBQUFzQyxhQUFPLElBQUMsQ0FBQSxZQUFELENBQWMsQ0FBZCxFQUE3Qzs7QUFDQTtBQUFBLFNBQUEsc0NBQUE7c0JBQUssYUFBRTtNQUNOLElBQUcsSUFBQSxDQUFLLElBQUMsQ0FBQSxDQUFOLEVBQVEsSUFBQyxDQUFBLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFBLEdBQWtCLElBQUMsQ0FBQSxLQUF0QjtBQUFpQyxlQUFPLElBQUMsQ0FBQSxZQUFELENBQWMsQ0FBZCxFQUF4Qzs7QUFERDtFQU5NOzs7Ozs7QUFRUixLQUFBLEdBQVEsU0FBQTtFQUNQLFlBQUEsQ0FBYSxXQUFiLEVBQXlCLFlBQXpCO1NBQ0EsU0FBQSxHQUFZLElBQUk7QUFGVDs7QUFHUixJQUFBLEdBQU8sU0FBQTtTQUFHLFNBQVMsQ0FBQyxJQUFWLENBQUE7QUFBSDs7QUFFUCxZQUFBLEdBQWUsU0FBQTtFQUNkLE9BQUEsR0FBUTtTQUNSO0FBRmM7O0FBR2YsYUFBQSxHQUFnQixTQUFBO0VBQ2YsT0FBQSxHQUFRO1NBQ1I7QUFGZTs7QUFHaEIsWUFBQSxHQUFlLFNBQUE7RUFDZCxPQUFBLEdBQVE7U0FDUjtBQUZjOztBQUdmLFVBQUEsR0FBYSxTQUFBO0VBQ1osT0FBQSxHQUFRO1NBQ1I7QUFGWSIsInNvdXJjZXNDb250ZW50IjpbInN0YXJkb2RnZSA9IG51bGxcclxucHJlc3NlZCA9IGZhbHNlXHJcblxyXG5jbGFzcyBTdGFyRG9kZ2VcclxuXHRjb25zdHJ1Y3RvciA6IChAbGV2ZWw9MCwgQGQ9NTApIC0+IEBzdGFydE5ld0dhbWUgMVxyXG5cdHN0YXJ0TmV3R2FtZSA6IChkbGV2ZWwpIC0+XHJcblx0XHRpZiBkbGV2ZWw9PTFcclxuXHRcdFx0QHN0YXJzID0gW11cclxuXHRcdFx0ZCA9IEBkLzJcclxuXHRcdFx0QHN0YXJzLnB1c2ggW0BkKmkraW50KHJhbmRvbSAtZCxkKSwgQGQqaitpbnQocmFuZG9tIC1kLGQpXSBmb3IgaSBpbiByYW5nZSAxLHdpZHRoL0BkIGZvciBqIGluIHJhbmdlIDEsaGVpZ2h0L0BkXHJcblx0XHRAbGV2ZWwgKz0gZGxldmVsXHJcblx0XHRbQHgsQHldID0gWzAsaGVpZ2h0LzJdXHJcblx0XHRiZyAwLjVcclxuXHRcdHNjIDBcclxuXHRcdGZvciBbeCx5XSBpbiBAc3RhcnNcclxuXHRcdFx0Y2lyY2xlIHgseSxAbGV2ZWxcclxuXHRcdHJlY3Qgd2lkdGgtMywwLjQqaGVpZ2h0LDIsMC4yKmhlaWdodFxyXG5cdGRyYXcgOiAtPlxyXG5cdFx0W0B4LEB5XSA9IFtAeCsxLCBAeSArIGlmIHByZXNzZWQgb3Iga2V5SXNEb3duIDMyIHRoZW4gMSBlbHNlIC0xXVxyXG5cdFx0c2MgMVxyXG5cdFx0cG9pbnQgQHgsQHlcclxuXHRcdGlmIEB4ID4gd2lkdGggYW5kIDAuNCpoZWlnaHQgPCBAeSA8IDAuNipoZWlnaHQgdGhlbiByZXR1cm4gQHN0YXJ0TmV3R2FtZSAxXHJcblx0XHRpZiBAeTwwIG9yIEB5PmhlaWdodCBvciBAeD53aWR0aCB0aGVuIHJldHVybiBAc3RhcnROZXdHYW1lIDBcclxuXHRcdGZvciBbeCx5XSBpbiBAc3RhcnNcclxuXHRcdFx0aWYgZGlzdChAeCxAeSx4LHkpIDwgQGxldmVsIHRoZW4gcmV0dXJuIEBzdGFydE5ld0dhbWUgMFxyXG5zZXR1cCA9IC0+XHJcblx0Y3JlYXRlQ2FudmFzIHdpbmRvd1dpZHRoLHdpbmRvd0hlaWdodFxyXG5cdHN0YXJkb2RnZSA9IG5ldyBTdGFyRG9kZ2VcclxuZHJhdyA9IC0+IHN0YXJkb2RnZS5kcmF3KClcclxuXHJcbm1vdXNlUHJlc3NlZCA9IC0+IFxyXG5cdHByZXNzZWQ9dHJ1ZVxyXG5cdGZhbHNlXHJcbm1vdXNlUmVsZWFzZWQgPSAtPiBcclxuXHRwcmVzc2VkPWZhbHNlXHJcblx0ZmFsc2VcclxudG91Y2hTdGFydGVkID0gLT4gXHJcblx0cHJlc3NlZD10cnVlXHJcblx0ZmFsc2VcclxudG91Y2hFbmRlZCA9IC0+IFxyXG5cdHByZXNzZWQ9ZmFsc2VcclxuXHRmYWxzZSJdfQ==
//# sourceURL=C:\github\StarDodge\coffee\sketch.coffee