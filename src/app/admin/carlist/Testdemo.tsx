"use client";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function ImageTest() {
  const [images, setImages] = useState<(string | null)[]>([null, null, null]);

  const onImageChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        const newImages = [...images];
        newImages[index] = URL.createObjectURL(event.target.files[0]);
        setImages(newImages);
      }
    };

  const handleUpload = async (image: File | null, index: number) => {
    if (!image) return;

    const res = await axios("/api/r2");
    const uploadUrl = res.data.uploadUrl;
    const accessUrl = res.data.accessUrl;
    const id = res.data.id;

    try {
      const res = await axios.put(uploadUrl, image, {
        headers: {
          "Content-Type": image.type,
        },
      });
      console.log("Upload successful for index:", index);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleUploadAll = async () => {
    // Iterate over each image in the images array and call handleUpload
    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      await handleUpload(image, index);
    }
  };

  return (
    <div className="border-8 bg-white border-red-500 flex">
      <button onClick={handleUploadAll}>log</button>
      {images.map((image, index) => (
        <div key={index}>
          <label key={index}>
            <input type="file" onChange={onImageChange(index)} />
            <div className="border relative rounded-sm h-[185px] flex items-center justify-center w-[185px] border-black">
              <h1>ADD IMAGE + </h1>
              {image && (
                <Image
                  src={image}
                  fill
                  className="absolute object-cover"
                  alt="image"
                />
              )}
            </div>
          </label>
        </div>
      ))}
    </div>
  );
}
