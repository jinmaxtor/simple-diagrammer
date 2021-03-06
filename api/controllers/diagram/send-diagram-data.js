module.exports = {


    friendlyName: 'Send diagram data',


    description: '',


    inputs: {
        diagramData: {
            type: 'string',
            required: true,
        },
        sessionId: {
            type: 'string',
            required: true,
        },
    },


    exits: {},


    fn: async function ({diagramData, sessionId}) {
        // sails.sockets.broadcast('testDiagramSession', 'sendDiagramData', diagramData, this.req);
        sails.sockets.broadcast(sessionId, 'sendDiagramData', diagramData, this.req);
        return this.res.ok({message: 'datos del diagrama enviados correctamente'});
    }


};
