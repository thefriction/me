(() => {
  const root = document.documentElement;
  const hero = document.querySelector(".hero");
  const signalLinks = document.querySelectorAll("[data-signal]");
  const headerInner = document.querySelector(".site-header__inner");
  const primaryNavigation = document.querySelector(".primary-nav");
  const mobileEmail = document.querySelector(".site-email");
  const mobileQuery = window.matchMedia("(max-width: 639px)");

  const syncMobileEmail = () => {
    if (mobileQuery.matches) {
      if (!mobileEmail.isConnected) {
        headerInner.insertBefore(mobileEmail, primaryNavigation);
      }
      return;
    }

    mobileEmail.remove();
  };

  syncMobileEmail();
  mobileQuery.addEventListener("change", syncMobileEmail);

  const clearSignalFocus = () => {
    delete hero.dataset.activeSignal;
  };

  signalLinks.forEach((link) => {
    const showSignal = () => {
      hero.dataset.activeSignal = link.dataset.signal;
    };

    link.addEventListener("pointerenter", showSignal);
    link.addEventListener("pointerleave", clearSignalFocus);
    link.addEventListener("focus", showSignal);
    link.addEventListener("blur", clearSignalFocus);
  });

  const navigationLinks = new Map(
    [...document.querySelectorAll(".primary-nav a")].map((link) => [
      link.getAttribute("href").slice(1),
      link,
    ]),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navigationLinks.forEach((link) => link.removeAttribute("aria-current"));
        navigationLinks.get(entry.target.id)?.setAttribute("aria-current", "location");
      });
    },
    { rootMargin: "-35% 0px -55% 0px" },
  );

  navigationLinks.forEach((_link, id) => {
    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }
  });

  window.setTimeout(() => {
    root.classList.remove("motion-ok");
  }, 2300);
})();
