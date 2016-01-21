/**
 *
 *  MaterialConfig set angular-material needed configurations
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
    }

    execute() {
        this.app.config([
            '$mdThemingProvider',
            function($mdThemingProvider) {
                $mdThemingProvider
                    .theme('default')
                    .primaryPalette('indigo')
                    .accentPalette('green')
                    .warnPalette('red');
            }
        ]);
    }
}

export default Configurator;