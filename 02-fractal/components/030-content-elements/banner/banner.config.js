module.exports = {
    title: 'Notification Banner',
    status: 'ready',

    // If set to true, individual variants of this component will not be visible
    // in the web UI - instead the preview of this component will concatenate
    // all variants together into a single preview.
    collated: false,
    context: {
        modifier: 'default',
        message: 'Default Message',
        buttonText: 'Close Message'
    },
    variants: [
        {
            name: 'warning',
            context: {
                modifier: 'alert',
                message: 'Warning Message',
                buttonText: 'Close warning'
            }
        },
        {
            name: 'success',
            context: {
                modifier: 'success',
                message: 'Success Message',
                buttonText: 'Close success'
            }
        },
        {
            name: 'validate',
            context: {
                modifier: 'validate',
                message: 'Validate Message',
                buttonText: 'Close validate'
            }
        }
    ]
}
