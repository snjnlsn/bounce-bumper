import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import React from "react"
import Home from "./index"

test("renders a header and list of bounces", () => {
  const { getByTestId } = render(<Home />)

  getByTestId("header")
  getByTestId("bounce")
})
