function Home() {

    return (

        <div className="container mt-4">

            <h1 className="text-center mb-4">
                Our Story
            </h1>

            <p className="text-center">

                We believe in good food. We launched
                Fresh Pan Pizza Best Excuse Awards on
                our Facebook fan page. Fans were given
                situations where they had to come up
                with wacky and fun excuses.

            </p>

            <div className="row mt-5 align-items-center">

                <div className="col-md-6">

                    <img
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                        alt="ingredients"
                        className="img-fluid"
                    />

                </div>

                <div className="col-md-6">

                    <h2>Ingredients</h2>

                    <p>

                        We’re ruthless about goodness.
                        We have no qualms about tearing
                        up a day-old lettuce leaf.

                    </p>

                </div>

            </div>

            <div className="row mt-5 align-items-center">

                <div className="col-md-6">

                    <h2>Our Chefs</h2>

                    <p>

                        They make sauces sing and salads
                        dance. They create magic with skill,
                        knowledge, passion and stirring spoons.

                    </p>

                </div>

                <div className="col-md-6">

                    <img
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
                        alt="chef"
                        className="img-fluid"
                    />

                </div>

            </div>

            <div className="row mt-5 align-items-center">

                <div className="col-md-6">

                    <img
                        src="https://images.unsplash.com/photo-1501139083538-0139583c060f"
                        alt="delivery"
                        className="img-fluid"
                    />

                </div>

                <div className="col-md-6">

                    <h2>45 min delivery</h2>

                </div>

            </div>

            <footer className="text-center mt-5 mb-3">

                <small>
                    Copyright © 2026 Pizzaria.
                    All rights reserved.
                </small>

            </footer>

        </div>
    );
}

export default Home;