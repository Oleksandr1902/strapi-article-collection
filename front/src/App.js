import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:1337/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<Router>
			<ApolloProvider client={client}>
				<div className="App">
					<SiteHeader />
					<Routes>
						<Route path="/" element={<Homepage />} />

						<Route path="details/:id" element={<ReviewDetails />} />

						<Route path="category/:id" element={<Category />} />
					</Routes>
				</div>
			</ApolloProvider>
		</Router>
	);
}

export default App;
