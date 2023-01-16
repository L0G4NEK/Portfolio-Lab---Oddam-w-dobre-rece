const homeSimpleSteps = () => {
    return ( 
        <div className="homeAboutUs">
            <div className="homeAboutUs__description">
                <h2>O nas</h2>
                <img src={require("../assets/Decoration.png")} alt="decoration" className="homeAboutUs__decoration" />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={require("../assets/Signature.png")} alt="signature" className="homeAboutUs__signature" />
            </div>
            <img src={require("../assets/People.png")} alt="people" className="homeAboutUs__people" />
        </div>
     );
}

export default homeSimpleSteps;