import { ChartSty, ChartBarSty } from './Chart.styles';

const Chart = ({ id, values, max, bgClr }) => (
	<ChartSty className="pt-2" $bgClr={bgClr}>
		<div className="d-flex justify-content-around chart__bars__container">
			{Object.entries(values).map((entry) => (
				<ChartBarSty
					className="mt-auto"
					key={`chart__${id}__${entry[0]}`}
					$height={Math.floor((entry[1] * 100) / max)}
					$name={entry[0]}
				/>
			))}
		</div>
	</ChartSty>
);

export default Chart;
