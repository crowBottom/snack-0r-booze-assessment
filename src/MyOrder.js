import React, { useState } from "react";
import "./MyOrder.css";
import order_list from './orderList';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function MyOrder() {
  const [order, setOrder] = useState(order_list)
  const handleRemove = (id) => {
   const newList = order.filter((item) => item.id !== id);
   setOrder(newList)
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            My Order
          </CardTitle>
          <CardText>
            Ordered Items appear below
          </CardText>
          <ListGroup>
            {
              order.map( item => (
                <>
                  <div key={item.id} className="w3-cell">{item.name}<span className="w3-btn w3-ripple w3-text-yellow w3-tiny" onClick={() => handleRemove(item.id)}>del</span></div>
                </>
              ))
            }
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default MyOrder;
