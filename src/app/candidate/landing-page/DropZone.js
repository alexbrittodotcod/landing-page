"use client";

// components/Dropzone.js
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

function Dropzone() {
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      const reason =
        rejectedFiles[0]?.errors[0]?.message || "File not accepted";
      setError(reason);
      return;
    }
    setError("");
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".pdf,.doc,.docx",
    maxFiles: 1,
    maxSize: 2 * 1024 * 1024, // 2MB
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-gray-600">Drop the files here ...</p>
      ) : (
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-[#E8395C1A] rounded-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}resume-checker.gif`}
              alt="scanner"
              width={60} // Specify image dimensions
              height={60}
              className="w-[3.75rem] h-[3.75rem]"
            />
          </div>

          <div className="text-gray-600 text-[1rem] leading-[1.562rem] mt-[1rem]">
            <div className="font-extrabold">
              Drop your resume here or&nbsp;
              <span className="underline">choose a file.</span>
            </div>

            <div className="font-normal mt-[1rem]">
              Resumes in PDF or DOCX only. Max 2MB file size.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropzone;
