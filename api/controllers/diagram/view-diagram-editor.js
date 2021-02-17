module.exports = {


    friendlyName: 'View diagram editor',


    description: 'Display "Diagram editor" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/diagram/diagram-editor'
        }

    },


    fn: async function () {

        // Respond with view.
        return {};

    }


};
