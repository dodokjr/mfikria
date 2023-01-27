import React from "react"
import { format } from "date-fns"
import Card from "react-bootstrap/Card";
import { RiStarSFill, RiGithubFill } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { IoIosGitNetwork } from "react-icons/io";

export default function Profile(props)
{
  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.owner.avatar_url}
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
            <div>
              <div><RiStarSFill /><b>{props.stargazers_count.toLocaleString()} Stars</b></div>
              <div><HiOutlineEye /> <b>{props.watchers_count.toLocaleString()} Watchers</b></div>
              <div><IoIosGitNetwork /> <b>{props.forks_count.toLocaleString()} forks</b></div>
              <div><b>Language</b> {props.language}</div>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href={props.html_url} target="_blank"><RiGithubFill className="fs-2" /></Card.Link>
        </Card.Body>
        <Card.Footer>
          <div className="fs-7">Last Update : {format(new Date(props.updated_at), "dd MMMM yyyy")}</div>
          <div className="fs-6">{format(new Date(props.created_at), "dd MMMM yyyy")} by{" "}
            {props.owner.login}</div>
        </Card.Footer>
      </Card>
    </>
  )
}