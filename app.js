const apiUrl = 'data.json';

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const productList = document.getElementById('products');

        productList.innerHTML = '';

        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productName = document.createElement('h3');
            productName.textContent = product.name;
            
            // const productDate = document.createElement('h4');
            // productDate.textContent = product.date-added;

            // const productDescrip = document.createElement('h2');
            // productDescrip.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price}`;

            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            // productCard.appendChild(productDescrip);
            // productCard.appendChild(productDate);

            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndDisplayProducts();