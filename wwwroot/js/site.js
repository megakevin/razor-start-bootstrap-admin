(() => {
  // JavaScript/site.js
  window.addEventListener("DOMContentLoaded", (event) => {
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", (event2) => {
        event2.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
        localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
      });
    }
    const datatablesSimple = document.getElementById("datatablesSimple");
    if (datatablesSimple) {
      new simpleDatatables.DataTable(datatablesSimple);
    }
  });
})();
/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
//# sourceMappingURL=site.js.map
