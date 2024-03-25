document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('studentInfo').textContent = 'Student ID: 200552821 | Name: Abel Sam Mathew';

    document.getElementById('orderBtn').addEventListener('click', function (event) {
        event.preventDefault();

        let pizzaSize = document.getElementById('pizzaSize').value;
        let toppings = [];
        document.querySelectorAll('input[name="topping"]:checked').forEach(topping => {
            toppings.push(topping.value);
        });

        let pizza = new Pizza(pizzaSize, toppings);

        document.getElementById('pizzaOutput').textContent = pizza.getDescription();
    });

    class Pizza {
        constructor(size, toppings) {
            this.size = size;
            this.toppings = toppings;
        }

        getDescription() {
            return `You ordered a ${this.size} pizza with ${this.toppings.join(', ')} toppings.`;
        }
    }
});
