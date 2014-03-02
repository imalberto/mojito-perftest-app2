/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('FooMojit', function(Y, NAME) { 
/**
 * The FooMojit module.
 *
 * @module FooMojit
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.done('FooMojit is working');
        }

    };

}, '0.0.1', {requires: [
    //'mojito',
    //'mojito-carrier-addon',
    //'mojito-models-addon',
    //'mojito-deploy-addon'
    //'FooMojitModelFoo'
]});
