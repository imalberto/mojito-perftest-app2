/*jslint anon:true, sloppy:true, nomen:true, plusplus: true*/

YUI.add('MasterMojit', function (Y, NAME) {

    var cfg = { children: {} },
        i;

    for (i = 1; i <= 50; i++) {
        cfg.children['slot-' + i] = {
            type: 'DummyMojit',
            action: 'index'
        };
    }

    Y.namespace('mojito.controllers')[NAME] = {

        index: function (ac) {

            var duration = 0,
                start;

            Y.each(Y.mojito.controllers, function (c) {
                var f = c.index;
                if (f) {
                    c.index = function (ac) {
                        var start = Date.now();
                        f.call(c, ac);
                        duration += (Date.now() - start);
                    };
                }
            });

            start = Date.now();

            ac.composite.execute(cfg, function (data, meta) {
                ac.done(data, meta);

                var total = Date.now() - start;
                console.log('================================================');
                console.log('Overall time: ' + total + ' msec');
                console.log('Time spent in our code: ' + duration + ' msec');

            });
        }
    };

}, '0.0.1', {
    requires: ['mojito', 'mojito-composite-addon']
});

