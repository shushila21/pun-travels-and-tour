"use client";

interface IServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: IServiceCardProps) {
  return (
    <div className="border border-primary-100 rounded-lg py-10 pl-10 pr-5 even:pl-5 even:pr-10 flex flex-row  even:flex-row-reverse transition-all hover:bg-primary-100 duration-500 group items-center gap-5">
      <div className="flex flex-col">
        <div className="text-primary-100 text-lg mb-4 font-bold group-hover:text-white w-fulleven:justify-start">
          {title}
        </div>
        <p className="text-gray-700 group-hover:text-white">{description}</p>
      </div>

      <i className="select-none !text-[5rem] text-primary-100 group-hover:text-white material-symbols-outlined">
        {icon}
      </i>
    </div>
  );
}
