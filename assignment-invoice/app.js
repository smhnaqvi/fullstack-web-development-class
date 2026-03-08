var invoice = [
    {
        fruit: "apple",
        quantity: 1,
        price: 10
    },
    {
        fruit: "banana",
        quantity: 2,
        price: 20
    },
    {
        fruit: "orange",
        quantity: 3,
        price: 30
    },
    {
        fruit: "pineapple",
        quantity: 4,
        price: 40
    },
    {
        fruit: "strawberry",
        quantity: 5,
        price: 50
    },
    {
        fruit: "watermelon",
        quantity: 6,
        price: 60
    }
];

const currency = "RS.";

function addItem(event) {
    event.preventDefault();

    const form = event.target;
    const fruit = form.fruit.value;
    const quantity = form.quantity.value;
    const price = form.price.value;

    invoice.push({
        fruit,
        quantity,
        price
    });

    form.reset();
    renderInvoice();
}

function renderInvoice() {
    const invoiceBody = document.getElementById("invoice-body");
    invoiceBody.innerHTML = "";

    invoice.forEach(item => {
        const total = item.price * item.quantity;
        invoiceBody.innerHTML += `
            <tr>
                <td>${item.fruit}</td>
                <td>${item.quantity}</td>
                <td>${currency} ${item.price}</td>
                <td>${currency} ${total}</td>
            </tr>
        `;
    });

    const total = invoice.reduce((acc, item) => acc + item.price * item.quantity, 0);
    document.getElementById("total").innerHTML = currency + " " +total;
}

function clearInvoice() {
    invoice = [];
    renderInvoice();
}
function printInvoice() {
    window.print();
}

renderInvoice();