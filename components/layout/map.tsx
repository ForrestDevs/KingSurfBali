"use client";

import React from "react";

export default function Map() {
  return (
    <iframe
      className="h-[200px] w-full rounded-md"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.MAPS_API_KEY}&q=place_id:ChIJYxirraBH0i0RVNCUFxxxR8o`}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
