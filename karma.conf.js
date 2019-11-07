// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'], //Framework a usar para realizar PU
    plugins: [ // Plugins requeridos para integrar el framework con el ejecutor de test (es decir Karma)
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: { //Configuración de archivos de cobertura
      dir: require('path').join(__dirname, './coverage/nglabs'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],  //Progress es la consola. Indica donde se generan reportes de los test
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,  //Indica si queremos se relancen los test al modificar el código fuente
    browsers: ['Chrome'], // Navegadores donde se lanzarán los test
    singleRun: false,
    restartOnFileChange: true
  });
};
