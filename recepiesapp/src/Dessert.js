import React from "react"
import "./foods.css"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class Dessert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desserts: {},
            foodTypes: ["American",
                "Asian",
                "British",
                "Caribbean",
                "Central Europe",
                "Chinese",
                "Eastern Europe",
                "French",
                "Indian",
                "Italian",
                "Japanese",
                "Kosher",
                "Mediterranean",
                "Mexican",
                "Middle Eastern",
                "Nordic",
                "South American",
                "South East Asian",
            ],
            selectedtype: "All"
        }
    }

    componentDidMount() {
        fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=c3600678&app_key=073352dcbd07fab1305f749d001d4b83&dishType=Dessert&imageSize=REGULAR")
            .then(function (response) {
                return response.json();
            }).then(recipes => {
            let hits = recipes.hits.map(recipe => {
                let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                return {...recipe, id: id};
            });
            recipes.hits = hits;
            this.setState({desserts: recipes})
        })
    }

    nextpage = () => {
        fetch(this.state.desserts._links.next.href)
            .then(function (response) {
                return response.json();
            }).then(recipes => {
            let hits = recipes.hits.map(recipe => {
                let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                return {...recipe, id: id};
            });
            recipes.hits = hits;
            this.setState({desserts: recipes})
        })
        console.log(this.state.desserts)
    }

    changeFoodType = (e) => this.setState({
        selectedtype: e.target.value
    })


    render() {
        return (
            <>
                <div className={"foodcontainer"}>
                    <select onChange={this.changeFoodType}>
                        {this.state.foodTypes.map(type => <option value={type}>{type}</option>)}
                    </select>
                    {Object.keys(this.state.desserts).length > 0 ? this.state.desserts.hits.map(recipe =>
                            <Link to={`/dessert/${recipe.id}`}>
                                <div className={"foods"}>
                                    <h1>{recipe.recipe.label}</h1>
                                    <img src={recipe.recipe.image}></img>
                                </div>
                            </Link>)
                        :
                        <div></div>}

                </div>
                <button className={"nextbtn"} onClick={this.nextpage}>Next page</button>
            </>
        )
    }
}