import { useEffect, useState } from "react";
import Product from "./Product";

function Collection({ products = [] }) {
    const [gradeCategory, setGradeCategory] = useState([]);
    const [subjectCategory, setSubjectCategory] = useState([]);
    const [productFilter, setProductFilter] = useState(products);

    const handleGradeChange = (event) => {
        const value = Number(event.target.value);
        if (gradeCategory.includes(value)) {
            setGradeCategory((prev) => prev.filter((grade) => grade !== value));
        } else {
            setGradeCategory((prev) => [...prev, value]);
        }
    };

    const handleSubjectChange = (event) => {
        const value = event.target.value;
        if (subjectCategory.includes(value)) {
            setSubjectCategory((prev) =>
                prev.filter((subject) => subject !== value)
            );
        } else {
            setSubjectCategory((prev) => [...prev, value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();
        if (gradeCategory.length > 0) {
            productsCopy = productsCopy.filter((product) =>
                gradeCategory.includes(product.grade)
            );
        }
        if (subjectCategory.length > 0) {
            productsCopy = productsCopy.filter((product) =>
                subjectCategory.includes(product.subject)
            );
        }
        setProductFilter(productsCopy);
    };

    // Call applyFilter whenever gradeCategory or subjectCategory changes
    useEffect(() => {
        applyFilter();
    }, [gradeCategory, subjectCategory]);

    useEffect(() => {
        setProductFilter(products);
    }, []);

    return (
        <section className="flex justify-between">
            {/* Sidebar */}
            <div>
                <h3>Filter</h3>
                <div className="">
                    <h3>Grades</h3>
                    <div>
                        <p>
                            <input
                                type="checkbox"
                                value={1}
                                onChange={handleGradeChange}
                            />{" "}
                            Grade 1
                        </p>
                        <p>
                            <input
                                type="checkbox"
                                value={2}
                                onChange={handleGradeChange}
                            />{" "}
                            Grade 2
                        </p>
                        <p>
                            <input
                                type="checkbox"
                                value={3}
                                onChange={handleGradeChange}
                            />{" "}
                            Grade 3
                        </p>
                    </div>
                    <h3>Subjects</h3>
                    <div>
                        <p>
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                value={`English`}
                                onChange={handleSubjectChange}
                            />{" "}
                            English
                        </p>
                        <p>
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                value={`Afrikaans`}
                                onChange={handleSubjectChange}
                            />{" "}
                            Afrikaans
                        </p>
                        <p>
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                value={`Mathematics`}
                                onChange={handleSubjectChange}
                            />{" "}
                            Mathematics
                        </p>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div>
                <div>
                    <h1>All Collections</h1>
                    <select className="">
                        <option value="Relevant">Sort by Relevancy</option>
                        <option value="Low-High">Sort by Low to High</option>
                        <option value="High-Low">Sort by High to Low</option>
                    </select>
                </div>
                {/* Filtered Products */}
                <div>
                    {productFilter.length > 0 ? (
                        productFilter.map((product, index) => (
                            <Product
                                key={index}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Collection;
