import { Button, Modal } from 'react-bootstrap';

const HeroDetailsModal = ({ showModal, handleCloseModal, heroDetails }) => (
	<Modal
		show={showModal}
		onHide={handleCloseModal}
		animation={false}
		centered
	>
		<Modal.Header>
			<Modal.Title className="w-100 text-center">
				{`${heroDetails.name} "${heroDetails.biography.aliases[0]}"`}
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<div className="d-flex">
				<img
					className="w-50 mx-auto"
					src={heroDetails.image.url}
					alt={`${heroDetails.name} at the hero details`}
				/>
			</div>
			<div className="d-flex justify-content-between">
				Height:
				<span>{heroDetails.appearance.height[1]}</span>
			</div>
			<div className="d-flex justify-content-between">
				Weight:
				<span>{heroDetails.appearance.weight[1]}</span>
			</div>
			<div className="d-flex justify-content-between">
				Eyes:
				<span>{heroDetails.appearance['eye-color']}</span>
			</div>
			<div className="d-flex justify-content-between">
				Hair:
				<span>{heroDetails.appearance['hair-color']}</span>
			</div>
			<div className="d-flex justify-content-between">
				Work:
				<span>{` ${heroDetails.work.occupation} at ${heroDetails.work.base}`}</span>
			</div>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="secondary" onClick={handleCloseModal}>
				Close
			</Button>
		</Modal.Footer>
	</Modal>
);

export default HeroDetailsModal;
