/* ============================================================
   WORK PAGINATION
   One shared component for the case-study pagination that appears
   at the foot of every work page.

   To add, remove, or reorder a project, edit PROJECTS below and
   nothing else. Every work page reads this list, so the numbers,
   the current-page state, and the previous/next arrows all follow
   automatically.

   To add a new work page, give it the placeholder and the script tag:

     <div data-work-pagination data-current="work-my-new-page.html"></div>
     <script src="assets/work-pagination.js" defer></script>

   Navigation is circular: the last project's next is the first, and
   the first project's previous is the last.
   ============================================================ */
(function () {
  "use strict";

  var PROJECTS = [
    { file: "work-genai-marketing-operating-system.html",        title: "Designing a GenAI Marketing Operating System" },
    { file: "work-ai-transformation-roadmap-framework.html",     title: "Designing an AI Transformation Planning Framework" },
    { file: "work-flash-vendor-transition.html",                 title: "Rebuilding a High-Performing Content Team" },
    { file: "work-enterprise-personalization.html",              title: "Designing Enterprise Personalization" },
    { file: "work-executive-ux-scorecard.html",                  title: "Designing an Executive UX Scorecard" },
    { file: "work-servicenow-employee-experience-taxonomy.html", title: "Designing Enterprise Taxonomy" },
    { file: "work-taxonomy-consulting-service.html",             title: "Building a Full-Service Taxonomy Offering" },
    { file: "work-friction-mapping-framework.html",              title: "Inventing Friction Mapping" }
  ];

  var ALL_WORK = { href: "index.html#work", label: "All work" };

  var ARROW = {
    prev: "M15 5 8 12l7 7",
    next: "M9 5l7 7-7 7"
  };

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function arrow(project, direction) {
    var word = direction === "prev" ? "Previous" : "Next";
    return '<a class="projnav-arrow" href="' + esc(project.file) + '"' +
             ' aria-label="' + word + ' project: ' + esc(project.title) + '"' +
             ' title="' + esc(project.title) + '">' +
             '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
             '<path d="' + ARROW[direction] + '"/></svg></a>';
  }

  function numbers(currentIndex) {
    return PROJECTS.map(function (project, i) {
      var current = i === currentIndex ? ' aria-current="page"' : "";
      return '<a class="projnav-num" href="' + esc(project.file) + '"' + current +
               ' title="' + esc(project.title) + '">' +
               '<span class="sr-only">Project </span>' + pad(i + 1) + "</a>";
    }).join("\n          ");
  }

  function build(currentIndex) {
    var last = PROJECTS.length - 1;
    var prev = PROJECTS[currentIndex <= 0 ? last : currentIndex - 1];
    var next = PROJECTS[currentIndex >= last ? 0 : currentIndex + 1];

    var nav = document.createElement("nav");
    nav.className = "projnav";
    nav.setAttribute("aria-label", "Case study pagination");
    nav.innerHTML =
      '<div class="shell">' +
        '<div class="projnav-row">' +
          arrow(prev, "prev") +
          '<div class="projnav-nums">' + numbers(currentIndex) + "</div>" +
          arrow(next, "next") +
        "</div>" +
        '<div class="projnav-allrow">' +
          '<a class="projnav-all" href="' + esc(ALL_WORK.href) + '">' + esc(ALL_WORK.label) + "</a>" +
        "</div>" +
      "</div>";
    return nav;
  }

  function currentIndexFor(node) {
    var declared = node.getAttribute("data-current");
    if (declared) {
      for (var i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].file === declared) return i;
      }
    }
    /* fall back to the filename in the address bar, so a page that
       forgets its data-current attribute still renders correctly */
    var here = window.location.pathname.split("/").pop();
    for (var j = 0; j < PROJECTS.length; j++) {
      if (PROJECTS[j].file === here) return j;
    }
    return -1;
  }

  function init() {
    var slots = document.querySelectorAll("[data-work-pagination]");
    for (var i = 0; i < slots.length; i++) {
      var slot = slots[i];
      slot.parentNode.replaceChild(build(currentIndexFor(slot)), slot);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
