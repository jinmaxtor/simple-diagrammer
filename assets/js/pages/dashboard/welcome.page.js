parasails.registerPage('welcome', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
        modal: '',
        pageLoadedAt: Date.now(),

        formData: { /* … */},
        formErrors: { /* … */},
        formRules: {
            title: {required: true},
            description: {required: true},
        },
        syncing: false,
        cloudError: '',
        cloudSuccess: false,
    },

    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function () {
        //…
    },
    mounted: async function () {
        //…
    },

    //  ╦  ╦╦╦═╗╔╦╗╦ ╦╔═╗╦    ╔═╗╔═╗╔═╗╔═╗╔═╗
    //  ╚╗╔╝║╠╦╝ ║ ║ ║╠═╣║    ╠═╝╠═╣║ ╦║╣ ╚═╗
    //   ╚╝ ╩╩╚═ ╩ ╚═╝╩ ╩╩═╝  ╩  ╩ ╩╚═╝╚═╝╚═╝
    // Configure deep-linking (aka client-side routing)
    virtualPagesRegExp: /^\/welcome\/?([^\/]+)?\/?/,
    afterNavigate: async function (virtualPageSlug) {
        console.debug('afterNavigate excecuted: ', virtualPageSlug);
        // `virtualPageSlug` is determined by the regular expression above, which
        // corresponds with `:unused?` in the server-side route for this page.
        switch (virtualPageSlug) {
            case 'hello':
                this.modal = 'example';
                break;
            case 'createDiagram':
                this.modal = 'createDiagram';
                break;
            case 'joinDiagram':
                this.modal = 'joinDiagram';
                break;
            default:
                this.modal = '';
        }
    },

    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {

        showModalCreateDiagram: async function () {
            this.goto('/welcome/createDiagram');
            console.debug('show diagram modal');
        },

        showModalJoinDiagram: async function () {
            this.goto('/welcome/joinDiagram');
            console.debug('show join diagram modal');
        },

        clickOpenExampleModalButton: async function () {
            this.goto('/welcome/hello');
            // Or, without deep links, instead do:
            // ```
            // this.modal = 'example';
            // ```
        },

        closeExampleModal: async function () {
            this.goto('/welcome');
            console.debug('close diagram modal');
            // Or, without deep links, instead do:
            // ```
            // this.modal = '';
            // ```
        },

        submittedForm: async function (data) {
            this.cloudSuccess = true;
            this.formData.sessionId = data.sessionId;
            console.debug('submittedForm success');
            console.debug('data: ', data);
            localStorage.setItem('sessionId', data.sessionId);
        },

        copySessionId: async function () {
            let sessionId = document.getElementById('sessionId');
            sessionId.select();

            document.execCommand('copy');
            alert('Código de sesión copiado correctamente!');
        },

        gotoDiagramEditor: async function () {
            this.goto('/diagram');
        },

        joinSession: async function () {
            let sessionId = document.getElementById('sessionId').value;
            if (!sessionId || sessionId.length === 0) {
                alert('Ingrese un código de sesión valido');
                return;
            }

            localStorage.setItem('sessionId', sessionId);
            this.goto('/diagram');
        }
    }
});
