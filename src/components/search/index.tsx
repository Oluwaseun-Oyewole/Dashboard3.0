import { Form, Formik } from "formik";
import React, { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../../context";

interface ISearchProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
  iconColor?: string;
}

const Search: React.FC<ISearchProps> = (props) => {
  const { isDarkMode } = useTheme();
  const { onSearch, placeholder = "Type something" } = props;
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (data: Record<string, string>) => {
    const value = data.search;
    setSearchInput(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  const initialValues = {
    search: searchInput,
  };

  return (
    <div className="relative">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => (
          <>
            <Form className="w-full relative">
              <input
                type="search"
                placeholder={placeholder}
                name="search"
                value={formik.values.search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  formik.handleChange(e);
                }}
                className={`px-8 !rounded-full !w-full !py-[8px] placeholder:text-xs ${
                  isDarkMode ? "bg-bgBlackMedium" : "bg-[#F9FAFB]"
                } text-sm !focus:bg-transparent text-gray-500 !border-[1.5px] !border-[#6F6F76] outline-none`}
              />
              <FaSearch className="absolute top-3 text-[#6F6F76] left-2 text-sm" />
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Search;
