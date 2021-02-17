/**
 * ClassSession.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'sesiones',

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

        title: {
            columnName: 'titulo',
            type: 'string',
            required: true,
            maxLength: 255,
        },

        description: {
            columnName: 'descripcion',
            type: 'string',
        },

        startDate: {
            columnName: 'fecha_inicio',
            type: 'number'
        },

        endDate: {
            columnName: 'fecha_fin',
            type: 'number'
        },

        status: {
            columnName: 'estado',
            type: 'number'
        },

        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
        owner: {
            columnName: 'creador_id',
            model: 'User',
        },

        registeredUsers: {
            collection: 'User',
            via: 'registeredSession',
            through: 'Enrollment',
        },

        diagrams: {
            collection: 'Diagram',
            via: 'classSession'
        }
    },

};

