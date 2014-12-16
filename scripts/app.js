angular.module('solar', ['ui.router', 'oc.lazyLoad']).config(function($stateProvider) {
  $stateProvider.state('site-survey', {
    templateUrl: 'scripts/gemini/site-survey.html',
    controller: 'SiteSurveyCtrl as siteSurvey',
    resolve: {
      gemini: function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name: 'gemini',
          files: ['scripts/gemini/module.js', 'scripts/gemini/SiteSurveyController.js']
        });
      }
    }
  });
});
