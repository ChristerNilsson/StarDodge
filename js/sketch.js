// Generated by CoffeeScript 1.12.7
var StarDodge, draw, setup, stardodge;

stardodge = null;

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
    ref = [this.x + 1, this.y + (mouseIsPressed || keyIsDown(32) ? 1 : -1)], this.x = ref[0], this.y = ref[1];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsU0FBQSxHQUFZOztBQUVOO0VBQ1MsbUJBQUMsS0FBRCxFQUFXLEVBQVg7SUFBQyxJQUFDLENBQUEsd0JBQUQsUUFBTztJQUFHLElBQUMsQ0FBQSxpQkFBRCxLQUFHO0lBQU8sSUFBQyxDQUFBLFlBQUQsQ0FBYyxDQUFkO0VBQXJCOztzQkFDZCxZQUFBLEdBQWUsU0FBQyxNQUFEO0FBQ2QsUUFBQTtJQUFBLElBQUcsTUFBQSxLQUFRLENBQVg7TUFDQyxJQUFDLENBQUEsS0FBRCxHQUFTO01BQ1QsQ0FBQSxHQUFJLElBQUMsQ0FBQSxDQUFELEdBQUc7QUFDUDtBQUFBLFdBQUEscUNBQUE7O0FBQUE7QUFBQSxhQUFBLHdDQUFBOztVQUFBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLENBQUMsSUFBQyxDQUFBLENBQUQsR0FBRyxDQUFILEdBQUssR0FBQSxDQUFJLE1BQUEsQ0FBTyxDQUFDLENBQVIsRUFBVSxDQUFWLENBQUosQ0FBTixFQUF3QixJQUFDLENBQUEsQ0FBRCxHQUFHLENBQUgsR0FBSyxHQUFBLENBQUksTUFBQSxDQUFPLENBQUMsQ0FBUixFQUFVLENBQVYsQ0FBSixDQUE3QixDQUFaO0FBQUE7QUFBQSxPQUhEOztJQUlBLElBQUMsQ0FBQSxLQUFELElBQVU7SUFDVixPQUFVLENBQUMsQ0FBRCxFQUFHLE1BQUEsR0FBTyxDQUFWLENBQVYsRUFBQyxJQUFDLENBQUEsV0FBRixFQUFJLElBQUMsQ0FBQTtJQUNMLEVBQUEsQ0FBRyxHQUFIO0lBQ0EsRUFBQSxDQUFHLENBQUg7QUFDQTtBQUFBLFNBQUEsd0NBQUE7c0JBQUssYUFBRTtNQUNOLE1BQUEsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLElBQUMsQ0FBQSxLQUFaO0FBREQ7V0FFQSxJQUFBLENBQUssS0FBQSxHQUFNLENBQVgsRUFBYSxHQUFBLEdBQUksTUFBakIsRUFBd0IsQ0FBeEIsRUFBMEIsR0FBQSxHQUFJLE1BQTlCO0VBWGM7O3NCQVlmLElBQUEsR0FBTyxTQUFBO0FBQ04sUUFBQTtJQUFBLE1BQVUsQ0FBQyxJQUFDLENBQUEsQ0FBRCxHQUFHLENBQUosRUFBTyxJQUFDLENBQUEsQ0FBRCxHQUFLLENBQUcsY0FBQSxJQUFrQixTQUFBLENBQVUsRUFBVixDQUFyQixHQUF1QyxDQUF2QyxHQUE4QyxDQUFDLENBQS9DLENBQVosQ0FBVixFQUFDLElBQUMsQ0FBQSxVQUFGLEVBQUksSUFBQyxDQUFBO0lBQ0wsRUFBQSxDQUFHLENBQUg7SUFDQSxLQUFBLENBQU0sSUFBQyxDQUFBLENBQVAsRUFBUyxJQUFDLENBQUEsQ0FBVjtJQUNBLElBQUcsSUFBQyxDQUFBLENBQUQsR0FBSyxLQUFMLElBQWUsQ0FBQSxHQUFBLEdBQUksTUFBSixXQUFhLElBQUMsQ0FBQSxFQUFkLFFBQUEsR0FBa0IsR0FBQSxHQUFJLE1BQXRCLENBQWxCO0FBQW9ELGFBQU8sSUFBQyxDQUFBLFlBQUQsQ0FBYyxDQUFkLEVBQTNEOztJQUNBLElBQUcsSUFBQyxDQUFBLENBQUQsR0FBRyxDQUFILElBQVEsSUFBQyxDQUFBLENBQUQsR0FBRyxNQUFYLElBQXFCLElBQUMsQ0FBQSxDQUFELEdBQUcsS0FBM0I7QUFBc0MsYUFBTyxJQUFDLENBQUEsWUFBRCxDQUFjLENBQWQsRUFBN0M7O0FBQ0E7QUFBQSxTQUFBLHNDQUFBO3NCQUFLLGFBQUU7TUFDTixJQUFHLElBQUEsQ0FBSyxJQUFDLENBQUEsQ0FBTixFQUFRLElBQUMsQ0FBQSxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBQSxHQUFrQixJQUFDLENBQUEsS0FBdEI7QUFBaUMsZUFBTyxJQUFDLENBQUEsWUFBRCxDQUFjLENBQWQsRUFBeEM7O0FBREQ7RUFOTTs7Ozs7O0FBUVIsS0FBQSxHQUFRLFNBQUE7RUFDUCxZQUFBLENBQWEsV0FBYixFQUF5QixZQUF6QjtTQUNBLFNBQUEsR0FBWSxJQUFJO0FBRlQ7O0FBR1IsSUFBQSxHQUFPLFNBQUE7U0FBRyxTQUFTLENBQUMsSUFBVixDQUFBO0FBQUgiLCJzb3VyY2VzQ29udGVudCI6WyJzdGFyZG9kZ2UgPSBudWxsXHJcblxyXG5jbGFzcyBTdGFyRG9kZ2VcclxuXHRjb25zdHJ1Y3RvciA6IChAbGV2ZWw9MCwgQGQ9NTApIC0+IEBzdGFydE5ld0dhbWUgMVxyXG5cdHN0YXJ0TmV3R2FtZSA6IChkbGV2ZWwpIC0+XHJcblx0XHRpZiBkbGV2ZWw9PTFcclxuXHRcdFx0QHN0YXJzID0gW11cclxuXHRcdFx0ZCA9IEBkLzJcclxuXHRcdFx0QHN0YXJzLnB1c2ggW0BkKmkraW50KHJhbmRvbSAtZCxkKSwgQGQqaitpbnQocmFuZG9tIC1kLGQpXSBmb3IgaSBpbiByYW5nZSAxLHdpZHRoL0BkIGZvciBqIGluIHJhbmdlIDEsaGVpZ2h0L0BkXHJcblx0XHRAbGV2ZWwgKz0gZGxldmVsXHJcblx0XHRbQHgsQHldID0gWzAsaGVpZ2h0LzJdXHJcblx0XHRiZyAwLjVcclxuXHRcdHNjIDBcclxuXHRcdGZvciBbeCx5XSBpbiBAc3RhcnNcclxuXHRcdFx0Y2lyY2xlIHgseSxAbGV2ZWxcclxuXHRcdHJlY3Qgd2lkdGgtMywwLjQqaGVpZ2h0LDIsMC4yKmhlaWdodFxyXG5cdGRyYXcgOiAtPlxyXG5cdFx0W0B4LEB5XSA9IFtAeCsxLCBAeSArIGlmIG1vdXNlSXNQcmVzc2VkIG9yIGtleUlzRG93biAzMiB0aGVuIDEgZWxzZSAtMV0gIyAgXHJcblx0XHRzYyAxXHJcblx0XHRwb2ludCBAeCxAeVxyXG5cdFx0aWYgQHggPiB3aWR0aCBhbmQgMC40KmhlaWdodCA8IEB5IDwgMC42KmhlaWdodCB0aGVuIHJldHVybiBAc3RhcnROZXdHYW1lIDFcclxuXHRcdGlmIEB5PDAgb3IgQHk+aGVpZ2h0IG9yIEB4PndpZHRoIHRoZW4gcmV0dXJuIEBzdGFydE5ld0dhbWUgMFxyXG5cdFx0Zm9yIFt4LHldIGluIEBzdGFyc1xyXG5cdFx0XHRpZiBkaXN0KEB4LEB5LHgseSkgPCBAbGV2ZWwgdGhlbiByZXR1cm4gQHN0YXJ0TmV3R2FtZSAwXHJcbnNldHVwID0gLT5cclxuXHRjcmVhdGVDYW52YXMgd2luZG93V2lkdGgsd2luZG93SGVpZ2h0XHJcblx0c3RhcmRvZGdlID0gbmV3IFN0YXJEb2RnZVxyXG5kcmF3ID0gLT4gc3RhcmRvZGdlLmRyYXcoKVxyXG4iXX0=
//# sourceURL=C:\github\StarDodge\coffee\sketch.coffee