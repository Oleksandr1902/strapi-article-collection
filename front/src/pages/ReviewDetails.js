import React from "react";

export default function ReviewDetails() {
	// prettier-ignore
	const REVIEW = gql`
		query GetReviews {
			reviews {
				data {
					id,
					attributes {
						title,
						rating,
						body
					}
				}
			}
		}
	`;
	return <div>Details</div>;
}
