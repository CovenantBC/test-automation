module.exports = {
  config: {
    services: ['selenium-standalone', 'devtools'],
    capabilities: [{ browserName: 'chrome' }],
    specs: [
      './test/ui/tests/ui.js',
    ],
  },
};