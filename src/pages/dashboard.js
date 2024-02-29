import Home3Team from "../components/Team/Home3Team";

import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout-dashboard";
import Dashboard from "../components/partner/Dashboard";
import Testimonial3 from "../components/testimonial/Testimonial3";
import { authAtom, usersAtom } from "../../_state";
import { useRecoilState, useRecoilValue } from "recoil";
import Select from "react-select";

function AboutPage() {
  const user = useRecoilValue(usersAtom);
  const handleChange = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
  };
  const tasks = [
    { id: 1, title: "Task 1", status: "completed", progress: 100 },
    { id: 2, title: "Task 2", status: "in_progress", progress: 50 },
    { id: 3, title: "Task 3", status: "pending", progress: 25 },
    // Add more tasks here
  ];
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
  ];
  return (
    <Layout>
      <div className=" place-content-center  flex justify-around items-center header-area2">
        <div className="wow animate fadeInUp border-1 border-white w-full rounded-md  sec-mar">
          <div className="flex">
            <div className="w-1/4  border-r-1 border-white  p-4">
              <ul className="flex flex-col text-white">
                <li className="p-2">Tasks</li>
                <li className="p-2">Milestones</li>
                <li className="p-2">Proposals</li>
                <li className="p-2">Assets</li>
                <li className="p-2">Detail</li>
                <li className="p-2">Settings</li>
              </ul>
            </div>
            <div className="w-full p-4 border-l-1 border-white">
              <div className="flex gap-2 justify-right">
                Project:{" "}
                <Select
                  id="dropdown"
                  options={options}
                  onChange={handleChange}
                  className="w-24"
                />
              </div>
              <table className="w-full divide-y divide-gray-300">
                <thead className="">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium  text-white uppercase tracking-wider">
                      Progress
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium  text-white uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                  {tasks.map((task) => (
                    <tr key={task.id} className="hover:bg-gray-100">
                      <td className="px-6 py-2 whitespace-nowrap  text-white">
                        {task.title}
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                            <div
                              style={{ width: `${task.progress}%` }}
                              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${
                                task.status === "completed"
                                  ? "green"
                                  : task.status === "in_progress"
                                  ? "yellow"
                                  : "white"
                              }-500`}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            task.status === "completed"
                              ? "bg-green-500 text-white"
                              : task.status === "in_progress"
                              ? "bg-yellow-500 text-black"
                              : "bg-gray-500 text-white"
                          }`}
                        >
                          {task.status === "completed"
                            ? "Completed"
                            : task.status === "in_progress"
                            ? "In Progress"
                            : "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
