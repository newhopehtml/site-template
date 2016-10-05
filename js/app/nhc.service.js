(function () {
    'use strict';
    angular
        .module('nhc')
        .provider('NHCService', NHCProvider);

    NHCProvider.$inject = ['constants'];
    function NHCProvider(constants) {

        // -- make available to configuration --//
        this.$get = get;
        this.configureHttpProvider = configureHttpProvider;
        this.constants = constants;

        // -- provide steward service --//
        get.$inject = ['$location'];
        function get($location) {
            return new NHCService(constants, $location);
        }

        /**
         * Set up cross domain voodoo, if running from deployment, No IE Cache
         * @param httpProvider
         * @returns {*}
         * @see: http://stackoverflow.com/questions/16098430/angular-ie-caching-issue-for-http
         */
        function configureHttpProvider(httpProvider) {

            // -- set up cross domain -- //
            httpProvider.defaults.useXDomain = true;
            delete httpProvider.defaults.headers.common['X-Requested-With'];
            httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';


            // -- If running from deployment, No IE Cache -- //
            if (window.location.origin.indexOf('http://localhost:') === -1) {

                //initialize get if not there
                if (!httpProvider.defaults.headers.get) {
                    httpProvider.defaults.headers.get = {};
                }
                //disable IE ajax request caching
                httpProvider.defaults.headers.get['If-Modified-Since'] = 'Sat, 26 Jul 1997 05:00:00 GMT';
                httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
                httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
            }

            return httpProvider;
        }
    }

    /**
     * NHC Servcice.
     */
    function NHCService(constants, $location) {

        // -- private vars -- //
        var appTitle = null;
        var appUser = null;
        var loginSubscriber;

        // -- public members -- //
        this.constants = constants;
    }
})();
