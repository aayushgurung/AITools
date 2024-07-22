import React, { useState, useEffect } from "react";

interface OptionsProps {
  onValuesChange: (newValues: {
    height: number;
    width: number;
    format: string;
  }) => void;
  height1?: number;
  width1?: number;
}

const Options: React.FC<OptionsProps> = ({
  onValuesChange,
  height1,
  width1,
}) => {
  const [width, setWidth] = useState<number>(width1 || 0);
  const [height, setHeight] = useState<number>(height1 || 0);
  const [format, setFormat] = useState<string | any>("");
  const [isChecked, setIsChecked] = useState(false);

  const aspectRatio = width1 !== undefined && height1 !== undefined ? width1 / height1 : 0;

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setHeight(Math.round(width / aspectRatio));
    }
  };

  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth);
    if (isChecked) {
      setHeight(Math.round(newWidth / aspectRatio));
    }
  };

  const handleFormatChange = (newFormat: string) => {
    setFormat(newFormat);
  };

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight);
    if (isChecked) {
      const aspectRatio = width / newHeight;
      setWidth(Math.round(newHeight * aspectRatio));
    }
  };

  useEffect(() => {
    onValuesChange({ width, height, format });
  }, [width, height, format, onValuesChange]);

  useEffect(() => {
    if (width1 !== undefined) {
      setWidth(width1);
    }
    if (height1 !== undefined) {
      setHeight(height1);
    }
  }, [width1, height1]);

  return (
    <section className="container mx-auto mt-8 px-20">
      <div className="font-bold text-center text-lg">Resize Options</div>
      <div className="flex">
        <div className="flex flex-col w-full items-center">
          {renderInput("Width (px) :", width, handleWidthChange)}
          {renderInput("Height (px) :", height, handleHeightChange)}
          {renderSelect("Choose File Format :", format, handleFormatChange)}
          {renderCheckbox("Maintain Aspect ratio", isChecked, handleCheckboxChange)}
          <div className="text-black">Choose by percentage</div>
        </div>
      </div>
    </section>
  );
};

const renderInput = (
  label: string,
  value: number,
  onChange: (value: number) => void
) => (
  <div className="flex items-center justify-around mb-3">
    <span className="font-bold text-black">{label}</span>{" "}
    <input
      type="number"
      placeholder={label}
      className="w-1/4 text-black px-3 py-2 border-2 rounded focus:outline-none focus:border-indigo-500 text-center"
      value={value}
      min={0}
      onChange={(e) => onChange(parseInt(e.target.value, 10))}
    />
  </div>
);

const renderSelect = (
  label: string,
  value: string,
  onChange: (value: string) => void
) => (
  <div className="flex items-center justify-around mb-3">
    <span className="font-bold mr-2 text-black">{label}</span>{" "}
    <select
      name=""
      id=""
      className="max-w-max sm:w-full px-3 py-2 border-2 bg-white rounded focus:outline-none focus:border-indigo-500 text-black text-center"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="jpg" className="text-black">
        jpg
      </option>
      <option value="png" className="text-black">
        png
      </option>
      <option value="webp" className="text-black">
        webp
      </option>
      <option value="gif" className="text-black">
        gif
      </option>
      <option value="heif" className="text-black">
        heif
      </option>
    </select>
  </div>
);

const renderCheckbox = (
  label: string,
  isChecked: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) => (
  <div className="mb-3">
    <input type="checkbox" id="myCheckbox" checked={isChecked} onChange={onChange} />{" "}
    <label htmlFor="myCheckbox" className="text-black">
      {label}
    </label>
  </div>
);

export default Options;
