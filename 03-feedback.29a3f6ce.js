function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(h,t),c?y(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function h(){var e=v();if(T(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function j(e){return u=void 0,g&&r?y(e):(r=o=void 0,a)}function O(){var e=v(),n=T(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?a:j(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector("input"),S=document.querySelector("textarea"),T=document.querySelector(".feedback-form"),h={};T.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));const j=JSON.parse(localStorage.getItem("feedback-form-state"));null!==j&&(y.value=j.email,S.value=j.message),T.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return void alert("Please fill in all the fields!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.29a3f6ce.js.map
