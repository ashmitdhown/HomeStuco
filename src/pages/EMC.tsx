// Author: Manav Arya & Ashmit Dhown
import React from "react";
import InstagramContactBar from "@/components/ui/InstagramContactBar";
import { PageBgAndCursor } from "@/components/PageBgAndCursor";

const EMC = () => (
  <>
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#fff",
        zIndex: 10,
        position: "relative",
        textShadow: "0 2px 8px #000, 0 0 2px #000"
      }}
    >
      Coming Soon
    </div>
    <InstagramContactBar />
  </>
);
export default EMC;