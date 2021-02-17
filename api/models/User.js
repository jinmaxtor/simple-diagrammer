/**
 * User.js
 *
 * A user who can log in to this application.
 */

var User = module.exports = {

    tableName: 'usuarios',

    migrate: 'drop',

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

        fullName: {
            columnName: 'nombre_completo',
            type: 'string',
            required: true,
            description: 'Full representation of the user\'s name.',
            maxLength: 120,
            example: 'Mary Sue van der McHenst'
        },

        emailAddress: {
            columnName: 'correo_electronico',
            type: 'string',
            required: true,
            unique: true,
            isEmail: true,
            maxLength: 200,
            example: 'mary.sue@example.com'
        },

        password: {
            columnName: 'password',
            type: 'string',
            required: true,
            description: 'Securely hashed representation of the user\'s login password.',
            protect: true,
            example: '2$28a8eabna301089103-13948134nad'
        },

        isSuperAdmin: {
            columnName: 'es_super_usuario',
            type: 'boolean',
            description: 'Whether this user is a "super admin" with extra permissions, etc.'
        },

        lastSeenAt: {
            columnName: 'fecha_ultima_sesion',
            type: 'number',
            columnType: 'bigint',
            description: 'A JS timestamp (epoch ms) representing the moment at which this user most recently interacted with the backend while logged in (or 0 if they have not interacted with the backend at all yet).',
            example: 1502844074211
        },

        type: {
            columnName: 'tipo',
            type: 'string',
            columnType: 'enum(\'Docente\', \'Estudiante\')',
        },

        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
        // n/a

        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
        createdSessions: {
            collection: 'ClassSession',
            via: 'owner',
        },

        registeredSessions: {
            collection: 'ClassSession',
            via: 'registeredUser',
            through: 'Enrollment',
        }
    },


};
