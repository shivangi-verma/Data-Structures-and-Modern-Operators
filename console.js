// console.js (buffering override)
(function () {
  const original = {
    log: console.log.bind(console),
    info: console.info.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
  };

  const buffer = [];

  function formatItem(item) {
    if (typeof item === "string") return item;
    try {
      return JSON.stringify(item, null, 2);
    } catch (e) {
      return String(item);
    }
  }

  function bufferAppend(level, args) {
    const mapped = Array.from(args).map(formatItem);
    const prefix = level ? `[${level}] ` : "";
    buffer.push(prefix + mapped.join(" "));
  }

  function tryWriteImmediate() {
    const logBox = document.getElementById("logBox");
    if (logBox && buffer.length) {
      logBox.value += buffer.join("\n") + "\n";
      buffer.length = 0;
      logBox.scrollTop = logBox.scrollHeight;
    }
  }

  // override immediately
  console.log = function (...args) {
    original.log(...args);
    bufferAppend("LOG", args);
    tryWriteImmediate();
  };
  console.info = function (...args) {
    original.info(...args);
    bufferAppend("INFO", args);
    tryWriteImmediate();
  };
  console.warn = function (...args) {
    original.warn(...args);
    bufferAppend("WARN", args);
    tryWriteImmediate();
  };
  console.error = function (...args) {
    original.error(...args);
    bufferAppend("ERROR", args);
    tryWriteImmediate();
  };

  function onDomReady() {
    const logBox = document.getElementById("logBox");
    const clearBtn = document.getElementById("clearBtn");
    const toggleBtn = document.getElementById("toggleConsoleBtn");
    const consolePanel = document.getElementById("consolePanel");

    if (logBox && buffer.length) {
      logBox.value += buffer.join("\n") + "\n";
      buffer.length = 0;
      logBox.scrollTop = logBox.scrollHeight;
    }

    if (clearBtn && logBox)
      clearBtn.addEventListener("click", () => (logBox.value = ""));
    if (toggleBtn && consolePanel) {
      toggleBtn.addEventListener("click", () => {
        consolePanel.classList.toggle("hidden");
        if (!consolePanel.classList.contains("hidden"))
          logBox && logBox.focus();
      });
    }

    // helpers
    window.openAppConsole = () => {
      if (consolePanel && consolePanel.classList.contains("hidden")) {
        consolePanel.classList.remove("hidden");
        logBox && logBox.focus();
      }
    };
    window.closeAppConsole = () =>
      consolePanel && consolePanel.classList.add("hidden");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onDomReady);
  } else {
    onDomReady();
  }

  // try flush if textarea is added later
  const mo = new MutationObserver(() => tryWriteImmediate());
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
