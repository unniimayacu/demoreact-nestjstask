
import Button from "../button/Button";
import "./card.scss";

function Card(props) {
  const {
    icon = null,
    title,
    content,
    Type,
    Edit,
    Delete,
    children,
    bgPrimary = false,
    carprice,
    carname,
    image
  } = props;

  return (
    <div
      className={`cif__card-wrapper w-100 card__background-gradient  my-3 ${
        bgPrimary ? "card__background_solid_primary" : ""
      }`}
    >
      {icon ? (
        <div className="cif__card-icon-wrapper">
          <div className="cif__card-icon">
            <img src={icon} alt="" />
          </div>
        </div>
      ) : null}
      <div> 
        {image}
      </div>
        <div className="car_price_color mt-4">
        <h5>{carname}</h5>
         </div>
      <div className="car_price_color ">
        <h5>{carprice}</h5>
         </div>
         <div className="d-flex justify-content-evenly">
          {/* <Button btnType="save" > Edit</Button>
          <Button btnType="save" >{Delete} Delete</Button> */}
         </div>
      <div className="cif__card-content-wrapper">{children}</div>

    </div>
  );
}

export default Card;
