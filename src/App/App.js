import React, { Component } from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import './app.css'
class App extends Component {
  state = {
    item:[]
  }
  clickCell = (entry,index) => {
    this.setState({
      
    })
  }
  render(){
  // const { PieChart, Pie, Legend, Tooltip } = Recharts
  const data02 = [{name: '碳水化合物', value: 2400}, {name: '淀粉', value: 4567},
                  {name: '葡萄糖', value: 5398}, {name: '蛋白质', value: 5800}];
  let color = ['#B2EBF2','#039BE5','#64DD17','#FF9800']

    return(
      <div className="app">
        <PieChart width={400} height={400}>
        <Pie  data={data02} cx={200} cy={200} dataKey='value' innerRadius={100} outerRadius={150} fill="cyan">
      {
        data02.map((entry,index)=>{
          return (<Cell key={index}
          onClick={()=>this.clickCell(entry,index)}
        fill={color[index]}/>)
        })
      }
      </Pie>
        <Tooltip/>
        </PieChart>
      </div>
    )
  }
}

export default App
