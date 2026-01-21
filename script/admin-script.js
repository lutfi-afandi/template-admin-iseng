// Default configuration
const defaultConfig = {
  app_name: "GreenAdmin",
  user_name: "John Doe",
  primary_color: "#10b981",
  secondary_color: "#ffffff",
  text_color: "#1e293b",
  accent_color: "#059669",
  background_color: "#f8fafb",
};

let config = { ...defaultConfig };

// Update UI based on config
async function onConfigChange(cfg) {
  config = { ...defaultConfig, ...cfg };

  // Update app name
  const appNameEl = document.getElementById("appName");
  if (appNameEl)
    appNameEl.textContent = config.app_name || defaultConfig.app_name;

  // Update user name
  const userNameEl = document.getElementById("userName");
  if (userNameEl)
    userNameEl.textContent = config.user_name || defaultConfig.user_name;

  // Update CSS variables for colors
  document.documentElement.style.setProperty(
    "--green-500",
    config.primary_color || defaultConfig.primary_color,
  );
  document.documentElement.style.setProperty(
    "--green-600",
    config.accent_color || defaultConfig.accent_color,
  );
}

// Map to capabilities for color/font editing
function mapToCapabilities(cfg) {
  return {
    recolorables: [
      {
        get: () => cfg.background_color || defaultConfig.background_color,
        set: (value) => {
          cfg.background_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ background_color: value });
        },
      },
      {
        get: () => cfg.secondary_color || defaultConfig.secondary_color,
        set: (value) => {
          cfg.secondary_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ secondary_color: value });
        },
      },
      {
        get: () => cfg.text_color || defaultConfig.text_color,
        set: (value) => {
          cfg.text_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ text_color: value });
        },
      },
      {
        get: () => cfg.primary_color || defaultConfig.primary_color,
        set: (value) => {
          cfg.primary_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ primary_color: value });
        },
      },
      {
        get: () => cfg.accent_color || defaultConfig.accent_color,
        set: (value) => {
          cfg.accent_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ accent_color: value });
        },
      },
    ],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined,
  };
}

// Map to edit panel values
function mapToEditPanelValues(cfg) {
  return new Map([
    ["app_name", cfg.app_name || defaultConfig.app_name],
    ["user_name", cfg.user_name || defaultConfig.user_name],
  ]);
}

// Sidebar Toggle Functionality
$(document).ready(function () {
  const $sidebar = $("#sidebar");
  const $mainWrapper = $("#main-wrapper");
  const $overlay = $("#sidebarOverlay");
  const $toggle = $("#sidebarToggle");

  // Toggle sidebar (navbar button)
  $toggle.on("click", function () {
    if ($(window).width() >= 992) {
      // Desktop: collapse/expand
      $sidebar.toggleClass("collapsed");
      $mainWrapper.toggleClass("expanded");
    } else {
      // Mobile: show/hide
      $sidebar.removeClass("collapsed");
      $sidebar.toggleClass("show");
      $overlay.toggleClass("show");
    }
  });

  $(window).on("resize", function () {
    if ($(window).width() >= 992) {
      // Masuk desktop
      $sidebar.removeClass("show");
      $overlay.removeClass("show");

      // pastikan desktop state bersih
      if (!$sidebar.hasClass("collapsed")) {
        $mainWrapper.removeClass("expanded");
      }
    } else {
      // Masuk mobile
      $sidebar.removeClass("collapsed");
      $mainWrapper.removeClass("expanded");
    }
  });

  // Toggle sidebar (sidebar button - desktop only)
  $("#sidebarToggleDesktop").on("click", function () {
    $sidebar.toggleClass("collapsed");
    $mainWrapper.toggleClass("expanded");
  });

  // Close sidebar on overlay click (mobile)
  $overlay.on("click", function () {
    $sidebar.removeClass("show");
    $overlay.removeClass("show");
  });

  // Handle window resize
  $(window).on("resize", function () {
    if ($(window).width() >= 992) {
      $sidebar.removeClass("show");
      $overlay.removeClass("show");
    }
  });

  // Menu item click - set active
  $("#sidebar .nav-link").on("click", function (e) {
    if (!$(this).attr("data-bs-toggle")) {
      $("#sidebar .nav-link").removeClass("active");
      $(this).addClass("active");
    }
  });

  // Form submission prevention
  $("#sampleForm, #orderForm").on("submit", function (e) {
    e.preventDefault();
  });

  // Initial config render
  onConfigChange(config);
});
