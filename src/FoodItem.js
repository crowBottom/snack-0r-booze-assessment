import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import order_list from './orderList';


function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let snack = items.find(snack => snack.id === id);
  if (!snack) return <Redirect to={cantFind} />;

  const addToOrder = () => {
    order_list.push({name: snack.name, id: snack.id})
  }
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
          <div className="w3-btn w3-ripple w3-border w3-round w3-white" onClick={addToOrder}>Add to order</div>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
