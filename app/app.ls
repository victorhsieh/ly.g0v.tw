# Declare app level module which depends on filters, and services

angular.module \ly.g0v.tw <[ngGrid app.controllers ly.g0v.tw.controllers app.directives app.filters app.services partials ui.state utils monospaced.qrcode]>

.config <[$stateProvider $urlRouterProvider $locationProvider]> ++ ($stateProvider, $urlRouterProvider, $locationProvider) ->
  $stateProvider
    .state 'motions' do
      url: '/motions'
      templateUrl: '/partials/motions.html'
      controller: \LYMotions
    .state 'motions.sitting' do
      url: '/{session}/{sitting}'

    .state 'bills' do
      url: '/bills/{billId}'
      templateUrl: '/partials/bills.html'
      resolve: _init: <[LYService]> ++ (.init!)
      controller: \LYBills

    .state 'calendar' do
      url: '/calendar'
      templateUrl: '/partials/calendar.html'
      resolve: _init: <[LYService]> ++ (.init!)
      controller: \LYCalendar
    .state 'calendar.period' do
      url: '/{period}'

    .state 'sittings' do
      url: '/sittings'
      templateUrl: '/partials/sittings.html'
      controller: \LYSittings
      resolve: _init: <[LYService]> ++ (.init!)
    .state 'sittings.detail' do
      url: '/{sitting}'
    .state 'sittings.detail.video' do
      url: '/video'

    .state 'debates' do
      url: '/debates'
      templateUrl: '/partials/debates.html'
      resolve: _init: <[LYService]> ++ (.init!)

    .state 'sitting' do
      url: '/sitting'
      templateUrl: '/partials/sitting.html'
      controller: \LYSitting

    .state 'search' do
      url: '/search'
      templateUrl: '/partials/search.html'
      controller: \LYSearch
    .state 'search.target' do
      url: '/{keyword}'

    .state 'about' do
      url: '/about'
      templateUrl: '/partials/about.html'
      controller: \About
    # Catch all
  $urlRouterProvider
    .otherwise('/calendar')

  # Without serve side support html5 must be disabled.
  $locationProvider.html5Mode true

.run <[$rootScope $state $stateParams $location $anchorScroll]> ++ ($rootScope, $state, $stateParams, $location, $anchorScroll) ->
  $rootScope.$state = $state
  $rootScope.$stateParam = $stateParams
  $rootScope.go = -> $location.path it
  $rootScope.config_build = window.global.config.BUILD
  $rootScope.$on \$stateChangeSuccess (e, {name}) ->
    window?ga? 'send' 'pageview' page: $location.$$url, title: name
  window.onYouTubeIframeAPIReady = ->
    $rootScope.$broadcast \youtube-ready
