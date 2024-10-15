import { useState, useEffect } from "react";
import "../css/pages/imageTest.scss";

const ImageTest = () => {
  const [imageSource, setImageSource] = useState(
    "public/images/items/weaponsPt1.png"
  );
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [itemWidth, setItemWidth] = useState(80);
  const [itemHeight, setItemHeight] = useState(80);
  const [gridColumns, setGridColumns] = useState(11);
  const [gridRows, setGridRows] = useState(11);
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [itemImages, setItemImages] = useState(
    Array(gridColumns * gridRows).fill(imageSource)
  );

  // Update itemImages whenever gridColumns, gridRows, or imageSource changes
  useEffect(() => {
    setItemImages(Array(gridColumns * gridRows).fill(imageSource));
  }, [gridColumns, gridRows, imageSource]);

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers or non-secure contexts
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  const handleItemClick = (col: number, row: number) => {
    const posX = x + col * itemWidth;
    const posY = y + row * itemHeight;

    const jsonData = {
      imageSource: imageSource,
      posX: posX,
      posY: posY,
      width: itemWidth,
      height: itemHeight,
    };

    const jsonString = `"imageAtlas": ${JSON.stringify(jsonData, null, 2)}`;

    copyToClipboard(jsonString)
      .then(() => {
        setHoveredItem(`${posX}, ${posY}`);
        setTimeout(() => setHoveredItem(null), 1000);
      })
      .catch((err) => {
        console.error("Error copying to clipboard: ", err);
      });
  };

  return (
    <div className="container">
      <div className="box">
        <div className="controls">
          <label>
            X Position:
            <input
              type="number"
              value={x}
              step="0.1"
              onChange={(e) => setX(parseFloat(e.target.value))}
            />
          </label>
          <label>
            Y Position:
            <input
              type="number"
              value={y}
              step="0.1"
              onChange={(e) => setY(parseFloat(e.target.value))}
            />
          </label>
          <label>
            Item Width:
            <input
              type="number"
              value={itemWidth}
              step="0.1"
              onChange={(e) => setItemWidth(parseFloat(e.target.value))}
            />
          </label>
          <label>
            Item Height:
            <input
              type="number"
              value={itemHeight}
              step="0.1"
              onChange={(e) => setItemHeight(parseFloat(e.target.value))}
            />
          </label>
          <label>
            Grid Columns (X):
            <input
              type="number"
              value={gridColumns}
              onChange={(e) => {
                const newColumns = parseInt(e.target.value);
                setGridColumns(newColumns);
              }}
            />
          </label>
          <label>
            Grid Rows (Y):
            <input
              type="number"
              value={gridRows}
              onChange={(e) => {
                const newRows = parseInt(e.target.value);
                setGridRows(newRows);
              }}
            />
          </label>
          <label>
            Show Grid:
            <input
              type="checkbox"
              checked={isGridVisible}
              onChange={() => setIsGridVisible(!isGridVisible)}
            />
          </label>
          <label>
            Image Source:
            <input
              type="text"
              value={imageSource}
              onChange={(e) => setImageSource(e.target.value)} // Update image source on change
            />
          </label>
        </div>

        <div
          className="grid-container"
          style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}
        >
          {Array.from({ length: gridColumns * gridRows }).map((_, index) => {
            const row = Math.floor(index / gridColumns);
            const col = index % gridColumns;

            const posX = x + col * itemWidth;
            const posY = y + row * itemHeight;
            const isHovered = hoveredItem === `${posX}, ${posY}`; // Updated hover logic

            return (
              <div
                className="grid-item"
                key={index}
                onClick={() => handleItemClick(col, row)}
                onMouseEnter={() => setHoveredItem(`${posX}, ${posY}`)} // Set hovered item
                onMouseLeave={() => setHoveredItem(null)} // Reset hovered item
                style={{
                  backgroundImage: `url(${itemImages[index]})`,
                  backgroundPosition: `-${x + col * itemWidth}px -${
                    y + row * itemHeight
                  }px`,
                  width: `${itemWidth}px`,
                  height: `${itemHeight}px`,
                  backgroundSize: "initial",
                  position: "relative",
                  border: isGridVisible ? "1px dashed red" : "none",
                  transition: "background-color 0.3s",
                  backgroundColor: isHovered
                    ? "rgba(0, 255, 0, 0.3)"
                    : "transparent", // Hover effect
                }}
              >
                {isGridVisible && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: "1px dashed rgba(255, 0, 0, 0.5)",
                      pointerEvents: "none",
                    }}
                  />
                )}
                {isHovered && ( // Tooltip for hovered item
                  <div
                    className="tooltip"
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid black",
                      padding: "5px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                      zIndex: 10,
                    }}
                  >
                    posX: {posX}, posY: {posY}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageTest;
