Vue.component('task', {
    template: 'task'
});

Vue.component('book', {
    template: 'book',
    props: 'book'
});

new Vue({
    el: '#app',
    data: {
        author: 'Александр Дюма',
        title: 'Граф Монте-кристо',
        text: 'lorem sacnashgc ajshasgcas ashdas cascsahc as'
    },
    methods: {
        changeAuthor:
            function () {
                return {
                    author: this.author = 'Дюма Александр',
                }
            }
    }
});