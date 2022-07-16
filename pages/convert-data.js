import { MdImportExport } from "react-icons/md";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
const ConvertData = () => {
  const [output, setOutput] = useState("");
  const [arrayData, setArrayData] = useState("");
  const fileInputRef = useRef();
  const fileTypes = ["text/plain"];
  const readFile = async (file) => {
    if (fileTypes.includes(file.type)) {
      const data = await new Response(file).text();
      return data;
    } else {
      return null;
    }
  };

  const handelFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (fileTypes.includes(file.type)) {
        const content = await readFile(file);
        const data = content.split("\n");
        let tmp = [];
        data.forEach((d) => {
          if (d.trim() !== "") {
            tmp.push(`"${titleCase(d.trim())}"`);
          }
        });
        setOutput(tmp.join(","));
      } else {
        toast.error("File type not supported");
      }
      fileInputRef.current.value = "";
    }
  };

  //convert comma separated data to array
  const convertToArray = () => {
    let tmp = [];
    arrayData.split(",").forEach((d) => {
      tmp.push(`${d.trim()}:[]`);
    });
    setArrayData(tmp.toString());
  };
  return (
    <div className="pt-24 w-full max-w-screen-xl mx-auto">
      <textarea
        rows={20}
        className="block shadow-md p-4 mb-4 w-full"
        value={output}
      />

      <label className="btn btn-success btn-outline gap-2">
        <span className="text-2xl">
          <MdImportExport />
        </span>
        <p>Import from file</p>
        <input
          ref={fileInputRef}
          onChange={(event) => handelFileChange(event)}
          type="file"
          accept={fileTypes.join(",")}
          className="hidden"
        />
      </label>

      <textarea
        rows={20}
        className="block shadow-md p-4 mb-4 w-full"
        value={arrayData}
        onChange={(event) => setArrayData(event.target.value)}
      />
      <button onClick={convertToArray} className="btn btn-primary btn-wide">
        Convert
      </button>
    </div>
  );
};

export default ConvertData;
