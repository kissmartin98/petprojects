import React from "react"
import "./foods.css"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class Starter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starters: {},
            foodTypes: [
                "American",
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
            selectedtype: null,
            mealTimes: ["Breakfast",
                "Dinner",
                "Lunch",
                "Snack",
                "Teatime"],
            selectedmealtime: null,
            selectedhrf: [],
            link:""
        }
    }

    componentDidMount() {
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=c3600678&app_key=073352dcbd07fab1305f749d001d4b83&dishType=Starter&imageSize=REGULAR`)
            .then(function (response) {
                return response.json();
            }).then(recipes => {
            let hits = recipes.hits.map(recipe => {
                let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                return {...recipe, id: id};
            });
            recipes.hits = hits;
            this.setState({
                starters: recipes,
                selectedhrf:[...this.state.selectedhrf,`https://api.edamam.com/api/recipes/v2?type=public&app_id=c3600678&app_key=073352dcbd07fab1305f749d001d4b83&dishType=Starter&imageSize=REGULAR`]
            })
        })
    }

    nextpage = () => {
        console.log(this.state.starters._links.next.href)
        fetch(this.state.starters._links.next.href)
            .then(function (response) {
                return response.json();
            }).then(recipes => {
            let hits = recipes.hits.map(recipe => {
                let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                return {...recipe, id: id};
            });
            recipes.hits = hits;
            this.setState({
                starters: recipes,
                selectedhrf: [...this.state.selectedhrf,this.state.starters._links.next.href],
                link:""
            })
        })
    }

    prepage = () => {
        if(this.state.link=="prevPage"){
        let prepage = this.state.selectedhrf.pop()
        console.log(prepage)
        fetch(prepage)
            .then(function (response) {
                return response.json();
            }).then(recipes => {
            let hits = recipes.hits.map(recipe => {
                let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                return {...recipe, id: id};
            });
            recipes.hits = hits;
            this.setState({
                starters: recipes,
                link:"prevPage"
            })
        })
    }
        this.state.selectedhrf.pop()
        fetch(this.state.selectedhrf.pop())
            .then(function (response) {
                return response.json();
            }).then(recipes => {
            let hits = recipes.hits.map(recipe => {
                let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                return { ...recipe, id: id };
            });
            recipes.hits = hits;
            this.setState({ starters: recipes })
        })
        this.setState({link: "prevPage"})
    }


    changeFoodType = (e) => this.setState({
        selectedtype: e.target.value
    })

    changeMealTime = (e) => this.setState({
        selectedmealtime: e.target.value
    })

    submit = () => {
        if(this.state.selectedtype != null && this.state.selectedmealtime != null){
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=c45b526e&app_key=85191f6a5c57e215de6f89d5b48dd243&cuisineType=${this.state.selectedtype}&mealType=${this.state.selectedmealtime}&dishType=Starter&imageSize=REGULAR`)
                .then(function (response) {
                    return response.json();
                }).then(recipes => {
                let hits = recipes.hits.map(recipe => {
                    let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                    return {...recipe, id: id};
                });
                recipes.hits = hits;
                this.setState({starters: recipes,
                    selectedhrf: [...this.state.selectedhrf, `https://api.edamam.com/api/recipes/v2?type=public&app_id=c45b526e&app_key=85191f6a5c57e215de6f89d5b48dd243&cuisineType=${this.state.selectedtype}&mealType=${this.state.selectedmealtime}&dishType=Starter&imageSize=REGULAR`],
                    link:""})
            })
        }  if(this.state.selectedtype === null && this.state.selectedmealtime === null){
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=c45b526e&app_key=85191f6a5c57e215de6f89d5b48dd243&dishType=Starter&imageSize=REGULAR`)
                .then(function (response) {
                    return response.json();
                }).then(recipes => {
                let hits = recipes.hits.map(recipe => {
                    let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                    return {...recipe, id: id};
                });
                recipes.hits = hits;
                this.setState({starters: recipes,
                    selectedhrf: [...this.state.selectedhrf, `https://api.edamam.com/api/recipes/v2?type=public&app_id=c45b526e&app_key=85191f6a5c57e215de6f89d5b48dd243&dishType=Starter&imageSize=REGULAR`],
                    link:""})
            })

        } if (this.state.selectedtype === null && this.state.selectedmealtime != null) {
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=c45b526e&app_key=85191f6a5c57e215de6f89d5b48dd243&mealType=${this.state.selectedmealtime}&dishType=Starter&imageSize=REGULAR`)
                .then(function (response) {
                    return response.json();
                }).then(recipes => {
                let hits = recipes.hits.map(recipe => {
                    let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                    return {...recipe, id: id};
                });
                recipes.hits = hits;
                this.setState({starters: recipes,
                    selectedhrf: [...this.state.selectedhrf, `https://api.edamam.com/api/recipes/v2?type=public&app_id=c45b526e&app_key=85191f6a5c57e215de6f89d5b48dd243&mealType=${this.state.selectedmealtime}&dishType=Starter&imageSize=REGULAR`],
                    link:""})
                })
        } if (this.state.selectedtype != null && this.state.selectedmealtime === null) {
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=c45b526e&app_key=85191f6a5c57e215de6f89d5b48dd243&cuisineType=${this.state.selectedtype}&dishType=Starter&imageSize=REGULAR`)
                .then(function (response) {
                    return response.json();
                }).then(recipes => {
                let hits = recipes.hits.map(recipe => {
                    let id = recipe.recipe.uri.split('#')[1].split('_')[1];
                    return {...recipe, id: id};
                });
                recipes.hits = hits;
                this.setState({starters: recipes,
                    selectedhrf: [...this.state.selectedhrf, `https://api.edamam.com/api/recipes/v2?type=public&app_id=c45b526e&app_key=85191f6a5c57e215de6f89d5b48dd243&cuisineType=${this.state.selectedtype}&dishType=Starter&imageSize=REGULAR`],
                    link:""
                })
            })
        }


    }


    render() {
        return (
            <>
                <div className={"foodcontainer"}>
                    <div className={"select-container"}>
                        <select onChange={this.changeFoodType}>
                            <option value={null}>Choose a food type</option>
                            {this.state.foodTypes.map(type => <option value={type}>{type}</option>)}
                        </select>
                        <select onChange={this.changeMealTime}>
                            <option value={null}>Choose a meal time</option>
                            {this.state.mealTimes.map(type => <option value={type}>{type}</option>)}
                        </select>
                        <button className={"submit"} onClick={this.submit}>Submit</button>
                    </div>
                    {Object.keys(this.state.starters).length > 0 ? this.state.starters.hits.map(recipe =>
                            <Link to={`/starter/${recipe.id}`}>
                                <div className={"foods"}>
                                    <h1>{recipe.recipe.label}</h1>
                                    <img src={recipe.recipe.image}></img>
                                    <p className="preview-text"><span
                                        className="preview-tag">{recipe.recipe.cuisineType}</span>
                                        <span className="preview-tag">{recipe.recipe.mealType}</span>
                                    </p>
                                </div>
                            </Link>)
                        :
                        <div></div>}
                </div>
                <button className={"prevbtn"} onClick={this.prepage}>Previous page</button>
                <button className={"nextbtn"} onClick={this.nextpage}>Next page</button>
            </>

        )
    }
}
