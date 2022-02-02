import React from "react";

const HOC = (WrappendComponenet, type) => {
  return class extends React.Component {
    state = {
      data: [],
      term : ""
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }

    render() {

        let {data,term} = this.state

        let filteredData = data.slice(0,10).filter((d) => {
            if(type==="todos"){
                const {title} = d
                return title.indexOf(term) >= 0
            }else if(type==="users"){
                const {name} = d
                return name.indexOf(term) >= 0
            }
        })

      return (
        <div>
          <input placeholder={`Search ${type} here`} onChange={(e) => {this.setState({...this.state,term:e.target.value})}}/>
          <WrappendComponenet data={filteredData}></WrappendComponenet>
        </div>
      );
    }
  };
};

export default HOC;
