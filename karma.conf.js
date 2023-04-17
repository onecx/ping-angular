module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-sonarqube-reporter')
    ],
    client: {
      jasmine: {},
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'lcovonly' },
      ]
    },
    reporters: ['progress', 'kjhtml', 'sonarqube'],
    browsers: ['Chrome'],
    restartOnFileChange: true,
    sonarqubeReporter: {
      outputFolder: 'coverage',
      reportName: function (metadata) {
        return 'sonarqube_report.xml';
      },
    }
  });
};
