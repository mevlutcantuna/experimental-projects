const Sidebar = () => {
  return (
    <div>
      <div
        id="section-1"
        className="p-4 bg-red-400 mb-4 w-40 flex items-center justify-center flex-col"
      >
        <h6>Section 1</h6>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>

      <div
        id="section-2"
        className="p-4 bg-blue-400 mb-4 w-40 flex items-center justify-center flex-col"
      >
        <h6>Section 2</h6>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>

      <div
        id="section-3"
        className="p-4 bg-orange-400 w-40 flex items-center justify-center flex-col"
      >
        <h6>Section 3</h6>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
