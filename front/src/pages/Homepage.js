import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

export default function Homepage() {
	const REVIEWS = gql`
		query GetReviews {
			reviews {
				data {
					id
					attributes {
						title
						rating
						body
					}
				}
			}
		}
	`;
	const { data, loading, error } = useQuery(REVIEWS);
	if (loading) return <p>"Loading..."</p>;
	if (error) return <p>Error happened:(</p>;

	console.log(data);
	return (
		<div>
			{data.reviews.data.map((review) => (
				<div key={review.id} className="review-card">
					<div className="rating"></div>
					<h2>{review.attributes.title}</h2>
					<small>console list</small>
					<p>
						{review.attributes.body[0].children[0].text.substring(0, 200)} ...
					</p>

					<Link to={`/details/${review.id}`}>Details</Link>
				</div>
			))}
		</div>
	);
}
