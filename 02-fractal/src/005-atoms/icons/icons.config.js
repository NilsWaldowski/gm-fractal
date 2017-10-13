const svgs = require(__base + 'svgson.json')

let variants = []

svgs.forEach(function(element) {
    variants.push({
        name: element.title,
        context: {
            name: element.title,
            attrs: element.attrs
        }
    })
})

module.exports = {
    title: 'Project SVG Icons',
    context: {
        //svgs: svgs,
        //test: variants
    },
    default: 'logo',
    collated: true,
    collator: function(markup, item) {
        return `<!-- Start: @${item.handle} -->\n
        <div style="margin-bottom: 50px;">
            <p style="margin-bottom:15px;">
                <strong>${item.handle}</strong>
            </p>${markup}
        </div>\n<!-- End: @${item.handle} -->\n`
    },
    variants: variants
}
