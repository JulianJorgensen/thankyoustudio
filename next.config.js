const withImages = require('next-images');
const withFonts = require('next-fonts');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

module.exports = withImages(withFonts(withBundleAnalyzer({
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
})));