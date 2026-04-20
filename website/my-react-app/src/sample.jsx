/** @jsxImportSource @emotion/react */
// ^^^ Added this pragma. Without it, the css={buttonStyle} below won't work in a standard React setup.

import React,{Component, useState, useEffect} from 'react'
import style from '../css/Sample.module.css'
import style1 from '../css/HomePage.module.css'
// import styled from 'styled-components'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import axios from 'axios'

function Sample(props) {
    const [name,setName]=useState("Devendra")
    
    // ERROR/WARNING: 'age' is declared but its value is never read. 
    // I commented it out so your linter stops complaining.
    // const [age,setAge]=useState(20) 
    
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        console.log("Component mounted")
        return ()=>{
            console.log("Component unmounted")
        }
    // ERROR: [name] makes this effect run every time you click "Name Change". 
    // If you want it to act like componentDidMount, it needs an empty array.
    // },[name]) 
    }, [])

    useEffect(()=>{
        // async function fetchingData(){
        //      const response=await fetch("https://dummyjson.com/products",{
        //          method:"GET"
        //      })
        //      const data=await response.json()
        //      console.log(data)
        // }

        async function fetchingData(){
            try{
                setLoading(true)
                const response=await axios.get("https://dummyjson.com/products/")
                console.log(response.data)
                
                // ERROR: If the axios request fails, this line gets skipped and it loads forever.
                // setLoading(false) 
            }catch(error){
                console.log(error)
            } finally {
                // FIX: Moved setLoading(false) here so it stops loading whether it succeeds or fails.
                setLoading(false)
            }
        }
        
        fetchingData()
        },[])
    

  return (
    <div>
        {/* ERROR/BAD PRACTICE: Rendering an empty <h1></h1> tag. 
            Below is the cleaner way to write this conditional. */}
        {/* {loading?<h1>Loading...</h1>:<h1></h1>} */}
        {loading && <h1>Loading...</h1>}
        
      <h2>Trending topics</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae maiores, nobis laboriosam non commodi quia consequuntur vitae dolore facere deserunt quas recusandae iste harum in, provident aut reprehenderit temporibus.</p>
      <h3>{name}</h3>
        <button onClick={()=>{
            setName("Alex")
            
        }}>Name Change</button>
    <button
        className="counter"
        onClick={() => props.setCount((count) => count + 1)}
    >
        Count is {props.count}
    </button>
    <div>
        <Button >First</Button>
        <Button green>Second</Button>
        <button css={buttonStyle}>Third</button>
        <button className='bg-red-500 text-white w-20 h-8'>Fourth</button>
    </div>
    </div>
  )
}

export default Sample

const buttonStyle=css`
    background-color: orange;
    color: white;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    border:none
`

const Button=styled.button`
    background-color: ${(props) => (props.green ? "green" : "red")};
    color: white;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    border:none
`

// class Sample extends Component {
//      constructor(props){
//          super(props)
//          this.state={
//              name:"Devendra",
//              age:23
//          }
//      }
//      componentDidMount(){
//          console.log("Component Did Mount")
//      }

//      shouldComponentUpdate(nextProps,nextState){  //tels whether to update or not
//          if(nextProps.count===1){
//              return false
//          }
//          console.log("Component Should Update")
//          return true
//      }

//      componentDidUpdate(){
//          console.log("Component Did Update")
//      }

//      componentWillUnmount(){
//          console.log("Component Will Unmount")
//      }


//      render(){
//          return (
//              <div>
//              <h2>Trending topics</h2>
//              <h3>{this.state.name}</h3>
//              <button onClick={()=>{
//                  this.setState({name:"Alex"})
                
//                  }}>Name Change</button>
//              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae maiores, nobis laboriosam non commodi quia consequuntur vitae dolore facere deserunt quas recusandae iste harum in, provident aut reprehenderit temporibus.</p>
//              <button
//                  style={{backgroundColor:"red"}}
//                  onClick={() => this.props.setCount((count) => count + 1)}
//              >
//                  Count is {this.props.count}
//              </button>
            
//              </div>
//          )
//      }

// }
// export default Sample