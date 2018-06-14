import React from "react";
import "./Card.css";

class Card extends React.Component  {
	
	

	render(){
		return (
			<div className="card">
				<div className="card-body">
					<div className="card-img">
						<img name="dice" id={this.props.id} alt ={this.props.id} src={this.props.img} onClick={this.props.click} width="100" height="100" />
					</div>
				</div>
			</div>
			);
	}
};

export default Card;