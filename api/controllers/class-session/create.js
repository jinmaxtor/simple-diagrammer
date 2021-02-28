module.exports = {


    friendlyName: 'Create',


    description: 'Create class session.',


    inputs: {
        title: {
            required: true,
            type: 'string',
        },

        description: {
            required: true,
            type: 'string',
        }
    },


    exits: {
        success: {
            description: 'Nueva sesión creada correctamente.'
        },
    },


    fn: async function ({title, description}) {

        // All done.
        let newSessionClass = await ClassSession.create({
            title: title,
            description: description,
            startDate: new Date().getTime(),
            endDate: new Date().getTime(),
            status: 1,
            owner: this.req.session.userId,
        }).fetch();

        newSessionClass.sessionId = await sails.helpers.passwords.hashPassword(newSessionClass.id);

        return newSessionClass;
    }


};
