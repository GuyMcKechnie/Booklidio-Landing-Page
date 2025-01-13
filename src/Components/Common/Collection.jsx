function Collections({ products }) {
    console.log(products);
    return (
        <section>
            {products.map((product, index) => (
                <div key={index}>
                    <img src={product.image} alt="" />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </section>
    );
}

export default Collections;
