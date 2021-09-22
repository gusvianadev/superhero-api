import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SearchResSty from './HeroesSearch.styles';
import HeroSearchFn from './HeroesSearch.functions';

const HeroesSearch = ({ heroList, setHeroList }) => {
	const [searchRes, setSearchRes] = useState(null);
	const { isLoading, isError, searchHeroes, addHero } = HeroSearchFn({
		searchRes,
		setSearchRes,
		heroList,
		setHeroList,
	});

	return (
		<Form.Group className="position-relative mt-3 d-flex">
			<Form.Control
				type="text"
				placeholder="search hero..."
				onChange={({ target }) =>
					searchHeroes(target.value, setSearchRes)
				}
			/>
			{searchRes && (
				<SearchResSty className="d-flex flex-column position-absolute">
					{isLoading
						? 'loading...'
						: !isError &&
						  searchRes.map(({ id, image, name, biography }) => (
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
										onClick={() => addHero(id, biography)}
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
