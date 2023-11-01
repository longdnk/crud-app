import React from "react";
import styles from "../counter/Counter.module.css";
import { addNumberRequest, getData, minusNumberRequest } from "./redux/action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Count extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount = () => {
		this.props.getData();
	}

	render = () => {

		const { addNumber, minusNumber, counter: { count }, apiData } = this.props;

		return (
			<div>
				<div className={styles.row}>
					<button
						className={styles.button}
						aria-label="Decrement value"
						onClick={minusNumber}
					>
						-
					</button>
					<span className={styles.value}>{count}</span>
					<button
						className={styles.button}
						aria-label="Increment value"
						onClick={addNumber}
					>
						+
					</button>
				</div>
				<div className={styles.row}>
					<input
						className={styles.textbox}
						aria-label="Set increment amount"
						value={1}
						onChange={(e) => console.log(e)}
					/>
					<button
						className={styles.button}
						onClick={value => console.log(value)}
					>
						Add Amount
					</button>
					<button
						className={styles.asyncButton}
						onClick={value => console.log(value)}
					>
						Add Async
					</button>
					<button
						className={styles.button}
						onClick={value => console.log(value)}
					>
						Add If Odd
					</button>
				</div>
				<div>
					{
						apiData.loading ? "Loading..." :
							apiData.data.map(element => {
								return (
									<div key={element.id} style={{ marginBottom: 10 }}>
										<div>
											createdAt: {element?.createAt}
										</div>
										<div>
											name: {element?.name}
										</div>
										<div>
											avatar: {element?.avatar}
										</div>
										<div>
											role: {element?.role}
										</div>
										<div>
											token: {element?.token}
										</div>
									</div>
								)
							})
					}
				</div>
			</div>
		)
	}
}

const stateToProp = state => {
	return {
		counter: state.counter,
		apiData: state.counter.apiData,
	}
}

const dispatchToProps = dispatch => {
	return {
		addNumber: () => {
			dispatch(addNumberRequest());
		},
		minusNumber: () => {
			dispatch(minusNumberRequest());
		},
		getData: () => {
			dispatch(getData());
		}
	}
}

Count.propTypes = {
	addNumber: PropTypes.func.isRequired,
	minusNumber: PropTypes.func.isRequired,
	counter: PropTypes.object.isRequired,
	getData: PropTypes.func.isRequired,
	apiData: PropTypes.object.isRequired,
}

export default connect(stateToProp, dispatchToProps)(Count);