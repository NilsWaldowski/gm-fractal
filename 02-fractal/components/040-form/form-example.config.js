module.exports = {
    title: 'Form Example',
    status: 'wip',
    context: {

        // get Data from antoher Component
        test: '@field-text',

        // passed in data while import the component
        myData: {
            fieldTextLabel: 'Label from myData'
        },

        yourData: {
            fieldTextLabel: 'Label from yourData'
        }
    }
}
