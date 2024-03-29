!(function (e) {
  function n(e) {
    return new RegExp(`(^|\\s+)${e}(\\s+|$)`);
  }
  function t(e, n) {
    const t = a(e, n) ? r : s;
    t(e, n);
  }
  let a,
    s,
    r;
  'classList' in document.documentElement
    ? ((a = function (e, n) {
      return e.classList.contains(n);
    }),
      (s = function (e, n) {
        e.classList.add(n);
      }),
      (r = function (e, n) {
        e.classList.remove(n);
      }))
    : ((a = function (e, t) {
      return n(t).test(e.className);
    }),
      (s = function (e, n) {
        a(e, n) || (e.className = `${e.className} ${n}`);
      }),
      (r = function (e, t) {
        e.className = e.className.replace(n(t), ' ');
      }));
  const i = {
    hasClass: a,
    addClass: s,
    removeClass: r,
    toggleClass: t,
    has: a,
    add: s,
    remove: r,
    toggle: t,
  };
  typeof define === 'function' && define.amd ? define(i) : (e.classie = i);
}(window));
const cbpAnimatedHeader = (function () {
  function e() {
    window.addEventListener(
      'scroll',
      (e) => {
        r || ((r = !0), setTimeout(n, 250));
      },
      !1,
    );
  }
  function n() {
    const e = t();
    e >= i ? classie.add(s, 'navbar-shrink') : classie.remove(s, 'navbar-shrink'), (r = !1);
  }
  function t() {
    return window.pageYOffset || a.scrollTop;
  }
  var a = document.documentElement,
    s = document.querySelector('.navbar-default'),
    r = !1,
    i = 300;
  e();
}());
$(() => {
  $('a.page-scroll').bind('click', function (e) {
    const n = $(this);
    $('html, body')
      .stop()
      .animate({ scrollTop: $(n.attr('href')).offset().top }, 1500, 'easeInOutExpo'),
    e.preventDefault();
  });
}),
$('body').scrollspy({ target: '.navbar-fixed-top' }),
$('.navbar-collapse ul li a').click(() => {
  $('.navbar-toggle:visible').click();
}),
(function (e) {
  e.fn.typer = function (n) {
    let t = e.extend({
        search: '', replace: [], speed: 50, delay: 2e3,
      }, n),
      a = function (e) {
        for (var n = '', t = 0; e >= t; t++) n += Math.floor(2 * Math.random());
        return n;
      };
    this.each(function () {
      let n = e(this),
        s = n.data('text'),
        r = 0,
        i = s.indexOf(t.search),
        o = s.substr(0, i),
        l = s.substr(i, s.length);
      t.replace.push(l);
      var c = setInterval(() => {
        let e = '';
        if (
          (r == i
            ? ((e = a(l.length - 1)),
              n.html(s.substr(0, o.length)),
              n.append(`<span>${e}</span>`))
            : r > i
              ? ((e = a(s.length - 1)),
                n
                  .delay(t.speed)
                  .find('span')
                  .html(l.substring(0, r - i) + e.substring(r, e.length)))
              : i > r &&
                  ((e = a(s.length - 1)),
                    n.delay(t.speed).html(o.substring(0, r) + e.substring(r, e.length))),
            r < s.length)
        ) { r++; } else {
          clearInterval(c);
          let d = 0;
          setInterval(() => {
            var e = 0,
              a = t.replace[d],
              r = setInterval(() => {
                for (var i = '', o = 0; o <= a.length - 1; o++) { i += Math.floor(2 * Math.random()); }
                n
                  .delay(t.speed)
                  .find('span')
                  .html(a.substring(0, e) + i.substring(e, i.length)),
                e < s.length ? e++ : clearInterval(r);
              }, t.speed);
            d < t.replace.length - 1 ? d++ : (d = 0);
          }, t.delay);
        }
      }, t.speed);
    });
  };
}(jQuery)),
$(() => {
  $('#slogan').typer({
    search: 'Cloud Dev !',
    replace: [
      'JavaScripter !',
      'Web Dev !',
      'Tech Geek !',
      'Pythonist !',
      'Native Dev !',
    ],
  });
});
