/*jslint anon:true, sloppy:true, nomen:true*/

YUI.add('DummyMojit', function (Y, NAME) {

    Y.namespace('mojito.controllers')[NAME] = {

        index: function (ac) {
            // ac.done({status: NAME});
            ac.done('Mojito is working.');
        }
    };

}, '0.0.1', {
    requires: ['mojito']
});

