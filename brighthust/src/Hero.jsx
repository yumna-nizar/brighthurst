import React from 'react'

export const Hero = () => {
  return (
    <div className="container pt-5 d-flex justify-content-between gap-5">
        <div className="d-flex align-item-center gap-3">
          <div className="blue"></div>
          <div>
            <h5 style={{ fontSize: "20px" }}>Our Impact</h5>
            <h5>Numbers</h5>
          </div>
          <div></div>
        </div>

        <div className="d-flex" style={{ gap: "90px" }}>
          <div>
            <h1 className="Rajdhani " style={{ fontSize: "96px" }}>
              250+
            </h1>
            <p>project completed</p>
          </div>
          <div>
            <h1 className="Rajdhani " style={{ fontSize: "96px" }}>
              8+
            </h1>
            <p>project completed</p>
          </div>
          <div>
            <h1 className="Rajdhani " style={{ fontSize: "96px" }}>
              500+
            </h1>
            <p>project completed</p>
          </div>
        </div>
      </div>
  )
}
