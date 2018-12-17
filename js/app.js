var app = angular.module('MiguitasBakery', [
    'ui.router',
    'pascalprecht.translate',
    'duScroll'
]);

// ui-route config
app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html'
            });
    })
    // locationProvider config needed for angular-translate to work properly
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    // angular-translate config
    .config(
        ['$translateProvider', function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: '../i18n/',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('es');
            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        }]
    );

app.controller('AppCtrl', function ($scope, $window, $translate, $document) {

    $scope.changeLang = function (lang) {
        $translate.use(lang);
        $scope.spanishActive = lang == 'es' ? "active" : "";
        $scope.englishActive = lang !== 'es' ? "active" : "";
    };

    $scope.init = function () {
        // console.log("Welcome to Miguitas Bakery! (･ᴥ･)");
        $scope.changeLang(_.includes($window.navigator.language, 'en') ? 'en' : 'es');
        $scope.currentYear = moment().year();
    };

    $scope.init();

    $scope.visitSocialMedia = function (platform) {
        switch (platform) {
            case 'facebook':
                $window.open('https://www.facebook.com/MiguitasBakery/', '_blank');
                break;
            case 'instagram':
                $window.open('https://www.instagram.com/miguitasbakery/', '_blank');
                break;
            case 'twitter':
                $window.open('https://twitter.com/miguitasbakery', '_blank');
                break;
        }

    };

    $scope.viewMenu = function () {
        $window.open('https://drive.google.com/open?id=0B7SfPxD0kNl6VHowVmtmMURWUDg', '_blank');
    };

    $scope.prettyScroll = function (idSection) {
        var top = 400;
        var duration = 2000;
        var offset = 30; //pixels; adjust for floating menu, context etc
        //Scroll to #some-id with 30 px "padding"
        var someElement = angular.element(document.getElementById(idSection));
        $document.scrollToElement(someElement, offset, duration);
    };
});