function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var r,i,o,a,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function O(e){return l=e,f=setTimeout(T,t),c?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function T(){var e=m();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?v(n,o-(e-l)):n}(e))}function h(e){return f=void 0,g&&r?y(e):(r=i=void 0,a)}function j(){var e=m(),n=S(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return O(u);if(s)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},j.flush=function(){return void 0===f?a:h(m())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");let O={},S=localStorage.getItem("feedback-form-state");if(null!==S){O=JSON.parse(S);for(const e in O)y.elements[e].value=O[e]}function T(e){O[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(O))}y.addEventListener("input",e(t)(T,500)),y.addEventListener("submit",(function(n){n.preventDefault();const{elements:{email:r,message:i}}=n.currentTarget;if(""===r.value||""===i.value)return void alert("Please fill in all the fields!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),n.currentTarget.reset(),localStorage.removeItem("feedback-form-state",JSON.stringify(O)),O={},y.removeEventListener("input",e(t)(T,500))}));
//# sourceMappingURL=03-feedback.55bac2af.js.map