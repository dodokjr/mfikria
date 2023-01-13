import React from "react"
import { format } from "date-fns"
import Card from "react-bootstrap/Card";

export default function Profile(props) {
  return (
    <>
     <Card className="project-card-view">
      <Card.Img variant="top"  src={props.owner.avatar_url}
            alt={props.owner.login} />
      <Card.Body>
      {props.owner.login}
        <Card.Title>{props.name}</Card.Title>
        {props.private ? (
                <p className="bg-rose-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75">
                  Private
                </p>
              ) : (
                <p className="bg-emerald-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75 mr-2">
                  Public
                </p>
              )}
        <Card.Text>
        {props.stargazers_count.toLocaleString()} stars
        {props.watchers_count.toLocaleString()} Watchers
        {props.language}
        </Card.Text>

        <small> {format(new Date(props.created_at), "dd MMMM yyyy")} by{" "}
            {props.owner.login}</small>
      </Card.Body>
      <Card.Body>
        <Card.Link href={props.html_url}>{props.name}</Card.Link>
      </Card.Body>
    </Card>
    </>
  )
}