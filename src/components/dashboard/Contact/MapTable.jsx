import Mapicon from "@/assets/svg/mapicon";
import Search from "@/assets/svg/search";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MapTable = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="w-full max-h-[200px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79490.29089582972!2d-0.18734208518024356!3d51.49355372870869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sbd!4v1745322336934!5m2!1sen!2sbd"
              width="1200"
              height="800"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapTable;
