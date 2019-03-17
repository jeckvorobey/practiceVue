const tea = (name, type, year, factory, phone, image) => ({name, type, year, factory, phone, image});
const log = (text, type, date  = new  Date()) => ({text, type, date});

const teas = [
    tea ('Puer','loose','2009','Men Hay','+7 111 222 33 44','images/chai-puer-sostav.jpg'),
    tea ('Puer','press','2019','Pu Wen','+7 111 333 44 55','images/puerPress.jpg'),
    tea ('Naysay','Olong','2018','Men Hay','+7 111 444 55 66','images/MolochniyOlong.jpg')
];

new Vue({
   el: '#app',
    data: {
       teas: teas,
        tea: teas[0],
        logs: [],
        selectedTeaIndex: 0,
        teaVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
       selectTea(index) {
           this.tea = teas[index];
           this.selectedTeaIndex = index
       },
        newOrder() {
           this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.tea.name} - ${this.tea.type}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.tea.name} - ${this.tea.type}`, 'cancel')
            )
        }
    },
    computed: {
       changeBtnText() {
          return this.teaVisibility ? 'Hide phone' : 'Show phone'
       },
        filteredTea() {
           return this.teas.filter(tea => {
               return tea.name.indexOf(this.search) > -1 || tea.type.indexOf(this.search) > -1
           })
        }
    },
    filtres: {
       date(value) {
           return value.toLocaleString()
       }
    }
});