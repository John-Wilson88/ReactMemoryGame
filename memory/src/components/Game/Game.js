import React from "react";
import Card from "../Card";

class Game extends React.Component {
constructor(props){
		super(props);
		this.state = {
			currentScore: 0,
			highScore: 0,
			userMemories: []
		};
		this.memories = [
				{
					"id": 1,
					"img": "https://etc.usf.edu/clipart/39100/39191/die_01_02_04_39191_sm.gif"
				},
				{
					"id": 2,
					"img": "https://etc.usf.edu/clipart/39100/39192/die_01_03_02_39192_sm.gif"
				},
				{
					"id": 3,
					"img": "https://etc.usf.edu/clipart/39100/39193/die_01_04_05_39193_sm.gif"
				},
				{
					"id": 4,
					"img": "https://etc.usf.edu/clipart/39100/39194/die_01_05_03_39194_sm.gif"
				},
				{
					"id": 5,
					"img": "https://etc.usf.edu/clipart/39100/39195/die_02_01_03_39195_sm.gif"
				},
				{
					"id": 6,
					"img": "https://etc.usf.edu/clipart/39100/39196/die_02_03_06_39196_sm.gif"
				},
				{
					"id": 7,
					"img": "https://etc.usf.edu/clipart/39100/39197/die_02_04_01_39197_sm.gif"
				},
				{
					"id": 8,
					"img": "https://etc.usf.edu/clipart/39100/39198/die_02_06_04_39198_sm.gif"
				},
				{
					"id": 9,
					"img": "https://etc.usf.edu/clipart/39100/39199/die_03_01_05_39199_sm.gif"
				},
				{
					"id": 10,
					"img": "https://etc.usf.edu/clipart/39200/39200/die_03_02_01_39200_sm.gif"
				},
				{
					"id": 11,
					"img": "https://etc.usf.edu/clipart/39200/39201/die_03_05_06_39201_sm.gif"
				},
				{
					"id": 12,
					"img": "https://etc.usf.edu/clipart/39200/39202/die_03_06_02_39202_sm.gif"
				},
				{
					"id": 13,
					"img": "https://etc.usf.edu/clipart/39200/39203/die_04_01_02_39203_sm.gif"
				},
				{
					"id": 14,
					"img": "https://etc.usf.edu/clipart/39200/39204/die_04_02_06_39204_sm.gif"
				},
				{
					"id": 15,
					"img": "https://etc.usf.edu/clipart/39200/39205/die_04_05_01_39205_sm.gif"
				},
				{
					"id": 16,
					"img": "https://etc.usf.edu/clipart/39200/39206/die_04_06_05_39206_sm.gif"
				},
				{
					"id": 17,
					"img": "https://etc.usf.edu/clipart/39200/39207/die_05_01_04_39207_sm.gif"
				},
				{
					"id": 18,
					"img": "https://etc.usf.edu/clipart/39200/39208/die_05_03_01_39208_sm.gif"
				},
				{
					"id": 19,
					"img": "https://etc.usf.edu/clipart/39200/39209/die_05_04_06_39209_sm.gif"
				},
				{
					"id": 20,
					"img": "https://etc.usf.edu/clipart/39200/39210/die_05_06_03_39210_sm.gif"
				},
				{
					"id": 21,
					"img": "https://etc.usf.edu/clipart/39200/39211/die_06_02_03_39211_sm.gif"
				},
				{
					"id": 22,
					"img": "https://etc.usf.edu/clipart/39200/39212/die_06_03_05_39212_sm.gif"
				},
				{
					"id": 23,
					"img": "https://etc.usf.edu/clipart/39200/39213/die_06_04_02_39213_sm.gif"
				},
				{
					"id": 24,
					"img": "https://etc.usf.edu/clipart/39200/39214/die_06_05_04_39214_sm.gif"
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
		this.setState({
			userMemories: [...this.state.userMemories, id]
		});

		if (!this.state.userMemories.includes(id)) {
			this.setState({
				currentScore: this.state.currentScore + 1
			});
			this.shuffleMemories(this.memories);
		} 

		else  {

			if (this.state.currentScore > this.state.highScore) {

				console.log("you lose");
				this.setState({
					userMemories: [],
					highScore: this.state.currentScore,
					currentScore: 0
				});
				this.shuffleMemories(this.memories);
			} else {
				console.log("you lose");
				this.setState({
					userMemories: [],
					currentScore: 0
				});
				this.shuffleMemories(this.memories);
			}
		}
	}

	render(){
		return (

			<div className="container">
				
				<h1> Dice Memory Game </h1>

				<div className="row">
					<div className="col-md-8">

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


export default Game;




