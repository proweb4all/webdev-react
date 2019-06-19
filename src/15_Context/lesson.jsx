import React, { Component } from "react";

// const LevelThree = ({title}) => <h1>{title}</h1>
// const LevelTwo = ({title}) => <LevelThree title={title} />
// const LevelOne = ({title}) => <LevelTwo title={title} />
// export default class Lesson extends Component {

//     render() {
//         return (
//             <LevelOne title='Simple title'/>
//         )
//     }
// }
const TitleContext = React.createContext();

const LevelThree = () => (
    <TitleContext.Consumer>
        {({ title, subTitle, click }) => (
                <>
                    <h1 style={{cursor: 'pointer'}} onClick={click}>{title}</h1>
                    <h3>{subTitle}</h3>
                </>
            )
        }
    </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree />
const LevelOne = () => <LevelTwo />
export default class Lesson extends Component {
    render() {
        return (
            <TitleContext.Provider value={
                { title: 'Simple title', 
                  subTitle: 'SubTitle',
                  click: () => {console.log('Hello, World!')}
                }}>
                <LevelOne />
            </TitleContext.Provider>
        )
    }
}