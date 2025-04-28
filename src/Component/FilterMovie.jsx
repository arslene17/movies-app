import { FilterOutlined } from "@ant-design/icons";
import { Input, Rate } from "antd";
import React from "react";

const FilterMovie = ({
  setFilterTitle,
  setFilterRate,
  filterRate,
  filterTitle,
}) => {
  const resetFilter = () =>{
    setFilterTitle("");
    setFilterRate(0);
  }
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 item-center">
      <div className="flex items-center gap-2">
        <FilterOutlined
        className="text-2xl cursor-pointer"
        onClick={()=> resetFilter()} />
        <p>Filter:</p>
      </div>
      <Input
        onChange={(e) => setFilterTitle(e.target.value)}
        placeholder="Filter by movie title"
        value={filterTitle}
      />
      <div className="flex w-full items-center">
        <p className="w-full flex-1">By rate:</p>
        <Rate onChange={(e) => setFilterRate(e)} value={filterRate} className="w-full" />
      </div>
    </div>
  );
};

export default FilterMovie;
