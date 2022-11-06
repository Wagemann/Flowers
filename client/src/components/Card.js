import React from "react";
import "./Card.css";


export default function Card(props) {
  return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="card-title-group">
              <h5 className="card-id">ID: {props.id}</h5>
                <h5 className="card-title">Title: {props.title}</h5>
              <div className="card-body">Body: {props.body}</div>
            </div>
          </div>
        </div>
      </div>
  );
}