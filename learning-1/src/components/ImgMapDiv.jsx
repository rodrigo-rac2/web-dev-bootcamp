export function ImgMapDiv({ list }) {
  if (!list || !Array.isArray(list)) {
    console.error("Invalid or missing list prop:", list);
    return <div>Invalid list</div>; // Fallback UI
  }
  return (
    <div>
      {list.map((li, index) => (
        <div key={index}>
          <img
            data-test-id={"list-li-" + index}
            alt={li.name}
            title={li.name}
            src={li.img}
            className="square-img"
          />
          <br />
          {li.name}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
