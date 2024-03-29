import { Badge } from "@radix-ui/themes"
import React from "react"

type Status = "OPEN" | "IN_PROGRESS" | "CLOSED"
interface Props {
  status: Status
}

const statusMapping: Record<
  Status, //this is the type of our keys
  { label: string; color: "red" | "violet" | "green" } //this is the type of our values for the keys
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
}

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMapping[status].color}>
      {statusMapping[status].label}
    </Badge>
  )
}

export default IssueStatusBadge
