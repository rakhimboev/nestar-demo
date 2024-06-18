import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const CommunityList: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY
      <button onClick={() => alert("Salam New York")} style={{ margin: "15px" }}>
        Press Me
      </button>
    </div>
  );
};

export default withLayoutBasic(CommunityList);
