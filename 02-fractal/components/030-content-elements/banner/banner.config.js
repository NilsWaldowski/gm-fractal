module.exports = {
    title: 'Notification Banner',
    status: 'ready',
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
