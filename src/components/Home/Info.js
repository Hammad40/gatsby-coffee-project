import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              lorem espanos,jbasjb asjbfkadjhas dakdjabkdajbd adkabdajsdj,sbdkab
              asmhdba sakhbskbdkjajs akjabdkbcakdbckad chakbchjabckabca
              ashcbadkcbak akdsckuacb akbcak acbacdkadcab
            </p>
            <Link to="/about/">
              <button class="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
