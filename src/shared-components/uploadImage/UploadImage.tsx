import { Dispatch, SetStateAction } from "react";

type PropsTypes = {
  uploadedImage: File | null;
  setUploadedImage: Dispatch<SetStateAction<File | null>>;
  name: string;
};

const UploadImage = (props: PropsTypes) => {
  const { uploadedImage, setUploadedImage, name } = props;
  return (
    <div>
      <label htmlFor={name}>
        {uploadedImage?.name ? (
          <p>{uploadedImage.name}</p>
        ) : (
          <>
            <div className="flex flex-col items-center gap-2 text-sm justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
              <p>
                Upload Product Image, Larger image will be resized automatically
              </p>
              <p>
                Maximum upload is <b>1 MB</b>
              </p>
            </div>
          </>
        )}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        onChange={(e: any) => {
          e.preventDefault();
          setUploadedImage(e.currentTarget.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;
