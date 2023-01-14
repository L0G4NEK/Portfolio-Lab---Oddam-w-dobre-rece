

const HomeHeader = () => {
    return ( 
        <div className="homeHeader">
            <img src={require("../assets/Hero Image.png")} alt="Hero Image" className="homeHeader__hero" />
            <div className="homeHeader__text">
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={require("../assets/Decoration.png")} alt="Decoration" />
                <div className="homeHeader__btns">
                    <a href="/" id="giveThings">ODDAJ RZECZY</a>
                    <a href="/">ZORGANIZUJ ZBIÓRKĘ</a>
                </div>
            </div>
        </div>
     );
}
 
export default HomeHeader;