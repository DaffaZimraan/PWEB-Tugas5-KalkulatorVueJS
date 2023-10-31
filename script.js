const app = Vue.createApp({
    data() {
        return {
            expression: ''
        };
    },
    methods: {
        addToExpression(value) {
            this.expression += value;
        },
        clearExpression() {
            this.expression = '';
        },
        calculateResult() {
            try {
                this.expression = eval(this.expression);
            } catch (error) {
                this.expression = 'Error';
            }
        }
    }
});

app.mount('#calculator');
