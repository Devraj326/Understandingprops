import './App.css';


function App(props){
  const imgData = props.myData();
  console.log(props.myData);
  return(
    <div>
      <div><h2> Kalvium gallary</h2></div>
      <div className='imagee'>{imgData.map((item)=>{
        return <img key={item.id} src={item.img}  />
      })}</div>
    </div>
  )
  
}

export default App;