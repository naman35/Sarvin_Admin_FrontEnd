import Card from "../../../../components/card";
import CardMenu from "../../../../components/card/CardMenu";
import Switch from "../../../../components/switch";
import React from "react";

function Notification() {
  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-xl font-bold text-gray-700 ">Notifications</h4>
        <CardMenu />
      </div>
      <div className="flex flex-col">
        {/* the custom checkbox desing added in src/index.js */}
        <div className="mt-3 flex items-center gap-3">
          <Switch id="switch1" color="red" />
          <label
            for="checkbox1"
            className="text-base font-medium text-gray-700 "
          >
            Item comment notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch2" color="red" />
          <label
            for="checkbox2"
            className="text-base font-medium text-gray-700 "
          >
            Buyer review notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch3" color="red" />
          <label
            for="checkbox3"
            className="text-base font-medium text-gray-700 "
          >
            Rating reminders notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch4" color="red" />
          <label
            for="checkbox4"
            className="text-base font-medium text-gray-700 "
          >
            Meetups near you notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch5" color="red" />
          <label
            for="checkbox5"
            className="text-base font-medium text-gray-700 "
          >
            Company news notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch6" color="red" />
          <label
            for="checkbox6"
            className="text-base font-medium text-gray-700 "
          >
            New launches and projects
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch7" color="red" />
          <label
            for="checkbox7"
            className="text-base font-medium text-gray-700 "
          >
            Monthly product changes
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" color="red" />
          <label
            for="checkbox8"
            className="text-base font-medium text-gray-700 "
          >
            Subscribe to newsletter
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" color="red" />
          <label
            for="checkbox8"
            className="text-base font-medium text-gray-700 "
          >
            Email me when someone follows me
          </label>
        </div>
      </div>
    </Card>
  );
}

export default Notification;
