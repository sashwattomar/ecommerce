import FeatureCard from "./FeatureCard"


const Feature = () => {
    const data = [{
        img: "/icon__cosmetics.png",
        title: "Naturally Derived",
        description: "Natural and organic beauty product",
    }, {
        img: "/icon__ship.png",
        title: "Free Shipping",
        description: "Free shipping on all orders over $99",
    }, {
        img: "/icon__money.png",
        title: "Secure Payment",
        description: "Fully protected when paying online",
    }]
    return (
        <div className="container pt-16">
            <div className="grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4">
                {data.map((item => <FeatureCard key={item.title} img={item.img} title={item.title} description={item.description}></FeatureCard>))}
            </div>
        </div>
    )
}

export default Feature