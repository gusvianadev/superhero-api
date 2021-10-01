import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ChartSty, ChartBarSty } from './Chart.styles';

const Chart = ({ id, values, max, bgClr }) => (
	<ChartSty className="pt-2" $bgClr={bgClr}>
		<div className="d-flex justify-content-around chart__bars__container">
			{Object.entries(values).map((entry) => (
				<OverlayTrigger
					placement="right"
					key={`chart__${id}__${entry[0]}`}
					delay={{ show: 250, hide: 400 }}
					overlay={<Tooltip id="button-tooltip">{entry[0]}</Tooltip>}
				>
					<ChartBarSty
						className="mt-auto"
						$height={Math.floor((entry[1] * 100) / max)}
						$name={entry[0]}
					/>
				</OverlayTrigger>
			))}
		</div>
	</ChartSty>
);

export default Chart;
