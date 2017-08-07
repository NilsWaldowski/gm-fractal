export default function init() {

    const items = document.querySelectorAll('.test123 > div');

    class Item {

        constructor(el) {
            this.el = el;

            this.init()
        }

        init() {
            console.log(this.el);
            //console.log(Array.from(this.el));

            /*
            this.el.forEach(() => {
                console.log('test123');
            })
            */
        }
    }

    items.forEach(el => new Item(el))
}
