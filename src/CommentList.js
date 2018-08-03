import React, {Component} from 'react';
import Gravatar from 'react-gravatar'

export default class CommentList extends Component {
	constructor() {
		super();
		this.state = {
			filteredArr: [],
			displayFilteredArr: false
		};
		this.arrToRender = this.arrToRender.bind(this);
	}

	filterComments(e) {
		const tempArray = this.props.originalArr.filter((comment, i) => {
			return (
				comment.msg.includes(e.target.value)
			)
		});

		(e.target.value !== '') ?
			this.setState({displayFilteredArr: true})
			:
			this.setState({displayFilteredArr: false});

		this.setState({filteredArr: [...tempArray]})
	}

	arrToRender(arr) {
		return arr.map((comment) => {
			return (
				<li key={comment._id}>
					<Gravatar email={comment.email} size={50} default="monsterid"/>
					<div className="div">
						<p className='email'>{comment.email}</p>
						<p className='content'>{comment.msg}</p>
					</div>
				</li>
			)
		})
	}

	render() {
		const {filteredArr, displayFilteredArr} = this.state;
		const {originalArr} = this.props;
		return (
			<div className='main-comment-list-wrapper'>
				<div className='comment-wrapper'>
					<input onChange={(e) => this.filterComments(e)} type='text' placeholder='Filter'/>
					<ul className='comment-list'>
						{displayFilteredArr ?
							(this.arrToRender(filteredArr))
							:
							(this.arrToRender(originalArr))
						}
					</ul>
				</div>
			</div>
		)
	}
}
