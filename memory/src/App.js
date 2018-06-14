import React from "react";
import Card from "./components/Card";
//import memories from "./memories.json";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			// dice: 0,
			currentScore: 0,
			highScore: 0,
			memories: []
		};
		this.memories = [
				{
					"id": 1,
					"img": "https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice1-300x300.gif"
				},
				{
					"id": 2,
					"img": "https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice2-300x300.gif"
				},
				{
					"id": 3,
					"img": "https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice3-300x300.gif"
				},
				{
					"id": 4,
					"img": "https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice4-300x300.gif"
				},
				{
					"id": 5,
					"img": "https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice5-300x300.gif"
				},
				{
					"id": 6,
					"img": "https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice6-300x300.gif"
				},
				{
					"id": 7,
					"img": "https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice7-300x300.gif"
				},
				{
					"id": 8,
					"img": "https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice8-300x300.gif"
				},
				{
					"id": 9,
					"img": "https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice9-300x300.gif"
				}
				
			];

	}

	shuffleMemories = (memories) => {
	let m = memories.length, t, i;

	while (m) {

	    i = Math.floor(Math.random() * m--);

	    t = memories[m];
	    memories[m] = memories[i];
	    memories[i] = t;
	  }

	  return memories;
	}
	
	click = event => {
		event.preventDefault();
		console.log("click!");
		 const id = event.target.id;
		// const dice = event.target.name;
		this.setState({
			// [dice]: id,
			memories: [...this.state.memories, id]
		});

		if (!this.state.memories.includes(id)) {
			this.setState({
				currentScore: this.state.currentScore + 1
			});
			this.shuffleMemories(this.memories);
		} 

		else {
			console.log("you lose");
			this.setState({
				memories: [],
				highScore: this.state.currentScore,
				currentScore: 0
			});
		}
	}

	render(){
		return (
			<div className="container">
				<h1> Here! </h1>
				
				<div className="row">
					<div className="col-md-5">

						{this.memories.map(image => (
							<Card 
								key={image.id} 
								id={image.id}
								img={image.img}
								click={this.click}
							/> 
						))}
					</div>
		
					<div className="col-md-5">
						<h2> Current Score: {this.state.currentScore} </h2>
						<h2> High Score: {this.state.highScore}</h2>
					</div>
		
				</div>
		
			</div>
		)
	}
};

export default App;