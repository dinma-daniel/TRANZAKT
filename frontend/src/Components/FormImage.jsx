export default function FormImage(props) {
  return (
    <div className="formImageContainer">
      <img className="formImage" src={require('../images/money.jpg').default} alt="money and coins"/>
    </div>
  );
}
