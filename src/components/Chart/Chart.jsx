import { ChartSty, ChartBarSty } from './Chart.styles';

const Chart = ({ id, values, max, bgClr }) => (
	<ChartSty className="pt-2" $bgClr={bgClr}>
		<div className="d-flex justify-content-around chart__bars__container">
			{values.map(({ name, val, clr }) => (
				<ChartBarSty
					className="mt-auto"
					key={`chart__${id}__${name}`}
					$height={Math.floor((val * 100) / max)}
					$barClr={clr}
				/>
			))}
		</div>
	</ChartSty>
);

export default Chart;
