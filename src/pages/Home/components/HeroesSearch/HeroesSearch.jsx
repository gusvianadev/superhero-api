import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SearchResSty from './HeroesSearch.styles';
import HeroSearchFn from './HeroesSearch.functions';

const HeroesSearch = ({ heroList, setHeroList }) => {
	const [searchRes, setSearchRes] = useState(null);
	const { isLoading, isError, searchHeroes } = HeroSearchFn({ setSearchRes });

	return (
		<Form.Group className="position-relative mt-3 d-flex">
			<Form.Control
				className="me-2"
				type="text"
				placeholder="search hero..."
				onChange={({ target }) =>
					searchHeroes(target.value, setSearchRes)
				}
			/>
			<Button type="submit">add</Button>
			{searchRes && (
				<SearchResSty className="d-flex flex-column position-absolute">
					{isLoading
						? 'loading...'
						: !isError &&
						  searchRes.map(({ id, image, name }) => (
								<div
									key={id}
									className="search-result__item d-flex"
								>
									<img
										className="me-2"
										src={image.url}
										alt={`${name} search result`}
									/>
									<span className="my-auto">{name}</span>
									<Button
										variant="success"
										className="my-auto ms-auto me-1"
										size="sm"
										onClick={() =>
											setHeroList([
												...heroList,
												searchRes.find(
													(hero) => hero.id === id
												),
											])
										}
									>
										+
									</Button>
								</div>
						  ))}
				</SearchResSty>
			)}
		</Form.Group>
	);
};

export default HeroesSearch;
