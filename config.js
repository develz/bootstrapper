System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "es7.decorators"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "aurelia-bootstrapper/*": "dist/*.js",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.8",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.0.3",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.4",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.5",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "core-js": "npm:core-js@1.2.6",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.5": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.8": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-loader@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.5": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
    },
    "npm:aurelia-templating@1.0.0-beta.1.0.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
