import React from 'react'
import "./foods.css"

export default class DetailedStarter extends React.Component{
    constructor(props) {
        super(props);
        this.actualdetailId = this.props.match.params.actualid;
        this.state = {
            actualID: {}
        }
    }

    componentDidMount() {
        fetch(`https://api.edamam.com/api/recipes/v2/${this.actualdetailId}?type=public&app_id=c3600678&app_key=073352dcbd07fab1305f749d001d4b83`)
            .then(function(response){
                return response.json();
            }).then(recipe => this.setState(state => ({actualID: recipe})))
    }

    render() {
        let food = this.state.actualID
        console.log(this.state.actualID)
        return(
            <>
                {Object.keys(food).length > 0 ?
                    <div className={"details"}>
                    <h1>{food.recipe.label}</h1>
                        <img src={food.recipe.image}/>
                        <h2>INGREDIENT LINE: {this.state.actualID.recipe.ingredientLines}</h2>
                        <div className="label-box">
                            {food.recipe.healthLabels.map(label => <span className="health-label">{label}</span>)}
                        </div>
                    </div> : <div> </div>}
            </>
        )
    }
}
