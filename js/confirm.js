window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".mobile-menu"),t=document.querySelector(".header-nav"),s=document.querySelector(".mobile-menu-line-1"),i=document.querySelector(".mobile-menu-line-2"),c=document.querySelector(".mobile-menu-line-3");e.addEventListener("click",(function(){t.classList.contains("nav-active")?(this.style.position="absolute",t.classList.remove("nav-active"),s.classList.remove("switched"),i.classList.remove("switched"),c.classList.remove("switched")):(this.style.position="fixed",t.classList.add("nav-active"),s.classList.add("switched"),i.classList.add("switched"),c.classList.add("switched"))}))}));