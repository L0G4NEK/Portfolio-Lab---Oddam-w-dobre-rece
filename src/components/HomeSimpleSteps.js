const homeSimpleSteps = () => {
    return ( 
        <div className="homeSimpleSteps">
            <h1 className="homeSimpleSteps__title">Wystarczą 4 proste kroki</h1>
            <img src={require("../assets/Decoration.png")} alt="dekoracja" className="homeSimpleSteps__decoration" />
            <div className="homeSimpleSteps__steps">
                <div className="homeSimpleSteps__column">
                    <img src={require("../assets/Icon-1.png")} alt="icon" />
                    <h4>Wybierz rzeczy</h4>
                    <div></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="homeSimpleSteps__column">
                    <img src={require("../assets/Icon-2.png")} alt="icon" />
                    <h4>Spakuj je</h4>
                    <div></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="homeSimpleSteps__column">
                    <img src={require("../assets/Icon-3.png")} alt="icon" />
                    <h4>Zdecyduj komu chcesz pomóc</h4>
                    <div></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="homeSimpleSteps__column">
                    <img src={require("../assets/Icon-4.png")} alt="icon" />
                    <h4>Zamów kuriera</h4>
                    <div></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <a href="/" className="homeSimpleSteps__btn">Oddaj rzeczy</a>
        </div>
     );
}

export default homeSimpleSteps;