module.exports = {
    title: 'Homepage Component Title',
    status: 'prototype',
    context: {
        homepageTitle: 'HomepageTest',

        // merged data
        persons: {
            person: [
                {
                    name: 'Überschriebene Person!',
                    company: 'Homepage',
                    quote: 'Einfach so!'
                }
            ]
        },

        // new person data for component @person-list
        person: [
            {
                name: 'Max Mustermann',
                company: 'Lorem ipsum',
                quote: 'Yes!'
            },
            {
                name: 'Jutta Musterfrau',
                company: 'dolor sit amet',
                quote: 'No!'
            }
        ]
    }
};
