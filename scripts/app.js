angular.module('solar', ['ui.router', 'gemini']).config(function($stateProvider) {
  $stateProvider.state('site-survey', {
    templateUrl: 'scripts/gemini/site-survey.html',
    controller: 'SiteSurveyCtrl as siteSurvey'
  });
});
