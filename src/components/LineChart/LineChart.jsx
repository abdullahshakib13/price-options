import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const studentMathMarks = [
  { name: "Student A", math_mark: 85,physics_mark: 75,chemistry_mark: 84 },
  { name: "Student B", math_mark: 78,physics_mark: 85,chemistry_mark: 88 },
  { name: "Student C", math_mark: 92,physics_mark: 93,chemistry_mark: 81 },
  { name: "Student D", math_mark: 65,physics_mark: 87,chemistry_mark: 71 },
  { name: "Student E", math_mark: 89,physics_mark: 72,chemistry_mark: 76 },
  { name: "Student F", math_mark: 70,physics_mark: 79,chemistry_mark: 79 },
  { name: "Student G", math_mark: 95,physics_mark: 82,chemistry_mark: 80 },
  { name: "Student H", math_mark: 88,physics_mark: 89,chemistry_mark: 91 },
  { name: "Student I", math_mark: 76,physics_mark: 91,chemistry_mark: 93 },
  { name: "Student J", math_mark: 83,physics_mark: 78,chemistry_mark: 97 }
];

    return (
        <div>
            <LChart width={500} height={400} data={studentMathMarks}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_mark" stroke='red'></Line>
                <Line dataKey="physics_mark" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;