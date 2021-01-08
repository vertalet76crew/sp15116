import "polyfill-array-includes";
import "element-closest-polyfill";
import $ from "jquery";

import menu from "./blocks/menu";
import formRequest from "./blocks/form-request";
import "./blocks/responsiveTabs";

$(function () {
  const patternUserAgent = /iPhone|iPod|iPad|iOS|android/i;
  const isMobile = !!navigator.userAgent.match(patternUserAgent);
  menu(isMobile);
  formRequest(isMobile);
  $("#tabs").responsiveTabs({
    startCollapsed: false,
  });
});
