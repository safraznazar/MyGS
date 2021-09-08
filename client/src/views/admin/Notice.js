import React from "react";

// components
import NoticeTable from "components/Notice/noticeView.js";

export default function Notice() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <NoticeTable />
        </div>
      </div>
    </>
  );
}
