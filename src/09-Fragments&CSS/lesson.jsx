import React from "react";
import './lesson.css';

// const Columns = () => ([
//     <td key='1'>Data1</td>,
//     <td key='2'>Data2</td>
// ])
const styles = {color: 'red', textTransform: 'uppercase'};
const Columns = () => (
    <>
        <td style={styles}>Inline</td>
        <td className='some'>Simple class</td>
    </>
)


const Lesson = () => (
    <table>
        <tbody>
            <tr>
                <Columns />
            </tr>
        </tbody>
    </table>
)

export default Lesson;