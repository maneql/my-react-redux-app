import React from 'react'

class Demo extends React.Component {
    render() {
        return (
            <div>
                <h2>Demo component test</h2>
            </div>
        );
    }

    componentDidMount() {
        fetch('http://localhost:57075/home/')
        .then((res) => res.text())
        .then((data) => {
            console.log(data);
        })
        .catch(console.log)
      }
}

export default Demo;