/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: async function (req, res) {
        return res.view('pages/test');
    },

    /**
     * `TestController.greeting()`
     */
    subscribe: async function (req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }

        sails.sockets.join(req, 'chatSession');

        sails.sockets.broadcast('chatSession', 'subscribe', {howdy: 'new subscribe user!'}, req);

        return res.json({
            anyData: 'se configuro el socket'
        });
    },

    sendMessage: async function (req, res) {
        let message = req.body.text;
        sails.sockets.broadcast('chatSession', 'sendMessage', message);
        return res.ok(message);
    },

    /**
     * `TestController.farewell()`
     */
    farewell: async function (req, res) {
        return res.json({
            todo: 'farewell() is not implemented yet!'
        });
    }

};

