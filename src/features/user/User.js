import React, { useEffect } from "react";
import styles from './index.css'
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync, selectLoading, selectUser } from "./userSlice";
import { pushMessage } from "../count/redux/action";

const User = () => {

	const dispatch = useDispatch();

	const data = useSelector(selectUser);
	const loading = useSelector(selectLoading);

	useEffect(() => {
		if (loading) {
			pushMessage('info', 'Preparing')
		}
	})

	useEffect(() => {
		dispatch(getUserAsync());
	}, []);

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label="Decrement value"
					onClick={e => console.log(e)}
				>
					-
				</button>
				<span className={styles.value}>0</span>
				<button
					className={styles.button}
					aria-label="Increment value"
					onClick={e => console.log(e)}
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
					onClick={e => console.log(e)}
				>
					Add Amount
				</button>
				<button
					className={styles.asyncButton}
					onClick={() => dispatch(getUserAsync())}
					disabled={loading}
				>
					Add Async
				</button>
				<button
					className={styles.button}
					onClick={e => console.log(e)}
				>
					Add If Odd
				</button>
				<div>
					{
						loading ? "Loading..." :
							data?.map(element => {
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
		</div>
	);
}

export default User;