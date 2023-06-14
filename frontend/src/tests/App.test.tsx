import { describe, expect, it } from "vitest"
import Header from "../components/Header"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"

describe("App main Page", () => {
  it("Should render Navbar", async () => {
    render(
      <Router>
        <Header brand='Estore' />
      </Router>
    )
    const NavElement = await screen.findByTestId("header")
    expect(NavElement).toBeInTheDocument()
  })
})
