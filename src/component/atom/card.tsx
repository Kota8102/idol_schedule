import { title } from "process";
import React from "react";

interface Props {
  name: string;
  image?: string;
  twitter: string;
  url: string
}

const IdolCard: React.FC<Props> = ({ name, image, twitter, url }) => {
  return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                        Idol Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                        url
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                        Twitter
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                        
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">

                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        3
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Jone Doe
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        jonne62@gmail.com
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="/"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="/"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default IdolCard;
