import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import order_list from './orderList';


function DrinkItem({ items, cantFind }) {
  const { id } = useParams();

  let drink = items.find(drink => drink.id === id);
  if (!drink) return <Redirect to={cantFind} />;

  const addToOrder = () => {
    order_list.push({name: drink.name, id: drink.id})
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
          <p>
            <b>Recipe:</b> {drink.recipe}
          </p>
          <p>
            <b>Serve:</b> {drink.serve}
          </p>
        </CardBody>
        <div className="w3-btn w3-ripple w3-border w3-round w3-white" onClick={addToOrder}>Add to order</div>
      </Card>
    </section>
  );
}

export default DrinkItem;
