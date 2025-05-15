"use client";
import { useTransition, useState, useEffect } from "react";
import styles from "@/styles/components/Import.module.css";
import Loader from "@/components/Loader/Loader";
import { createListFromXLSX } from "@/actions/actions";

const Import = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log("Selected Files:", selectedFiles);
  }, [selectedFiles]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles((prev) => [...prev, ...files]);
    setMessage("");
  };

  const deleteSelectedFile = (event) => {
    event.preventDefault();
    const id = event.target.id;
    const filteredFiles = selectedFiles.filter((_, index) => index != id);
    setSelectedFiles(filteredFiles);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles((prev) => [...prev, ...files]);
    setIsDragging(false);
    setMessage("");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleImportClick = () => setIsDialogOpen(true);

  const handleCloseDialog = (event) => {
    event.preventDefault();
    setIsDialogOpen(false);
    setSelectedFiles([]);
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFiles.length === 0) {
      setMessage("Seleccione al menos un archivo");
      return;
    }

    startTransition(() => {
      const formData = new FormData();
      selectedFiles.forEach((file) => formData.append("files", file));

      createListFromXLSX(formData)
        .then(() => {
          setMessage("Archivo(s) subido(s) con éxito");
          setSelectedFiles([]);
          setIsDialogOpen(false);
        })
        .catch((error) => setMessage(`Error: ${error.message}`));
    });
  };

  return (
    <>
      <button className={styles.button} onClick={handleImportClick}>
        Importar
      </button>

      {isDialogOpen && (
        <div className="backdrop">
          <form onSubmit={handleSubmit} className="dialog">
            <div className="titleContainer">
              <p>Importar Archivo</p>
              <button
                type="button"
                className="cancel"
                onClick={handleCloseDialog}
              >
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 25 25"
                  version="1.1"
                >
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
                    <g
                      transform="translate(-469.000000, -1041.000000)"
                      fill="currentColor"
                    >
                      <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>

            {!isPending ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <label htmlFor="inputFile" className="upload">
                  <svg viewBox="0 0 640 512" height="3rem" fill="currentColor">
                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                  </svg>
                  <p>Arrastra aquí</p>
                  <p>o</p>
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("inputFile")?.click()
                    }
                  >
                    Busca un archivo
                  </button>
                </label>

                <ul className="fileList">
                  {selectedFiles.map((file, index) => (
                    <li key={index}>
                      {file.name}
                      <button
                        id={index}
                        className="delete"
                        type="button"
                        onClick={deleteSelectedFile}
                      >
                        <svg
                          width="0.5rem"
                          height="0.5rem"
                          viewBox="0 0 25 25"
                          version="1.1"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                          >
                            <g
                              transform="translate(-469.000000, -1041.000000)"
                              fill="currentColor"
                            >
                              <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"></path>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>

                <input
                  id="inputFile"
                  type="file"
                  accept=".xlsx"
                  onChange={handleFileChange}
                  multiple
                />
              </div>
            ) : (
              <Loader />
            )}

            {message && <p className="message">{message}</p>}

            <button type="submit" disabled={isPending}>
              Subir
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Import;
