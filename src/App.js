import logo from './logo.svg';
import './App.css';
import ListRedender from './ListRedender'
import EvntCls from './EventBindingCls'
import EvntFun from './EventBinding-Fun'
import OrderList from './OrderList'
import UnOrderList from './UnorderList'


function App() {
  return (
    <div>
      <ListRedender></ListRedender>
      <br/><br/>
      <EvntFun></EvntFun>
      <br/><br/>
      <EvntCls></EvntCls>
      <br/><br/>
      <OrderList></OrderList>
      <br/><br/>
      <UnOrderList></UnOrderList>
    </div>
  );
}

export default App;
