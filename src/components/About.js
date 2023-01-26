import React ,{Component} from "react";

// const About = () => {
//   return (
//     <>
//       <h4>ABout us</h4>
//       <p>This is food app where one can order food .</p>
//     </>
//   );
// };


class About extends Component{
  constructor(props){
  super()
    this.state={
      isUpdate:false
    }
    console.log('constructor')
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.setState({
      isUpdate:true
    })
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render(){
    console.log('render',this.props.test)
    return( <>
            <h4>ABout us {this.state.isUpdate}</h4>
            <p>This is food app where one can order food .</p>
          </>)
  }
}

 export default About;


