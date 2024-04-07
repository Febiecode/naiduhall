import React from 'react';
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory';

interface BubbleChartProps {
    progress: number,
    finished: number,
    unfinished: number
}

const labelStyle = {
    fontSize: 12,
    fontWeight: "bold",
    fill: "white",
}

const BubbleChart: React.FC<BubbleChartProps> = ({ progress, finished, unfinished }) => {
    const total = progress + finished + unfinished;
    const progressPer = (progress / total) * 100
    const finishedPer = (finished / total) * 100
    const unfinishedPer = (unfinished / total) * 100

    return (
        <div className='w-full h-[50%]'>
            <VictoryChart
                width={200} // Explicitly set width
                height={200} // Explicitly set height
                theme={VictoryTheme.material}
                domain={{ x: [0, 100], y: [0, 100] }}
                padding={{ top: 0, bottom: -25, left: 0, right: 0 }} // Adjust padding to hide axes
                scale={{ x: "linear", y: "linear" }} // Set scale to linear
            >
                <VictoryAxis
                    style={{
                        axis: { stroke: "none" }, // Remove axis lines
                        grid: { stroke: "none" } // Remove grid lines
                    }}
                />
                <VictoryScatter
                    style={{ data: { fill: '#F86624' } }}
                    size={progressPer + 20} // Base size of bubbles
                    data={[
                        { x: 35, y: 50 }, // Example data point for "Progress"
                        // Add more data points for the "Progress" category as needed
                    ]}
                    labelComponent={<VictoryLabel style={labelStyle} dy={0} />}
                    labels={[`${progressPer.toFixed(2)}%`]}
                />
                <VictoryScatter
                    style={{ data: { fill: '#22CAAD' } }}
                    size={finishedPer + 20} // Base size of bubbles
                    data={[
                        { x: 72, y: 60 }, // Example data point for "Finished"
                        // Add more data points for the "Finished" category as needed
                    ]}
                    labelComponent={<VictoryLabel style={labelStyle} dy={0} />}
                    labels={[`${finishedPer.toFixed(2)}%`]}
                />
                <VictoryScatter
                    style={{ data: { fill: '#EB3D4D' } }}
                    size={unfinishedPer + 20} // Base size of bubbles
                    data={[
                        { x: 72, y: 30 }, // Example data point for "Unfinished"
                        // Add more data points for the "Unfinished" category as needed
                    ]}
                    labelComponent={<VictoryLabel style={labelStyle} dy={0} />}
                    labels={[`${unfinishedPer.toFixed(2)}%`]}
                />

            </VictoryChart>
        </div>
    );
};

export default BubbleChart;
