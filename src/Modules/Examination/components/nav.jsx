import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";

export default function Nav() {
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -150,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 150,
        behavior: "smooth",
      });
    }
  };

  const activeLinkStyle = {
    fontWeight: "bold",
    borderBottom: "3px solid black",
    paddingBottom: "0.25rem",
  };

  const defaultLinkStyle = {
    textDecoration: "none",
    padding: "0px 10px",
    color: "black",
    display: "inline-block",
  };

  const linkWrapperStyle = {
    display: "flex",
    alignItems: "center",
    borderRight: "2px solid black",
    padding: "0 15px",
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "5vh",
            marginBottom: "30px",
          }}
        >
          {/* <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => scrollLeft(scrollContainerRef1)}
          >
            <CaretCircleLeft size={25} />
          </button> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              flexWrap: "nowrap",
            }}
            ref={scrollContainerRef1}
          >
            <div style={linkWrapperStyle}>
              <NavLink
                to="/examination/submit-grades"
                className="borderclass"
                style={({ isActive }) =>
                  isActive
                    ? { ...defaultLinkStyle, ...activeLinkStyle }
                    : defaultLinkStyle
                }
              >
                Submit
              </NavLink>
            </div>
            <div style={linkWrapperStyle}>
              <NavLink
                to="/examination/verify-grades"
                className="borderclass"
                style={({ isActive }) =>
                  isActive
                    ? { ...defaultLinkStyle, ...activeLinkStyle }
                    : defaultLinkStyle
                }
              >
                Verify
              </NavLink>
            </div>
            <div style={linkWrapperStyle}>
              <NavLink
                to="/examination/announcement"
                className="borderclass"
                style={({ isActive }) =>
                  isActive
                    ? { ...defaultLinkStyle, ...activeLinkStyle }
                    : defaultLinkStyle
                }
              >
                Announcement
              </NavLink>
            </div>
            <div style={linkWrapperStyle}>
              <NavLink
                to="/examination/generate-transcript"
                className="borderclass"
                style={({ isActive }) =>
                  isActive
                    ? { ...defaultLinkStyle, ...activeLinkStyle }
                    : defaultLinkStyle
                }
              >
                Transcript
              </NavLink>
            </div>
          </div>
          {/* <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => scrollRight(scrollContainerRef1)}
          >
            <CaretCircleRight size={25} />
          </button> */}
        </div>
      </div>
    </div>
  );
}
