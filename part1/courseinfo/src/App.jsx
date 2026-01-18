const Header = (props) => {

  return (
    <h1>{props.heading}</h1>
  )
}

const Part = (props) => {

  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </>
  )
}

const Total = (props) => {
  console.log(props.parts[0].exercises)
  return (
    <p>Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


return (
  <div>
    <Header heading={course} />
    {/* <Content parts={parts} /> */}
    <Total parts={parts} />
  </div>
)
}

export default App