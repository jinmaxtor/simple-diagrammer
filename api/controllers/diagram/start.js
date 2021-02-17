module.exports = {


    friendlyName: 'Start',


    description: 'Start diagram.',


    inputs: {},


    exits: {
        badRequest: {
            responseType: 'badRequest'
        },
    },


    fn: async function (inputs, exits) {

        if (!this.req.isSocket) {
            return exits.badRequest({error: 'La solicitud debe ser de tipo web socket'});
        }

        sails.sockets.join(this.req, 'testDiagramSession');
        sails.sockets.broadcast('testDiagramSession', 'newUserJoined', {message: 'El usuario aaa aca de unirse a la sesión'}, this.req);

        return this.res.json({message: 'Se unió a la sesión correctamente'});
    }


};
