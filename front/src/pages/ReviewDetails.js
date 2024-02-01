import { useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const REVIEW = gql`
	query GetReview($id: ID!) {
		review(id: $id) {
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

export default function ReviewDetails() {
	const { id } = useParams();
	const { data, loading, error } = useQuery(REVIEW, {
		variables: { id: id },
	});

	if (loading) return <p>"Loading..."</p>;
	if (error) return <p>Error happened:(</p>;

	console.log(data);
	const item = data.review.data;
	return (
		<div>
			<div key={item.id} className="review-card">
				<div className="rating"></div>
				<h2>{item.attributes.title}</h2>
				<small>console list</small>
				<div>
					{item.attributes.body.map((paragraph) => (
						<p>{paragraph.children[0].text}</p>
					))}
				</div>

				<Link to="/">Go back</Link>
			</div>
		</div>
	);
}
