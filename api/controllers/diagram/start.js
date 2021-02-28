module.exports = {


    friendlyName: 'Start',


    description: 'Start diagram.',


    inputs: {
        sessionId: {
            required: true,
            type: 'string',
        }
    },


    exits: {
        badRequest: {
            responseType: 'badRequest'
        },
    },


    fn: async function (inputs, exits) {

        if (!this.req.isSocket) {
            return exits.badRequest({error: 'La solicitud debe ser de tipo web socket'});
        }

        console.debug('sessionId: ', inputs.sessionId);

        // sails.sockets.join(this.req, 'testDiagramSession');
        sails.sockets.join(this.req, inputs.sessionId);
        // sails.sockets.broadcast('testDiagramSession', 'newUserJoined', {message: 'El usuario aaa acaba de unirse a la sesión'}, this.req);
        sails.sockets.broadcast(inputs.sessionId, 'newUserJoined', {message: 'El usuario aaa acaba de unirse a la sesión'}, this.req);

        return this.res.json({message: 'Se unió a la sesión correctamente'});
    }


};
