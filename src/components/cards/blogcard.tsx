import React from "react";

interface BlogCardProps {
  name: string;
  img: string;
  description: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ name, img, description, link }) => {
  return (
    <div className="flex flex-col w-64 h-80 text-gray-700 bg-white shadow-md rounded-xl overflow-hidden">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-4">
        <h5 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {name}
        </h5>
        <p className="text-sm text-gray-600 line-clamp-3 mt-2">
          {description}
        </p>
        <div className="mt-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button
              className="w-full py-2 px-4 bg-nord3 text-white rounded-lg hover:bg-nord4 transition-colors"
              type="button"
            >
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
