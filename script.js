document.addEventListener("DOMContentLoaded", function() {
    const stockData = [
        { name: "AAPL", price: 150.25, change: "+1.5%" },
        { name: "GOOGL", price: 2750.50, change: "-0.3%" },
        { name: "AMZN", price: 3400.75, change: "+2.1%" },
        { name: "TSLA", price: 700.00, change: "+3.2%" },
        { name: "MSFT", price: 299.99, change: "+0.8%" }
    ];

    const stockContainer = document.getElementById("stock-container");

    stockData.forEach(stock => {
        const stockCard = document.createElement("div");
        stockCard.className = "stock-card";

        const stockName = document.createElement("h3");
        stockName.textContent = stock.name;

        const stockPrice = document.createElement("p");
        stockPrice.textContent = `Price: $${stock.price}`;

        const stockChange = document.createElement("p");
        stockChange.textContent = `Change: ${stock.change}`;
        stockChange.style.color = stock.change.startsWith("+") ? "green" : "red";

        stockCard.appendChild(stockName);
        stockCard.appendChild(stockPrice);
        stockCard.appendChild(stockChange);

        stockContainer.appendChild(stockCard);
    });
});