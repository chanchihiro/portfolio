import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Takoyaki extends React.Component {
	render() {
		return(
			<div className="goal">
				<h2>あなたに合ったアイドルは...</h2>
				<p className="question_e">たこ焼き</p>
				<img src="./img/idol_takoyaki.jpg" className="idol_img" />
				<button className="question_button"><Link className="question_button_text" to="/"><img src="./img/btn_top.png" /></Link></button>
			</div>
		)
	}
}

export default Takoyaki